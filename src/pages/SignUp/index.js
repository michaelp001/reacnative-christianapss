import { StyleSheet, Text, View,Image,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { HOME_Wellcome,ArrowLeft,MessageSign,PasswordSign,Pic,ProfileSign } from '../../assets'
import { Button,TextInput } from '../../components/atoms'
import { useState } from 'react'
const SignUp = ({navigation}) => {


  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [name,setName] = useState()

  const AuthSign = async()=>{
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1i3t3bufE6CmYCPfaZkBUsAwmwqm7yio",{
      method:"POST",
      headers:{
        'Content-type':'aplication/json'
      },
      body:JSON.stringify({
        email:email,
        password:password,
        name:name,
        returnSecureToken:true
      })
    })
    const resData = await response.json()
    if(response.ok){
      Alert.alert('Register Success!')
      navigation.navigate('MainApp')
    } else{
      Alert.alert('An Error Occured!!',resData.error.message,[{
        text:'Okay'
      }])
    }
  }
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:20,marginHorizontal:30}}>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('SignIn')}>
          <Image source={ArrowLeft}/>
        </TouchableOpacity>
        <Text style={{color:'#0589C1',marginLeft:10}}>Sign Up</Text>
      </View>
    <View style={{alignItems:'center', marginTop:30}}>
      <Image source={HOME_Wellcome}/>
    </View>
    <View style={{flex:1,backgroundColor:'#0589C1',
  borderTopLeftRadius:30,borderTopRightRadius:30,marginTop:-280}}>
      
      <TouchableOpacity activeOpacity={0.7} style={{marginTop:15,alignItems:'center'}}>
        <Image source={Pic}/>
      </TouchableOpacity>
      
      <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:30,marginTop:30}}>
      <Image source={ProfileSign}/>
        <TextInput
         placeholder="Type your full name"
         onChangeText={(text)=>{
          setName(text);
        }}
         />
      </View>
      <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:30,marginTop:30}}>
      <Image source={MessageSign}/>
        <TextInput
           placeholder="Type your email address"
           onChangeText={(text)=>{
            setEmail(text);
          }}
        />
      </View>
      <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:30,marginTop:30}}>
      <Image source={PasswordSign}/>
        <TextInput
          secureTextEntry={true}
         placeholder="Type your password"
         onChangeText={(text)=>{
          setPassword(text);
        }}
        />
      </View>
      <View style={{marginHorizontal:30,marginTop:30}}>
        <Button text="Next" onPress={AuthSign}/>
      </View>
    </View>
  </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})