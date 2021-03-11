import { createMuiTheme } from '@material-ui/core/styles';
import { color } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors/grey';



const theme = createMuiTheme({
    
    palette: {
        primary: {
          main: '#212121',
        },
        secondary: {
          main: '#fafafa',
        },
        error: {
          main: '#212121', 
        },
        background: {
          default: '#fff',
        },
      },

});

export default theme;