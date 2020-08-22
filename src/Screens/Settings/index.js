import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button, 
  Image,
  TouchableOpacity
} from 'react-native';


import React , { useEffect , useState } from 'react';
import store from '../../redux/store.js';
import {UserDetails} from '../../redux/actions/UserDetails';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {LoginManager} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';




const GoBacks = (props) => {
  // props.props.navigation.navigate('Chat');
  props.navigation.goBack();


}

const SignOut = async () => {
  // console.log(FirebaseUser.user);
//   const signout = await firestore()
//   .collection('Users')
//   .doc(FirebaseUser.user.uid)
//   .update({
//     // name: FirebaseUser.user.displayName ,
//     // email: FirebaseUser.user.email,
//     // photoUrl: FirebaseUser.user.photoURL ,
//     // uid: FirebaseUser.user.uid,
//     active: false
    
// }  )
  store.dispatch(UserDetails(null));
    LoginManager.logOut();
    auth().signOut();
    await GoogleSignin.signOut();
  }


const SettingsScreen = (props) => {

const [FirebaseUser , SetFirebaseUser] = useState();

useEffect(() => {
  SetFirebaseUser(store.getState().UserDetails);
  console.log(store.getState().UserDetails);

} , [] )

  return(
    <View>
        <View  style={{ padding: 30 , flexDirection: 'row' , justifyContent: 'space-between' }}  >
        <Feather 
        name="arrow-left"
        size =  {25}
        onPress= {() => GoBacks(props)  }
       
      />
      <AntDesign 
      name="edit"
      size={25}

      />
      </View>
      <ScrollView>
      <View style={{ flexDirection: 'row' , paddingHorizontal: 25 , paddingTop: 10 , alignItems: 'center' }} >
                                  
        <Image 
            source = {{ uri: FirebaseUser?.user?.photoURL }}
            style={{ height: 75 , width: 75 , borderRadius: 75  }} 
        />
        <View style={{ flexDirection: 'column' }} >
        <Text style={{ alignSelf: 'center' , paddingLeft: 20 , fontWeight: 'bold' , fontSize: 20  }} >{ FirebaseUser?.user?.displayName }</Text>
        <Text style={{ color: 'grey' , paddingLeft: 20 , paddingTop: 10}} > JavaScript Developer </Text>
        
        </View>
      </View>
      <View  style={{ paddingTop: 40 , paddingLeft: 30, flexDirection: 'row' }} >
        <FontAwesome 
        name = "phone"
        size = {20 }
        color= 'grey'
        />
        <Text style= {{ color: 'grey' , paddingLeft: 30 }}> +923368342830 </Text>

      </View>
      <View  style={{ paddingTop: 20 , paddingLeft: 30, flexDirection: 'row' }} >
    <Fontisto 
      name = "email"
      size = {20 }
      color = 'grey'
    />
    <Text style= {{ color: 'grey' , paddingLeft: 30 }} >{FirebaseUser?.user?.email} </Text>

      </View>
    <View style={{ marginTop: 40 ,  height: 1 , width: '100%'  , backgroundColor: 'lightgrey' }} ></View>

      <View style={{ flexDirection: 'row' , paddingTop: 30 , paddingHorizontal: 25 }} >
        <AntDesign 
        name= "hearto"
        size = { 20}
        color = "blue"
        />

        <Text style={{ paddingLeft: 30  }} > Your Favourites </Text>

      </View>
      <View style={{ flexDirection: 'row' , paddingTop: 40 , paddingHorizontal: 25 }} >
        <MaterialIcons 
        name= "payment"
        size = { 20}
        color = "blue"
        />

        <Text style={{ paddingLeft: 30  }} > Payment </Text>

      </View>

      <View style={{ flexDirection: 'row' , paddingTop: 40 , paddingHorizontal: 25 }} >
        <AntDesign 
        name= "tago"
        size = { 20}
        color = "blue"
        />

        <Text style={{ paddingLeft: 30  }} > Promotion </Text>

      </View>

      <View style={{ marginTop: 40 ,  height: 1 , width: '100%'  , backgroundColor: 'lightgrey' }} ></View>

      <TouchableOpacity style={{ flexDirection: 'row' , paddingTop: 40 , paddingHorizontal: 25 }} 
      onPress = { () => SignOut() }
      >
        <AntDesign 
        name= "poweroff"
        size = { 20}
        color = "red"
        />

        <Text style={{ paddingLeft: 30 , color: 'red'  }} > LogOut </Text>

      </TouchableOpacity>


      </ScrollView>

    </View>
  )
}


export default SettingsScreen;