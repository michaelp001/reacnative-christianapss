import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { HOME_Wellcome,ArrowLeft,MessageSign,Pic } from '../../assets'
import { Button,TextInput } from '../../components/atoms'

const NextPage = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:20,marginHorizontal:30}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('SignUp')}>
        <Image source={ArrowLeft}/>
      </TouchableOpacity>
      <Text style={{color:'#0589C1',marginLeft:10}}>Sign Up</Text>
    </View>
  <View style={{alignItems:'center', marginTop:30}}>
    <Image source={HOME_Wellcome}/>
  </View>
  <View style={{flex:1,backgroundColor:'#0589C1',
borderTopLeftRadius:30,borderTopRightRadius:30,marginTop:-200}}>

    <View style={{flex:1,marginHorizontal:30,marginTop:15}}>
      <TextInput placeholder="Type your phone number"/>
    </View>
    <View style={{flex:1,marginHorizontal:30,marginTop:15}}>
      <TextInput placeholder="Type your address"/>
    </View>
    <View style={{flex:1,marginHorizontal:30,marginTop:15}}>
      <TextInput placeholder="Type your house number"/>
    </View>
    <View style={{flex:1,marginHorizontal:30,marginTop:15}}>
      <TextInput placeholder="Type your city"/>
    </View>
    <View style={{flex:1,marginHorizontal:30,marginTop:15}}>
      <Button text="Register" onPress={()=> navigation.navigate('MainApp')}/>
    </View>
  </View>
</View>
  )
}

export default NextPage

const styles = StyleSheet.create({})