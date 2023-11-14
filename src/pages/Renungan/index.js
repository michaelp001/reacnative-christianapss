import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList } from 'react-native'
import React,{useEffect,useCallback} from 'react'
import { HOME_Wellcome,ArrowLeft,MessageSign,arrowdown,BackButton, Calendar,tglrenungan, kategori } from '../../assets'
import { Button,TextInput } from '../../components/atoms'
import { ScrollView } from 'react-native-gesture-handler'
import CategoriGridTile from '../../components/CategoriGridTile'
import { RENUNGAN } from '../../../data/dunmmy-data'
import {useDispatch,useSelector} from 'react-redux'
import * as RenunganAction from '../../../store/action/renungan'



const Renungan = ({navigation,onPress}) => {
  const dispatch = useDispatch()
  const renungan = useSelector((state)=>state.renungan.renungan)
  const loadRenungan = useCallback(async() =>{
    dispatch(RenunganAction.fetchRenungan())
  },[dispatch])

  useEffect(()=>{
    loadRenungan()
  },[loadRenungan])

  const renderGridItem = (ItemData)=>{
    return (
      <CategoriGridTile
      title={ItemData.item.title}
      onSelect={()=>{
       navigation.navigate("RenunganHarian",{
        renunganId:ItemData.item.id
       })
      }}
      image={ItemData.item.urlImage}
      />
    )

  }
  return (
  <View style={{flex:1}} onPress={onPress}>
    <View style={styles.container1}>
      {/* button back  */}
        < View style={{flexDirection: 'row',marginHorizontal:30,marginVertical:30}}>
          <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('MainApp')}>
            <Image source={BackButton} />
          </TouchableOpacity>
          <Text style={{color: 'white', 
          marginLeft:10}}>Renungan</Text>
        </View>
        {/* button back end */}
        {/* search bar */}
        <View>
          {/* Calendar */}
          <View style={styles.container2}>
            <Image source={tglrenungan}/>
            <View style={styles.textinput1}>
              <TextInput placeholder='Tanggal Renungan'/>
              
            </View>

          </View>
          {/* Calendar end */}
          {/* Category */}
          <View style={styles.container2}>
            <Image source={kategori}/>
            <View style={styles.textinput2}>
              <TextInput placeholder='Kategori'/>
              {/* <Image source={arrowdown}/> */}      
            </View>
          </View>
          {/* Category end */}
          <View style={{alignItems:'center',marginBottom:15}}>
            <TouchableOpacity activeOpacity={0.7} style={styles.buttonsearch}>
              <Text style={{fontSize:16,fontWeight:'500',color:'#0589C1'}}>Cari Renungan</Text>
            </TouchableOpacity>

          </View>
        </View>
        {/* search bar end */}
    </View>
    {/* iklan */}
    <View style={styles.container3}>
      {/* iklan row */}
      <View style={{marginLeft:30,marginTop:30}}>
        <Text style={styles.title}>Recomend For You</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* 1 */}
          <FlatList numColumns={2}
              data={!renungan ? RENUNGAN:renungan}
              renderItem={renderGridItem}
              keyExtractor={(item,index) => item.id} 
              />

        </ScrollView>
      </View>
      
    </View>
  </View>
  )
}

export default Renungan

const styles = StyleSheet.create({
  container1 : {flex:1,backgroundColor:'#0589C1'},
  container2: {flexDirection:'row',alignItems:'center',marginHorizontal:30,marginBottom:15,height:35},
  container3 : {flex:1,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30,
  marginTop:-350},
  textinput1: {flex:1,backgroundColor:'white', borderRadius:30,paddingHorizontal:15,marginLeft:15},
  textinput2: {flex:1,backgroundColor:'white', borderRadius:30,paddingHorizontal:15,marginLeft:10},
  buttonsearch: {backgroundColor:'white',paddingHorizontal:150,paddingVertical:10,borderRadius:30},

})