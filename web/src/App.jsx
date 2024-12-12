import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import PageIndex from './pages/Index'
import COLORS from './constants/colors'


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: COLORS.GLOBAL_COLORS.PRIMARY,
        contrastText: COLORS.GLOBAL_COLORS.TEXT,
      },
      secondary: {
        main: COLORS.GLOBAL_COLORS.SECONDARY,
        contrastText: COLORS.GLOBAL_COLORS.TEXT,
      }
    },
});


function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Routes>
                    <Route path='/' element={ <PageIndex /> } />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
