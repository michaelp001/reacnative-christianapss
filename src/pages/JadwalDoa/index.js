import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { HOME_Wellcome,ArrowLeft,MessageSign,PasswordSign,BackButton } from '../../assets'
import { Button,TextInput } from '../../components/atoms'





const JadwalDoa = ({navigation,onPress}) => {
  return (
  <View style={{flex:1}} onPress={onPress}>
    <View style={styles.container1}>
      {/* button back  */}
        < View style={{flexDirection: 'row',marginHorizontal:30,marginVertical:30}}>
          <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('MainApp')}>
            <Image source={BackButton} />
          </TouchableOpacity>
        </View>
    </View>
  </View>
  )
}

export default JadwalDoa

const styles = StyleSheet.create({
  container1 : {flex:1,backgroundColor:'#0589C1'},
})