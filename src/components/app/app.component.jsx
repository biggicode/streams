import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

const PageOne = () => {
  return (
    <div>
      page one
      <Link to="/pagetwo">Navigate to page two</Link>
    </div>
  )
}
const PageTwo = () => {
  return (
    <div>
      page Two
      <button>Click Me!</button>
      <Link to="/">Navigate to page one</Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
