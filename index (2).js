import {Component} from 'react'

import GoogleLogin from 'react-google-login'

import './index.css'

class Googles extends Component {
  state = {
    name: '',
    email: '',
    url: '',
  }

  responseGoogle = response => {
    const {history} = this.props
    console.log(response)
    this.setState({name: response.profileObj})
    this.setState({email: response.profileObj})
    this.setState({url: response.profileObj})
    // history.replace('/')
  }

  render() {
    const {name, email, url} = this.state
    return (
      <div className="App">
        <h1>Login with Google</h1>
        <h2>Welcome: {name}</h2>
        <h2>Email: {email}</h2>
        <img src={url} alt={name} />

        <GoogleLogin
          clientId="607921044452-261g3g9obeecchrsjuvajvvj4c4vtfku.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle2}
        />
      </div>
    )
  }
}

export default Googles
