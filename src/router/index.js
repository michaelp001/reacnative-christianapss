import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Events, Home, MyCalendar, Message,MyProfile, 
    SplashScreen,NextPage,SignIn,SignUp,Welcome,Renungan,JadwalDoa
,RenunganHarian } from "../pages";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from "../components/molecules";


const Stack= createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () =>{
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Tab.Screen name="My Calendar" component={MyCalendar} options={{headerShown: false}}/>
            <Tab.Screen name="Events" component={Events} options={{headerShown: false}}/>
            <Tab.Screen name="My Profile" component={MyProfile} options={{headerShown: false}}/>


        </Tab.Navigator>
    )
}

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="SlpashScreeen" component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="NextPage" component={NextPage} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name="Renungan" component={Renungan} options={{headerShown: false}}/>
            <Stack.Screen name="JadwalDoa" component={JadwalDoa} options={{headerShown: false}}/>
            <Stack.Screen name="Events" component={Renungan} options={{headerShown: false}}/>
            <Stack.Screen name="Groups" component={Events} options={{headerShown: false}}/>
            <Stack.Screen name="Message" component={Message} options={{headerShown: false}}/>
            <Stack.Screen name="MyCalendar" component={MyCalendar} options={{headerShown: false}}/>
            <Stack.Screen name="RenunganHarian" component={RenunganHarian} options={{headerShown: false}}/>

            
            
        </Stack.Navigator>
    )
    
}
export default Router;