import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: 'rgba(0,0,0,0.7)', borderTopColor: 'transparent' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
        tabBarIcon: ({ color, size }) => {
          let name = 'home';
          if (route.name === 'Accueil') name = 'home';
          else if (route.name === 'Page 2') name = 'images-outline';
          else if (route.name === 'Page 3') name = 'settings-outline';
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Page 2" component={Page2} />
      <Tab.Screen name="Page 3" component={Page3} />
    </Tab.Navigator>
  );
}
