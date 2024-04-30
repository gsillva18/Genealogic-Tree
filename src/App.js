import { ToastContainer } from 'react-toastify';
import MyRoutes from "./Routers/Routes"
import { ThemeProvider, createTheme } from '@mui/material';
import "./App.css"


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#832be2',
    },
    secondary: {
      main: '#ffffff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyRoutes />
        <ToastContainer
          position='top-rigth'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
