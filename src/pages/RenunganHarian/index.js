import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { HOME_Wellcome,ArrowLeft,MessageSign,PasswordSign,BackButton } from '../../assets'
import { Button,TextInput } from '../../components/atoms'
import { RENUNGAN, RENUNGANHARIAN } from '../../../data/dunmmy-data'
import DefaultText from '../../components/DefaultText'
import {useSelector,useDispatch} from 'react-redux'
const ListItem = (props) =>{
  return(
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const RenunganHarian = ({navigation,onPress,route}) => {
  const renungan_id = route.params?.renunganId ?? null

  const renungan =useSelector(state => state.renungan.renungan.find(ren=>ren.id === renungan_id))
  // RENUNGAN.find((ren)=>ren.id === renungan_id)
  const renunganHarian=RENUNGANHARIAN.filter((rec)=>rec.renunganId === renungan.id)
  // RENUNGANHARIAN.filter((rec)=>rec.renunganId === renungan.id)
  const merge = [...renunganHarian,renungan]
  const [urlImage,setUrlImage] = useState("")
  
  useEffect(()=>{
    if(merge[1]){
      setUrlImage(merge[1].urlImage)
    }
  })

  if (!merge[0].complexity) {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Image source={{uri:'https://www.mageworx.com/blog/wp-content/uploads/2012/06/Page-Not-Found-13.jpg'}} style={{width:100,height:100}}/>
      </View>
    );
  }

  return (
    <View style={{flex:1}} onPress={onPress}>
    
    <ScrollView>
    <View style={styles.container1}>
      {/* button back  */}
        < View style={{flexDirection: 'row',marginHorizontal:30,marginVertical:30}}>
          <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Renungan')}>
            <Image source={BackButton} />
          </TouchableOpacity>
        </View>
    </View>
    <View>
    {!urlImage ? (
        <Text>Duration</Text>
      ) : (
        <Image source={{ uri: urlImage }} style={styles.image} />
      )}

      <View>
        <View style={styles.details}>
          <DefaultText>{merge[0].duration}m</DefaultText>
          <DefaultText>{merge[0].complexity.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Renungan</Text>
        {merge[0].reading.map((reading) => (
          <ListItem key={reading}>{reading}</ListItem>
        ))}
        <Text style={styles.title}>Kesimpulan</Text>
        {merge[0].conclusion.map((conclusion) => (
          <ListItem key={conclusion}>{conclusion}</ListItem>
        ))}
      </View>
    </View>

    </ScrollView>
  </View>
    
  );
  }
export default RenunganHarian

const styles = StyleSheet.create({
    container1 : {flex:1,backgroundColor:'#0589C1'},
    listItem: {marginVertical:10,marginHorizontal:20,padding:10},
    image:{width:"100%",height:200},
    details:{flexDirection:'row',padding:15,justifyContent:"space-around"},
    title:{fontSize:22,textAlign:"center"}
  })