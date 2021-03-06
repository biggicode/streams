import React from "react"
import { render } from "react-dom"
import App from "./components/app"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import reduxThunk from "redux-thunk"

import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
const root = document.querySelector("#root")

render(app, root)
