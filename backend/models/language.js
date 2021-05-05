
const conjunction = ['after','as','before', 'when','while','until','since','soon','once']
const adjective = ['annual','late','quick','rapid','slow', 'future','old', 'fast', 'early','daily']
const adverb = ['annually','lately','quickly','rapidly','slowly', 'never','sometimes','often', 'yesterday','today', 'tomorrow','later','now']


const ACCEPTED_LANGUAGE_SCOPE= {
    a: ['after','as', 'annual','annually'],
    b: ['before'],
    d: ['daily'],
    e: ['early'],
    f: ['fast', 'future'],
    l: ['late','later','lately'],
    n: ['now','never'],
    o: ['once','often','old'],
    q: ['quick','quickly'],
    r: ['rapid','rapidly'],
    s: ['since','soon', 'slow','slowly','sometimes'],
    t: ['today','tomorrow'],
    u: ['until'],
    w: ['when','while'],
    y: ['yesterday'],

}


module.exports = ACCEPTED_LANGUAGE_SCOPE

