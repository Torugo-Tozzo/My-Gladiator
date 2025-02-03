import React from 'react';
import Rive from 'rive-react-native';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Rive
        resourceName='testing_rive_png'
        
        style={{ width: 300, height: 300 }} // Tamanho da animação
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
