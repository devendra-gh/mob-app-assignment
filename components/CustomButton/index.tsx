import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

interface IProps {
  title: string,
  onPress: any
}

const CustomButton = ({ title, onPress }: IProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.root, { backgroundColor: theme?.colors?.primary }]}>
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
    color: "#ffffff"
  }
});


export default CustomButton;
