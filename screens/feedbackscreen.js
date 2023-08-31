import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Feedbackscreen extends Component{
  render(){
    return(
      <View style={{backgroundColor:'lightgreen', flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontSize:45, color:"darkgreen"}}>FeedBack Screen</Text>
      </View>
    )
  }
}