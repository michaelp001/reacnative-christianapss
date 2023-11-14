import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home, SplashScreen } from './pages';
import Router from './router';

//redux
import {combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import { legacy_createStore as createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import categoriReducer from '../store/reducer/renungan';
import renunganharianReducer from '../store/reducer/renunganharian';

//sqlite data 
import { init } from '../helper/db';


init().then((result)=>{
      console.log('initial database')
}).catch((err)=>{
      console.log('error database')
      console.log(err)
});


const rootReducer = combineReducers({
  renungan:categoriReducer,
  renunganharian:renunganharianReducer
});
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

const App = () =>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
 
   
  );
};



export default App;
