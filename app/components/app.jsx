import React from 'react';

 const App = (props) => {
    return (
      <div>
        { props.children }
        <h1>Root App Component</h1>
      </div>
    );
}

export default App;
