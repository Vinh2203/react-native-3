/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import Header from './Header';
import LoginForm from './LoginForm';
import Button from './Button';

export default class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        loggedin: false
      }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAr2ceLCsSakK5Eqa9ytlzLRSTLm4Tp5q0",
      authDomain: "auth-14e1f.firebaseapp.com",
      databaseURL: "https://auth-14e1f.firebaseio.com",
      projectId: "auth-14e1f",
      storageBucket: "auth-14e1f.appspot.com",
      messagingSenderId: "912483365314"
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedin: true})
      }else{
        this.setState({loggedin: false})
      }
    })
  }

  renderContent(){
      if(this.state.loggedin){
        return (
            <Button>Log out</Button>
        );
      }

      return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        {this.renderContent()}
      </View>
    );
  }
}
