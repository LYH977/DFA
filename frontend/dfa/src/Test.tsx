import React from 'react';
import { debounce } from 'lodash';

type Character = {
  name: string;
};
export default function App() {
  const [characters, setCharacters] = React.useState<string[]>([]);

  async function search(criteria: string) {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${criteria}`
    );
    const body = await response.json();
    console.log('body.results', body.results);
    return body.results.map((result: Character) => result.name);
  }

  // Debounced function recreated on every render 😞
  // const debouncedSearch = debounce(async (criteria) => {
  //   setCharacters(await search(criteria));
  // }, 300);

  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      setCharacters(await search(criteria));
    }, 100)
  ).current;

  React.useEffect(() => {
    console.log('typing');
    return () => {
      console.log('cancelling');
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // 🐌 causes too many requests 😞
    // setCharacters(await search(e.target.value));

    // debounce(async () => {
    //   // 😕 debounced function never called
    //   console.log("debounce");
    //   setCharacters(await search(e.target.value));
    // }, 300);

    debouncedSearch(e.target.value);
  }

  return (
    <div className='App'>
      {console.log('rerendered')}
      <input
        type='search'
        placeholder='Enter your search'
        onChange={handleChange}
      />
      <ul>
        {/* {characters.map((character) => (
          <li key={character}>{character}</li>
        ))} */}
      </ul>
    </div>
  );
}
