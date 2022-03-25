import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from '@/router/router'
import store from "@/store/store"
import "@/tailwind.less"
import '@/index.less'

console.log(import.meta.env.VITE_APP_TEXT)
console.log(import.meta.env.MODE)
console.log(import.meta.env.VITE_REACT_APP_TEXT)
console.log(import.meta.env)

ReactDOM.render(
  // <React.StrictMode>
    <Suspense fallback={'loading'}>
      <Provider store={store} >
        <HashRouter>
          {
            renderRoutes(routes)
          }
        </HashRouter>
      </Provider>
    </Suspense>,
  // </React.StrictMode>,

  document.getElementById('root')
)
