// import logo from './assets/lekha.svg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { ThemeProvider } from './context/ThemeContext';

const router = createBrowserRouter(
  [
    {path:"/register", element:<Register />},
    {path:"/login", element:<Login />}
  ]
)

function App() {
  return (
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hi Parth</h1>
    //   </header>
    // </div>
  );
}

export default App;