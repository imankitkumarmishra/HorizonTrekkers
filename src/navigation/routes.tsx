import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppNavigator from './appNavigator'
import AuthNavigator from './authNavigator'

const Routes = () => {
  const [user, setUser] = useState(false)
  return (
    user?<AppNavigator />:<AuthNavigator />
  )
}

export default Routes

const styles = StyleSheet.create({})