
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Component/Router/Router/Router'

function App() {


  return (
    <>

      <RouterProvider
        router={router}
      ></RouterProvider>


    </>
  )
}

export default App
