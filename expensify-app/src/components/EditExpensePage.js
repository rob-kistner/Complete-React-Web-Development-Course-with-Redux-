import React from 'react';


const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>EDIT EXPENSE</h1>
      {/* dyanmic route parameter passed into props */}
      <p>Editing item {props.match.params.id}</p>
    </div>
  );
}


export default EditExpensePage;