import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Homescreen from '../screens/homescreen';
import Feedbackscreen from '../screens/feedbackscreen';
import Recyclescreen from '../screens/recyclescreen';
import Rewardscreen from '../screens/rewardscreen';

const tab=createBottomTabNavigator()

export default class Tabnavigation extends Component{
  render(){
    return(
      <NavigationContainer>
        <tab.Navigator>
          screenOptions={({route})=>({
              tabBarIcon:({focused,color,size})=>{
                let iconName;
                if(route.name==="Home Screen"){
                  iconName="book";
                }
                else if(route.name==="FeedBack Screen"){
                  iconName="search";
                }else if(route.name==="Recycle Screen"){
                  iconName="recycle";
                }else if(route.name==="Rewards Screen"){
                  iconName="reward";
                }

                return(
                <Ionicons
                Ioniconsname={iconName}
                size={size}
                color={color}
                />
              )
            }
          })}
          

          <tab.Screen name="Home Screen" component={Homescreen}></tab.Screen>
          <tab.Screen name="FeedBack Screen" component={Feedbackscreen}></tab.Screen>
          <tab.Screen name="Recycle Screen" component={Recyclescreen}></tab.Screen>
          <tab.Screen name="Rewards Screen" component={Rewardscreen}></tab.Screen>
        </tab.Navigator>
      </NavigationContainer>
    )
  }
}