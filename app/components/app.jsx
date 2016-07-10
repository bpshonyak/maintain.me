import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 const App = (props) => {
    return (
      <div>
         <MuiThemeProvider>
             { props.children }
        </MuiThemeProvider>
      </div>
    );
}

export default App;
