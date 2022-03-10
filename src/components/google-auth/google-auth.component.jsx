import React from "react"

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "email",
      })
    })
  }

  render() {
    return <div>google auth</div>
  }
}

export default GoogleAuth
