import React from 'react';
import './App.css'
import SignIn from './components/SignIn';
import Header from './components/Header';
import Main from './components/Main'
import { observer, inject } from 'mobx-react'

@inject('userStore')
@observer
class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isSignIn : false,
    }
  }

  signIn = (values) => {
    const { email } = values;
    const { userStore } = this.props
    userStore.setUsermail(email)
    this.setState({
      isSignIn: true
    })
  }

  render(){
    const { isSignIn } = this.state
    return (
      isSignIn ? <div className="content__container">
      <Header />
      <Main />
    </div> : <div className="signin__container">
      <SignIn signIn={this.signIn} />
    </div>)
  }
}

export default App;