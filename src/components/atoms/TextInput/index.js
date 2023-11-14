import { StyleSheet, Text, View,TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = ({placeholder,onChangeText,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInputRN 
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  container:{backgroundColor:"white",borderRadius:30,paddingLeft:20,flex:1,marginLeft:15}
})