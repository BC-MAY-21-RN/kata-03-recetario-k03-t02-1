import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderRadius: 9,
    height: 38,
    backgroundColor: '#545454',
    color: '#fff',
    fontSize: 18,
    width: 360,
    margin: 12,
    borderWidth: 1,
    padding: 7,
  },
});

const SearchBar = () => {
  const [text, onChangeText] = useState('');
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholderTextColor="#fff"
      placeholder="What do you want to eat?"
    />
  );
};

export default SearchBar;
