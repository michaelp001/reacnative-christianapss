import { StyleSheet, Text, View,Image,TouchableOpacity,BackHandler } from 'react-native'
import React,{useEffect} from 'react'
import { ChurchIcon, Circle, Scan, Wallet, Youngman,Lines,Iklan1,
MyCalendar,MyMessage,Renungan,JadwalDoa,Groups,Events } from '../../assets'
import { ScrollView } from 'react-native-gesture-handler'

const Home = ({navigation,onPress}) => {

  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',()=> true)
    return ()=>{
      BackHandler.addEventListener('hardwareBackPress',()=> true)
    }
  })
  return (
    <View style={{backgroundColor: '#0589C1', flex: 1}}  onPress={onPress}>
      <View>
         {/* Top Menu*/}
        <View style={{flexDirection:'row', justifyContent: 'space-between',paddingHorizontal:30,
          marginTop:30}}>
          <Image source={ChurchIcon}/>
          <Image source={Circle}/>
        </View>
         {/* Header*/} 
        <View  style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:30,
        paddingTop:30}}>
          <View>
            <Text style={{color:'white', fontSize:24}}>Ikuti setiap event</Text>
            <Text style={{color:'white', fontSize:24}}>untuk memperoleh </Text>
            <Text style={{color:'white', fontSize:24}}>poin lebih banyak</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={Youngman}/>
          </View>
        </View>
      </View>
        {/* SUB CONTAINER*/}
      <View style={{backgroundColor:'white',flex:1,borderTopRightRadius:30,borderTopLeftRadius:30}}>
          {/* Menu*/}
        <View style={{backgroundColor: 'white',flexDirection:'row',justifyContent:'center',
          alignItems:'center',marginHorizontal:30,borderRadius:10,marginTop:-30,elevation:20,shadowColor:'black'}}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={Wallet}/>
            <Text style={{fontSize:20, color:'#3C3C3C',marginLeft:10}}>Poin 100</Text>
          </TouchableOpacity>
          <View style={{marginHorizontal:30}}>
          <Image source={Lines}/>
          </View>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={Scan}/>
            <Text style={{fontSize:20, color:'#3C3C3C'}}>Scan</Text>
          </TouchableOpacity>
      </View>
      {/* Main Menu 1*/}
        <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:50
          ,marginTop:60}}>

           {/* Menu 1*/}
          <TouchableOpacity  style={{alignItems:'center'}} onPress={()=> navigation.navigate('Renungan')}>
            <View style={{backgroundColor:'#E27878',paddingVertical:15,paddingHorizontal:15,
          borderRadius:10,marginBottom:10}}>
              <Image source={Renungan}/>
            </View>
            <Text>Renungan</Text>
          </TouchableOpacity>

           {/* Menu 2*/}
           <TouchableOpacity style={{alignItems:'center'}}  onPress={()=> navigation.navigate('JadwalDoa')}>
            <View style={{backgroundColor:'#58B356',paddingVertical:15,paddingHorizontal:15,
          borderRadius:10,marginBottom:10}}>
              <Image source={JadwalDoa}/>
            </View>
            <Text>Jadwal doa</Text>
          </TouchableOpacity>

           {/* Menu 3*/}
           <TouchableOpacity style={{alignItems:'center'}}  onPress={()=> navigation.navigate('Events')}>
            <View style={{backgroundColor:'#166897',paddingVertical:15,paddingHorizontal:15,
          borderRadius:10,marginBottom:10}}>
              <Image source={Events}/>
            </View>
            <Text>Events</Text>
          </TouchableOpacity>
        </View>

        {/* Main Menu 2*/}
        <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:50
          ,marginTop:40}}>

           {/* Menu 1*/}
          <TouchableOpacity style={{alignItems:'center'}}  onPress={()=> navigation.navigate('Groups')}>
            <View style={{backgroundColor:'#4E117EB2',paddingVertical:15,paddingHorizontal:15,
          borderRadius:10,marginBottom:10}}>
              <Image source={Groups}/>
            </View>
            <Text>Groups</Text>
          </TouchableOpacity>

           {/* Menu 2*/}
           <TouchableOpacity style={{alignItems:'center'}}  onPress={()=> navigation.navigate('Message')}>
            <View style={{backgroundColor:'#DD950A',paddingVertical:15,paddingHorizontal:15,
          borderRadius:10,marginBottom:10}}>
              <Image source={MyMessage}/>
            </View>
            <Text>Message</Text>
          </TouchableOpacity>

           {/* Menu 3*/}
           <TouchableOpacity style={{alignItems:'center'}}  onPress={()=> navigation.navigate('MyCalendar')}>
            <View style={{backgroundColor:'#E62A10B2',paddingVertical:15,paddingHorizontal:15,
          borderRadius:10,marginBottom:10}}>
              <Image source={MyCalendar}/>
            </View>
            <Text>My Calendar</Text>
          </TouchableOpacity>
        </View>
      
      {/* Iklan 3*/}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:30, marginTop:50}}>
        <View style={{marginRight:10}}>
          <Image source={Iklan1}/>
        </View>
        <View >
          <Image source={Iklan1}/>
        </View>
      </ScrollView>
      {/* End 3*/}

      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})