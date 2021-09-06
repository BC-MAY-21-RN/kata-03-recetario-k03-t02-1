import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const SearchBar = () => {
  const [text, onChangeText] = useState('Useless Text');
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder="What do you want to eat?"
    />
  );
};

export default SearchBar;
