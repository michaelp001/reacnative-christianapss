import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({text,onPress}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'white',paddingHorizontal:30,paddingVertical:10, alignItems:'center',borderRadius:30}} 
      onPress={onPress}>
        <Text style={{color:'#0589C1',fontWeight:'500',fontSize:16}}>
        {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})