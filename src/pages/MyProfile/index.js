import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Arrow, Circle, Document, John_due, Menus, Notification, Setting,Square } from '../../assets'


const MyProfile = ({navigation,onPress}) => {
  return (
    
    // container
    <View style={styles.container}  onPress={onPress}>
       {/* Top MENU */}
       <View style={styles.topmenu}>
          <Image source={Menus}/>
          <Text style={styles.fontProfile}>Profile</Text>
          <Image source={Circle}/>
       </View>
       {/*END TOP MENU */}

       {/*Sub Container */}
       <View style={styles.subcontainer}>
          <View style={styles.profile}>
            <Image source={John_due}/>
            <Text style={styles.fontname}>JOHN DOE</Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.buttonedit}>
                <Text style={styles.fontedit}>EDIT PROFILE</Text>
              </TouchableOpacity>
          </View>

          <View style={{marginVertical:50}}>     
            {/*Button 1*/}
            <TouchableOpacity activeOpacity={0.7} style={styles.buttonmenu}>
      
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={Setting}/>
                  <Text style={styles.fontmenu}>Setting</Text>
                </View>
                <View>
                <Image source={Arrow}/>
                </View>
            </TouchableOpacity>
            {/* END Button */}
            {/*Button 2*/}
            <TouchableOpacity activeOpacity={0.7} style={styles.buttonmenu}>
      
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={Document}/>
                  <Text style={styles.fontmenu}>Address</Text>
                </View>
                <View>
                <Image source={Arrow}/>
                </View>
            </TouchableOpacity>
            {/* END Button */}
            {/*Button 3*/}
            <TouchableOpacity activeOpacity={0.7} style={styles.buttonmenu}>
      
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={Notification}/>
                  <Text style={styles.fontmenu}>information</Text>
                </View>
                <View>
                <Image source={Arrow}/>
                </View>
            </TouchableOpacity>
            {/* END Button */}
           
          </View>
          <View>
              {/*Button 3*/}
              <TouchableOpacity activeOpacity={0.7} style={styles.buttonmenu} onPress={()=> navigation.navigate('Welcome')}>
      
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={Square}/>
                  <Text style={styles.fontmenu}>Log Out</Text>
                </View>
                <View>
                <Image source={Arrow}/>
                </View>
              </TouchableOpacity>
              {/* END Button */}
            </View>
       </View>
       
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#0589C1'},
  topmenu :{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical: 15,marginHorizontal:30},
  fontProfile : {color:'white', fontWeight:'500' , fontSize:24},
  subcontainer:{flex:1,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30},
  profile:{alignItems:'center',marginTop:50},
  fontname:{fontSize:22,fontWeight:'700',color:'black',marginVertical:5},
  buttonedit:{backgroundColor:'#0589C1',paddingHorizontal:50,paddingVertical:8,borderRadius:10},
  fontedit:{fontSize:16,color:'white',fontWeight:'500'},
  buttonmenu:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:40,marginBottom:15,backgroundColor:'white',
  elevation:10,shadowColor:'black',paddingHorizontal:15,paddingVertical:15,borderRadius:10,
  alignItems:'center'},
  fontmenu:{fontSize:16,color:'black',fontWeight:'500',marginLeft:10}
  
  
})
{/* const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'red'},
  topmenu :{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical: 15,marginHorizontal:30},
  fontFavorite : {color:'white', fontWeight:'500' , fontSize:24},
  subcontainer:{flex:1,backgroundColor:'white',borderTopLeftRadius:30,borderBottomRightRadius:30},
  detail: {marginTop:15,backgroundColor:'white',borderRadius:15,marginHorizontal:30, marginVertical:15,elevation:10,shadowColor:'black'},
  infodetail:{flexDirection:'row',justifyContent:'space-between', paddingHorizontal:20,paddingTop:10},
  fontname:{fontSize:16,fontWeight:'500',color:'black'},
  rate:{flexDirection:'row',marginTop:5},
  infodetail2:{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:10},
  fontlocation:{marginLeft:5,fontSize:10,color:'red'},
  fontprice:{fontSize:16,color:'red',fontWeight:'500'}
  
})*/}
