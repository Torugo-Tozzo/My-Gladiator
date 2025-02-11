import React from 'react';
import Rive from 'rive-react-native';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Primeira animação (normal) */}
        <Rive
          resourceName='bomxeratt2'
          animationName='Idle'
          style={styles.animation}
        />

        {/* Segunda animação (espelhada) */}
        <Rive
          resourceName='testing_rive_png'
          //animationName='Soco'
          style={{ ...styles.animation, transform: [{ scaleX: -1 }] }} // <-- Usando spread
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animation: {
    width: 400,
    height: 400,
  },
});
