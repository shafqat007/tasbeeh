import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export default function TasbeehApp() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleGesture = (event) => {
    if (event.nativeEvent.state === State.END) {
      const { translationY } = event.nativeEvent;
      if (translationY > 0) {
        // Swipe down
        setCount(count + 1);
      } else if (translationY < 0) {
        // Swipe up
        setCount(count + 1);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasbeeh Counter with Button Components</Text>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={styles.counterContainer}>
          <Text style={styles.count}>{count}</Text>
        </View>
      </PanGestureHandler>
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetCount}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  count: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
