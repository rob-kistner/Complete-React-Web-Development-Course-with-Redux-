/* -- COURSE COMPONENT -------------------------------------- */

let count = 0;

const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
};

const tmplCounter = (
    <div>
        <h1>Count: { count }</h1>
        <button onClick={ addOne }>+1</button>
        <button onClick={ minusOne }>-1</button>
        <button onClick={ reset }>reset</button>
    </div>
);

/* -- RENDER -------------------------------------- */

var appRoot = document.getElementById('app');

ReactDOM.render(
    tmplCounter,
    appRoot
);
