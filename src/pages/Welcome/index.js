import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { HOME_Wellcome } from '../../assets'
import { Button } from '../../components/atoms'

const Welcome= ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <View style={{alignItems:'center', marginTop:30}}>
        <Image source={HOME_Wellcome}/>
      </View>
      <View style={{flex:1,backgroundColor:'#0589C1',
    borderTopLeftRadius:30,borderTopRightRadius:30,marginTop:-280}}>
        <View style={{alignItems:'center', textAlign:'center',marginTop:30}}>
          <Text style={{fontSize:30,paddingHorizontal:60,color:'white',textAlign:'center'}}>1 Apps can  
            <Text style={{fontWeight:'700',}}>Support All </Text>
            your needs
          </Text>
        </View>
        <View style={{alignItems:'center',marginTop:30}}>
          <Text style={{fontSize:16,paddingHorizontal:90,color:'white',textAlign:'center'}}>App to search and find the needs that suit you best</Text>
        </View>
        <View style={{marginHorizontal:30,marginTop:30}}>
          <Button text="Let’s Get Started" onPress={()=> navigation.navigate('MainApp')}/>
        </View>

        <View style={{marginHorizontal:30,marginTop:10}}>
          <Button text="Sign In" onPress={()=> navigation.navigate('SignIn')}/>
        </View>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})