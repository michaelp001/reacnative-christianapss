import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { HomeOn,ProfileOn,CalendarOn,EventOn,Home,Profile,Calendar,Event } from '../../../assets/'

const Icon = ({label,focus}) => {
    switch(label){
        case 'Home':
            return focus ? <Image source={HomeOn}/> : <Image source={Home}/>
        case 'My Calendar': 
            return focus ? <Image source={CalendarOn}/> : <Image source={Calendar}/>
        case 'Events':
            return focus ? <Image source={EventOn}/> : <Image source={Event}/>
        case 'My Profile':
            return focus ? <Image source={ProfileOn}/> : <Image source={Profile}/>
        default:
    }

    return <Image source={ProfileOn}/>
}

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            >
            <Icon label={label} focus={isFocused}/>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({
  container:{
    flexDirection:'row', 
    backgroundColor:'white',
    paddingTop:15,
    paddingBottom:15,
    paddingHorizontal:50,
    justifyContent:'space-between',
  }
})