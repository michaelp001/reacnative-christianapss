import { StyleSheet, Text, View,Image,TouchableOpacity,Alert,ActivityIndicator } from 'react-native'
import React from 'react'
import { HOME_Wellcome,ArrowLeft,MessageSign,PasswordSign } from '../../assets'
import { Button,TextInput } from '../../components/atoms'
import { useState } from 'react'





const SignIn = ({navigation}) => {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [loading,setLoading] = useState({
    loadingLogin:false,
    loadingSignin:false
  })


  const AuthLogin = async()=>{
    try{
      setLoading({loadingLogin:true})
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1i3t3bufE6CmYCPfaZkBUsAwmwqm7yio",{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          email:email,
          password:password,
          returnSecureToken:true
          })
        })
      const resData = await response.json()
      if(response.ok){
        await navigation.navigate('MainApp');
      } else{
        Alert.alert('An Error Occured!!',resData.error.message,[{
          text:'Okay',
        }])
      }
      setLoading({loadingLogin:false})
    }catch (error){
      console.log(error)
      setLoading({loadingLogin:false})
    }
  }

  return (
  <View style={{flex:1}}>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:20,marginHorizontal:30}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Welcome')}>
        <Image source={ArrowLeft}/>
      </TouchableOpacity>
      <Text style={{color:'#0589C1',marginLeft:10}}>Sign In</Text>
    </View>

    <View style={{alignItems:'center', marginTop:30}}>
      <Image source={HOME_Wellcome}/>
    </View>
    <View style={{flex:1,backgroundColor:'#0589C1',
    borderTopLeftRadius:30,borderTopRightRadius:30,marginTop:-280}}>
      <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:30,marginTop:30}}>
        <Image source={MessageSign}/>
        <TextInput 
          onChangeText={(text)=>{
            setEmail(text);
          }}
          value="email"
          placeholder="Type your email address"
          
        />
      </View>
      <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:30,marginTop:30}}>
      <Image source={PasswordSign}/>
        <TextInput
          secureTextEntry={true} 
          onChangeText={(text)=>{
            setPassword(text);
          }}
          placeholder="Type your password"
          
          />
      </View>

      <View style={{marginHorizontal:30,marginTop:30}}>
          <Button  onPress={AuthLogin} text="Login">
             {loading.loadingLogin ? <ActivityIndicator size="small" color="white"/>:<Text style={{color:"black"}}>Login</Text>}
          </Button>

      </View>

      <View style={{marginHorizontal:30,marginTop:10}}>
        <Button text="Register" onPress={()=> navigation.navigate('SignUp')}/>
      </View>
    </View>
  </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})