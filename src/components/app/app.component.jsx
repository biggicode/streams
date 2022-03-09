import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import StreamList from "../stream-list"
import StreamShow from "../stream-show"
import StreamCreate from "../stream-create"
import StreamDelete from "../stream-delete"
import StreamEdit from "../stream-edit"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
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
