import { StrictMode, Suspense } from 'react'
import React, {lazy} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/Reducers/index.js'
import { Toaster } from 'react-hot-toast'

const App = lazy(()=> import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
    <Suspense>
    <App />
    <Toaster
      toastOptions={{
        position: 'top-right',
        style: {
          background : "#283046",
          color : 'white'
        }
      }}
      />
    </Suspense>
    </Provider>
  </BrowserRouter>,
)
