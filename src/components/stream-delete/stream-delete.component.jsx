import React from "react"
import Modal from "../modal"
import history from "../../history"

class StremDelete extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div>
        StremDelete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    )
  }
}

export default StremDelete
