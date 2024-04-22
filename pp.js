import React from 'react';
import { StyleSheet, View } from 'react-native';

// Importing the TasbeehApp component from home.js
import TasbeehApp from './screens/home'; // Adjust the path if necessary

const App = () => {
  return (
    <View style={styles.container}>
      {/* Rendering the TasbeehApp component */}
      <TasbeehApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Exporting the App component as the default export
export default App;
