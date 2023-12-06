import { StyleSheet, Text, View,Image,TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Arrow, Circle, Document, John_due, Menus, Notification, Setting,Square } from '../../assets'


const MyProfileDetails = ({navigation,onPress}) => {
  return (
    <View style={{flex: 1}} onPress={onPress}>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:20,marginHorizontal:30}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Welcome')}>
        <Image source={ArrowLeft}/>
      </TouchableOpacity>
      <Text style={{color:'#0589C1',marginLeft:10}}>Sign In</Text>
    </View>
      <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1507281736509-c6289f1ea0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
        style={{flex: 0.5}}
        resizeMode={'cover'}>
        <View style={{flex: 0.5}}></View>
      </ImageBackground>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: '#FFFFFF',
              position: 'absolute',
              zIndex: 2,
            }}
          />
        </View>
        <View style={{marginTop: 60}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              color: '#212121',
            }}>
            John Due
          </Text>
          <Text style={{textAlign: 'center'}}>
            Bonds of people is the true power
          </Text>
          <View style={{marginLeft: 80}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="mobile-alt" size={25} color="#212121" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>+6281-8888-8888</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="map-marker-alt" size={25} color="#212121" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>Indonesia</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="envelope" size={25} color="#212121" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>
                  John_due@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="facebook" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="instagram" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="github" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="twitter" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="linkedin" size={25} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyProfileDetails

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
