import React,{Component} from 'react';
import {View,Text } from 'react-native';
import firebase from 'firebase';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Spinner from './Spinner';

export default class LoginForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  }

  onButtonPress(){
    const {email,password} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginFail(){
    this.setState({error: 'Authentication failed',loading:false})
  }

  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false

    })
  }

  renderButton(){
      if(this.state.loading){
        return <Spinner size='small'/>
      }

      return (
        <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
      )
  }

  render(){

    return(
      <View>
        <Card>
          <CardSection>
            <Input onChangeText={email=>{this.setState({email})}} value={this.state.email} placeholder={'user@gmail.com'} label={'Email'}></Input>
          </CardSection>

          <CardSection>
              <Input secureTextEntry onChangeText={password=>{this.setState({password})}} value={this.state.password} placeholder={'password'} label={'Password'}></Input>
          </CardSection>

          <Text style ={styles.errorTextStyle}>{this.state.error}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20
  }
}
