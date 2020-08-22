import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';

  
  import React from 'react';



const AboutScreen = (props) => {
    return(
      <View>
        <Text>About Screen</Text>
        <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home')}
      />

<Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
       <Button
        title="Go to about"
        onPress={() => props.navigation.navigate('About')}
      />

      </View>
    )
  }

  
  export default AboutScreen;