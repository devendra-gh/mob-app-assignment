import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.root}>
      <Text style={styles.button}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 14,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: '#0095fb',
  },
  button: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  }
});


export default CustomButton;
