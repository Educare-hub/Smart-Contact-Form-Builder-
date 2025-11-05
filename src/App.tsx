
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { About } from './components/about/About'
import Error from './components/Error'
import { Register } from './components/register/Register'
import { Login } from './components/login/Login'
import LandingPage from './Pages/LandingPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '*',
      element: <Error />
    }

  ])
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
