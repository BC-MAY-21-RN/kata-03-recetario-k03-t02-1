import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 9,
    backgroundColor: '#323233',
    borderColor: '#323233',
    color: '#fff',
    height: 38,
    fontSize: 18,
    width: 360,
  },
  searchIcon: {
    position: 'absolute',
    fontSize: 25,
    marginLeft: 10,
    marginTop: 5,
    color: '#fff',
  },
  microIcon: {
    position: 'absolute',
    left: 312,
    top: -2,
    fontSize: 30,
    marginLeft: 10,
    marginTop: 5,
    color: '#fff',
  },
});

const SearchBar = () => {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor="#fff"
        placeholder="         What do you want to eat?"
      />
      <Icon name="search-outline" style={styles.searchIcon} />
      <Icon name="mic" style={styles.microIcon} />
    </View>
  );
};

export default SearchBar;
