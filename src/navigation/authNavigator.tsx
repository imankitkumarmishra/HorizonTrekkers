import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SignIn from '../../src/screens/auth/signIn/index';

const AuthNavigator = () => {
    const AuthStack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <AuthStack.Navigator 
      screenOptions={{headerShown:false}}
      >
        <AuthStack.Screen name='SignIn' component={SignIn} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator