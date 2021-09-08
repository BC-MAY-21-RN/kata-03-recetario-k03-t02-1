/* eslint-disable arrow-body-style */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../Search/SearchBar';
import HorizontalListImages from '../ScrollViewImages/horizontalListImages';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  labelText: {
    color: '#d31a69',
    marginLeft: 5,
  },
  boxSearch: {
    alignItems: 'center',
    marginTop: 60,
  },
  boxSection: {
    marginTop: 20,
  },
});
const design = true;
const reverseDataJson = true;

const index = () => {
  return (
    <View styles={styles.container}>
      <View style={styles.boxSearch}>
        <SearchBar />
      </View>
      <View style={styles.boxSection}>
        <Text style={styles.labelText}>TRENDING</Text>
        <HorizontalListImages designStyles={design} reverseData={false} />
      </View>
      <View style={styles.boxSection}>
        <Text style={styles.labelText}>RECENT</Text>
        <HorizontalListImages designStyles={false} reverseData={reverseDataJson} />
      </View>
    </View>
  );
};

export default index;
