import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="button-primary u-full-width h-auto mb-5"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            <h5 className="py-3 mb-0 letter-spacing-1">
                What should I do ?
            </h5>
        </button>
    </div>
);

export default Action;