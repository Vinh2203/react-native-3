import React,{Component} from 'react';
import {View, TextInput,Text} from 'react-native';

export default class Input extends Component{

  render(){
    const {textInputStyle,labelStyle,containerStyle} = styles;
    return(
      <View style={containerStyle}>
        <Text style={labelStyle}>{this.props.label}</Text>
      <TextInput secureTextEntry={this.props.secureTextEntry} style={textInputStyle} placeholder={this.props.placeholder} onChangeText={this.props.onChangeText} value={this.props.value} label={this.props.label}></TextInput>
      </View>
    )
  }
}

const styles = ({
  textInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex:2
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
