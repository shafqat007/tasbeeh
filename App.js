import { View, StyleSheet,Text } from 'react-native'
import React from 'react'

import TasbeehApp from './screens/home'

const App = () => {
  return (
    <View style={styles.container}>
    <TasbeehApp/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App