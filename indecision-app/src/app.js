/* -- COURSE COMPONENT -------------------------------------- */

let count = 0;
const myBtn = 'btn btn-secondary mr-3 py-2 px-3 text-uppercase font-weight-bold';

/**
 * The long & wonky way, re-render the app every time
 * the count altering functions are executed.
 */

const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    if(count > 0) count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};


/* -- RENDER -------------------------------------- */

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    
    const tmplCounter = (
        <div className="container mt-5">
            <h1>Count: { count }</h1>
            <button className={myBtn} onClick={ addOne }>+</button>
            <button className={myBtn} onClick={ minusOne }>-</button>
            <button className={myBtn} onClick={ reset }>reset</button>
        </div>
    );

    ReactDOM.render(
        tmplCounter,
        appRoot
    );    
};

renderCounterApp();