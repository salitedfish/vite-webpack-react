import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from '@/router/router'
import store from "@/store/store"
import "@/tailwind.less"
import '@/index.less'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={'loading'}>
      <Provider store={store}>
        <HashRouter>
          {
            renderRoutes(routes)
          }
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
