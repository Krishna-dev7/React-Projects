import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Contact, About, Github } from './components'
import { githubInfo } from './components/Github.jsx'
import Layout from './Layout.jsx'

// creating our router object first
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        loader: githubInfo,
        path: "github",
        element: <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
