import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import StreamList from "../stream-list"
import StreamShow from "../stream-show"
import StreamCreate from "../stream-create"
import StreamDelete from "../stream-delete"
import StreamEdit from "../stream-edit"
import Header from "../header"

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          {console.log(process.env.REACT_APP_CLIENT_ID)}
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
