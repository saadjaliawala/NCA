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



const DetailScreen = (props) => {
    return(
      <View>
        <Text>Detail Screen</Text>

        <Button
        title="Go to About"
        onPress={() => props.navigation.navigate('About')}
      />
      </View>
    )
  }

  
  export default DetailScreen;