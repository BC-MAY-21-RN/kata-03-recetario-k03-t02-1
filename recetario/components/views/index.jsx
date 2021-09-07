/* eslint-disable arrow-body-style */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../Search/SearchBar';
import HorizontalListImages from '../ScrollViewImages/horizontalListImages';
import ListItemImages from '../ScrollViewImages/ListItemImages';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  boxSearch: {
    alignItems: 'center',
    marginTop: 60,
  },
});

const index = () => {
  return (
    <View styles={styles.container}>
      <View style={styles.boxSearch}>
        <SearchBar />
      </View>
      <View>
        <Text>TRENDING</Text>
        <HorizontalListImages />
      </View>
      <View>
        <Text>RECENT</Text>
        <ListItemImages />
      </View>
    </View>
  );
};

export default index;
