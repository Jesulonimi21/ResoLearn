import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthDecisionScreen from './screens/CourseDetailsScreen';
import AppNavigator from './routes';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import defaultReducer from './store/reducer';
const store= createStore(defaultReducer);
export default function App() {
  return (

   <Provider store={store}> 
        <View style={styles.container}>
          <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
     