import React from 'react';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, Button} from 'react-native';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import {CommonActions} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function NewAppointment({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Selecione o pestador',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(CommonActions.goBack());
              }}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Selecione a data',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(CommonActions.goBack());
              }}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{title: 'Confimar agendamento'}}
      />
    </Stack.Navigator>
  );
}

export default function Routes({isSigned}) {
  return (
    <NavigationContainer>
      {isSigned ? (
        <Tab.Navigator
          tabBarOptions={{
            resetOnBlur: true,
            activeTintColor: '#fff',
            keyboardHidesTabBar: true,
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            style: {
              backgroundColor: '#8d41a8',
            },
          }}>
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarIcon: ({color}) => (
                <Icon color={color} size={20} name="event" />
              ),
              tabBarLabel: 'Agendamentos',
            }}
          />
          <Tab.Screen
            name="New"
            component={NewAppointment}
            options={{
              tabBarIcon: ({color}) => (
                <Icon color={color} size={20} name="add-circle-outline" />
              ),
              tabBarLabel: 'Agendar',
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({color}) => (
                <Icon color={color} size={20} name="person" />
              ),
              tabBarLabel: 'Meu Perfil',
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
