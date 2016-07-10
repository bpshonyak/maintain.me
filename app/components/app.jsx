import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
      primary1Color: '#FFD700',
      primary2Color: '#0E376F',
      primary3Color: '#7B68EE',
      textColor: '#0E376F',
      alternateTextColor: '#0E376F'
    }
});


 const App = (props) => {
    return (
      <div>
         <MuiThemeProvider muiTheme={muiTheme}>
             { props.children }
        </MuiThemeProvider>
      </div>
    );
}

export default App;
