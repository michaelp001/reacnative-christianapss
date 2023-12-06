import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { Arrow, Circle, Event1, Menus, NoEvent, Event2, Event3, Event4, } from '../../assets'
import {Agenda} from 'react-native-calendars'
import {Card, Avatar} from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};


const MyCalendar = ({navigation,onPress}) => {

  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
   // container
   <View style={styles.container} onPress={onPress}>
   {/* Top MENU */}
   <View style={styles.topmenu}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('MainApp')}>
        <Image source={Menus} />
      </TouchableOpacity>
      <Text style={styles.fontEvent}>My Calendar</Text>
      <Image source={Circle}/>
   </View>
   {/*END TOP MENU */}

   {/*Sub Container */}
   <View style={styles.subcontainer}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-12-05'}
        renderItem={renderItem}
      />

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