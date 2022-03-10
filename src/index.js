import React from "react"
import { render } from "react-dom"
import App from "./components/app"
import { Provider } from "react-redux"
import { createStore } from "redux"

import reducers from "./reducers"

const store = createStore(reducers)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
const root = document.querySelector("#root")

render(app, root)
