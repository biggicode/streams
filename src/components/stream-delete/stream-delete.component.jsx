import React from "react"
import Modal from "../modal"
import history from "../../history"

const StremDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  )

  return (
    <div>
      StremDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  )
}

export default StremDelete
