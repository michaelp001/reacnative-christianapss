import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Arrow, Circle, Event1, Menus, NoEvent, Event2, Event3, Event4, } from '../../assets'


const MyCalendar = () => {
  return (
   // container
   <View style={styles.container}>
   {/* Top MENU */}
   <View style={styles.topmenu}>
      <Image source={Menus}/>
      <Text style={styles.fontEvent}>Event</Text>
      <Image source={Circle}/>
   </View>
   {/*END TOP MENU */}

   {/*Sub Container */}
   <View style={styles.subcontainer}>
    {/* No Event */}
      <View style={styles.noeventav}>
        <Image style={{ width:200, height:200}} source={NoEvent}/>
        <Text style={styles.noevent}>Belum ada event</Text>
        <Text style={styles.daftarevent}>Daftar event akan ditampilkan pada halaman ini</Text>
      </View>
    {/* End No Event */}

   </View>
   
</View>
  )
}

export default MyCalendar

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#0589C1'},
  topmenu :{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical: 15,marginHorizontal:30},
  fontEvent : {color:'white', fontWeight:'500' , fontSize:24},
  subcontainer:{flex:1,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30},
  noeventav:{flex:1,justifyContent:'center',alignItems:'center'},
  noevent:{fontSize:24,fontWeight:'700',color:'black',marginVertical:15},
  daftarevent:{color:'grey',paddingHorizontal:30,textAlign:'center'},
  order:{backgroundColor:'white',elevation:10,shadowColor:'black',marginHorizontal:15,marginTop:30,borderRadius:10},
  notifevent:{flexDirection:'row',alignItems:'center',backgroundColor:'#0589C1',paddingHorizontal:15,paddingVertical:5,
borderTopRightRadius:10,borderTopLeftRadius:10},
  warnanotif:{backgroundColor:'green',paddingHorizontal:10,paddingVertical:10,borderRadius:30,marginRight:5},
  detailevent:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:30,paddingHorizontal:20},
  fontname:{fontSize:16,fontWeight:'500',color:'black'},
  fonttype:{fontSize:12,color:'grey'},
  fontinfo:{fontSize:12,fontWeight:'400',color:'black'},
  nomorevent:{flexDirection:'row',paddingHorizontal:15,paddingBottom:10},


  
  
})