import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { ChurchLogo } from '../../assets/images'

const SplashScreen = ({navigation}) => {
  useEffect(() =>{
    setTimeout(() => {
      navigation.navigate('Welcome')
    },2000)
  })
  return (
    <View style={{
      backgroundColor:'#0589C1',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Image source={ChurchLogo}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})