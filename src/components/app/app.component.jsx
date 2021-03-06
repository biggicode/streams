import React from "react"
import { Router, Route, Switch } from "react-router-dom"

import StreamList from "../stream-list"
import StreamShow from "../stream-show"
import StreamCreate from "../stream-create"
import StreamDelete from "../stream-delete"
import StreamEdit from "../stream-edit"
import Header from "../header"
import history from "../../history"

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
