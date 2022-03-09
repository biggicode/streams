import React from "react"
import { render } from "react-dom"
import App from "./components/app"

const app = <App />
const root = document.querySelector("#root")

render(app, root)
