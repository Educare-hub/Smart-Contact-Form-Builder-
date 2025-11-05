import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import { Register } from './components/register/Register'
import { Login } from './components/login/Login'
import LandingPage from './Pages/LandingPage'
import { AboutPage } from './Pages/AboutPage'

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <Error /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
