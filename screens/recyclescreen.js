import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Recyclescreen extends Component{
  render(){
    return(
      <View style={{backgroundColor:'lightgreen', flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontSize:50, color:"darkgreen"}}>Recycle Screen</Text>
      </View>
    )
  }
}