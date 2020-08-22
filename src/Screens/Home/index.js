import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button ,
    TouchableOpacity ,
    Image
  } from 'react-native';
//   import { NavigationContainer } from '@react-navigation/native';
//   import { createStackNavigator } from '@react-navigation/stack';
  
import React, {useEffect , useState } from 'react';
import auth from '@react-native-firebase/auth';
  import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
  import styles from './style.js';

  import store from '../../redux/store.js';
  import {Abcd} from '../../redux/actions/index.js';
  import {FbLogin} from '../../redux/actions/index.js';
  import {GoogleLogin} from '../../redux/actions/GoogleLogin.js';
  import Entypo from 'react-native-vector-icons/Entypo';
  

//   import Navigation from './src/Navigation/Stack.js';

import {LoginManager} from 'react-native-fbsdk';
import style from './style.js';

const HomeScreen = (props) => {



  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '48874566521-220kv48vh109ule8nffdhvihbc8a3l0u.apps.googleusercontent.com',
    });
      
  },[])
  



 
       const signInWithFb = () => {
         store.dispatch(FbLogin());  
       }

       
   
    const GoogleSignIn =  () => {
     
      // try {
     
      // const { idToken } = await GoogleSignin.signIn();

      // // Create a Google credential with the token
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
    
      // // Sign-in the user with the credential
      // return auth().signInWithCredential(googleCredential);
      // // const user =  auth().signInWithCredential(googleCredential);
      // // alert(JSON.stringify(user));
      // // return user;

      
      // }

      // catch(error)
      // {
      //   alert(error);
      // }

      store.dispatch(GoogleLogin())
      


    };   


    return(
      <View  style= {{ flex: 1 , backgroundColor: 'white' }} >
        {/* <Text>Home Screen</Text> */}

      <View style={{ flex: 1 }} >

        <Image 
        source={require('../../assets/login.jpg')}
        style={{ height: 200 , width: '80%' , alignSelf: 'center' , marginTop: '30%'  }}
        />

      </View>

        {/* <Button
        title="SIGN IN WITH FACEBOOK"
        onPress={() => signInWithFb()}
      /> */}
      
      <TouchableOpacity style={style.fbstyle} 
      onPress={() => signInWithFb() }
      >
        <View style={{ height: 32 , width: 32 , backgroundColor: 'white' }} >
       <Image 
       source ={ require('../../assets/fb.png') }
       style={styles.fbimagestyle}
       />
       </View>
        <Text style={{ color: 'white' , paddingLeft: 15 }} >Continue With Facebook</Text></TouchableOpacity>

        <TouchableOpacity style={styles.googlestyle} 
        onPress={() => GoogleSignIn() }
        >
          <Image 
          source={require('../../assets/google.jpg')}
          style={styles.googleimagestyle}
          />
          <Text style={{ color: 'black' , paddingLeft: 15 }} >Continue With Google</Text></TouchableOpacity>
         
       
      {/* <Button
        title="Go to GoogleSignIn"
        onPress={() => GoogleSignIn()}
      /> */}


       
      </View>
    )
  }

  
  export default HomeScreen;