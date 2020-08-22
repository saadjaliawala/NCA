import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import HomeScreen from '../Screens/Home';
import DetailScreen from '../Screens/Details';
import AboutScreen from '../Screens/About';
import ChatScreen from '../Screens/Chat';
import UsersScreen from '../Screens/Users';
import ChatBoxScreen from '../Screens/ChatBox';
import SettingsScreen from '../Screens/Settings';


import Ionicons from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import FeatherIcon from "react-native-vector-icons/Feather";



const Navigation = (props) => {

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const ChatBoxScreenStack = () => {
//   return(
 
//    <Stack.Navigator   >

// <Stack.Screen
//   options = {() => ({
//     headerShown: false
//   })}
//   name="ChatBox" component={ChatBoxScreen} />
 
//    <Stack.Screen
//    options = {() => ({
//      headerShown: false
//    })}
//    name="Chat" component={ChatScreenStack} />
   
   
//      </Stack.Navigator>
//   )
//  }
 


const ChatScreenStack = () => {
 return(

  <Stack.Navigator 

  screenOptions={{
    animationEnabled: Platform.OS === 'ios'
  }}
  >
    

  <Stack.Screen
  options = {() => ({
    headerShown: false
  })}
  name="Chat" component={ChatScreen} />
  <Stack.Screen name="Users" component={UsersScreen} />
  <Stack.Screen 
  options = {() => ({
    headerShown: false
  })}
  name="ChatBox" component={ChatBoxScreen} />
  
  
    </Stack.Navigator>
 )
}

const UserScreenStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
       options = {() => ({
        headerShown: false
      })}
      name="Users" component={UsersScreen} />
      <Stack.Screen 
      options = {() => ({
        headerShown: false
      })}
      name="Chat" component={ChatScreenStack} />
    </Stack.Navigator>
  )
}


const HomeScreenStack = () => {
  return (

  
    <Stack.Navigator>
    {/* <Tab.Navigator> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* <Stack.Screen name="About" component={AboutScreen} /> */}
       
        {/* </Tab.Navigator> */}
      </Stack.Navigator>
    
  )
}

const NotShowTab = ['Details','About' , 'ChatBox' ];




  const showTab = (route, array) => {


    // console.log(route.state,'saad');
    
    const RouteName = route?.state?.routes[route.state.index]?.name;
    return !array.includes(RouteName);
  };

const TabNabigator = () => {
  return(
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Login') {
          return <Ionicons name="md-Login" size={30} color={focused ? 'black' : "grey"} />;
        } else if (route.name === 'Chat') {
          return <MatIcon name="chat-bubble-outline" size={30} color={focused ? 'black' : "grey"} />;

        } else if (route.name === 'Users') {
          return <FeatherIcon name="user" size={30} color={focused ? 'black' : "grey"} />;
        } else if (route.name === 'Settings') {
          return <FeatherIcon name="settings" size={30} color={focused ? 'black' : "grey"} />;

        }

        // You can return any component that you like here!
      },

    })
    }
    initialRouteName="Chat"
    tabBarOptions={
      {
        showLabel: false
      }
    }
    
    >
      <Tab.Screen 
      name="Chat" component={ChatScreenStack}
      options={({route}) => ({
        tabBarVisible: showTab(route, NotShowTab),
      })}
       />
        <Tab.Screen 
      name="Users" component={UserScreenStack}
      options={({route}) => ({
        tabBarVisible: showTab(route, NotShowTab),
      })}
       />
       <Tab.Screen 
      name="Settings" component={SettingsScreen}
      options={({route}) => ({
        tabBarVisible: showTab(route, NotShowTab),
      })}
       />
     
    </Tab.Navigator>
    
  )
}

  const FinalStack = () => {
    const {user} = props;
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode="none" >
          <Stack.Screen 
      name="LogIn Screen"
      component= { user? TabNabigator : HomeScreen }
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <FinalStack/>
  );
}
export default Navigation;