// import { Button } from '@material-ui/core';
// import React, { memo, useCallback, useState } from 'react';
// import Container from './components/Container';
// import { Navbar } from './components/Navbar';
// import { ContextProvider } from './contexts';

// const Item = memo(({ id, value, onChange }: any) => {
//   console.log(id, ' rendered');

//   return <input onChange={(e) => onChange(id, e.target.value)} value={value} />;
// });

// function App() {
//   console.log('rendered');
//   const [first, setfirst] = useState(1);
//   const [items, setItems] = useState([
//     { value: '' },
//     { value: '' },
//     { value: '' },
//   ]);

//   const onChange = useCallback((id, value) => {
//     setItems((prevItems) =>
//       prevItems.map((item, index) => {
//         return index !== id ? item : { value: value };
//       })
//     );
//   }, []);
//   function lala(id: any, value: any) {
//     setItems((prevItems) =>
//       prevItems.map((item, index) => {
//         return index !== id ? item : { value: value };
//       })
//     );
//   }

//   return (
//     <div>
//       {/* <Button onClick={() => setstate((prev) => ++prev)}>{state}</Button>
//       <Button
//         onClick={() => {
//           setstate(21);
//           setstate2(3);
//         }}
//       >
//         {state2}
//       </Button> */}
//       <Button onClick={() => setfirst(2)}>clik me</Button>
//       {/* {items.map((item, index) => (
//         <Item key={index} id={index} value={item.value} onChange={lala} />
//       ))} */}
//     </div>
//   );
// }

// export default App;

// import React, { Fragment } from 'react';
// class WelcomeMessage extends React.Component<{ user: any }> {
//   render() {
//     console.log('render WelcomeMessage');
//     return <label>Hello {this.props.user}</label>;
//   }
// }
// class App extends React.PureComponent {
//   state: any = { user: '1' };
//   render() {
//     console.log('render Page');
//     return (
//       <Fragment>
//         <WelcomeMessage user={this.state.user} />
//         <button onClick={() => this.setState({ user: 'Jack' })}>
//           Set User
//         </button>
//       </Fragment>
//     );
//   }
// }

import React from 'react';

const App = () => {
  const [value, setvalue] = React.useState(0);
  const requestRef = React.useRef(0);

  const start = () => {
    setvalue((f) => f + 1);
    setTimeout(() => {
      console.log(value);
    }, 2000);
    // requestRef.current = requestAnimationFrame(animation);
  };

  const animation = () => {
    setvalue((f) => f + 1);
    console.log(value);
    requestRef.current = requestAnimationFrame(animation);
  };

  const stop = () => cancelAnimationFrame(requestRef.current);

  return (
    <div>
      <p>{value}</p>
      <button onClick={start}> start</button>
      <button onClick={stop}> stop</button>
      <button
        onClick={() => {
          setvalue((f) => f + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
