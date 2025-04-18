// import logo from './assets/lekha.svg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Register from './pages/Register'

const router = createBrowserRouter(
  [
    {path:"/register", element:<Register />},
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hi Parth</h1>
    //   </header>
    // </div>
  );
}

export default App;