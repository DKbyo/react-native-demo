import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingScreen from './LandingScreen';
import GithubScreen from './GithubScreen';
import PhotoScreen from './PhotopageScreen';
import Icon from '../components/Icon';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const Tab = createBottomTabNavigator();

const icons = {
  Landing: 'home',
  Github: 'github',
  Photo: 'photo',
};

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => (
    <Icon name={icons[route.name]} width="22" height="22" fill={color} />
  ),
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Landing" component={LandingScreen} />
          <Tab.Screen name="Github" component={GithubScreen} />
          <Tab.Screen name="Photo" component={PhotoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
