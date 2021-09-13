/* eslint-disable arrow-body-style */
import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../Search/SearchBar';
import HorizontalListImages from '../ScrollViewImages/horizontalListImages';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  labelText: {
    fontSize: 25,
    color: '#d31a69',
    marginLeft: 5,
  },
  boxSearch: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 95,
  },
  sectionTrending: {
    marginTop: 15,
    flexDirection: 'column',
    height: 260,
  },
  sectionRecent: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    height: 390,

  },
});
const design = true;
const reverseDataJson = true;

const index = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#272727', height: '100%' }}>
      <View styles={styles.container}>
        <View style={styles.boxSearch}>
          <SearchBar />
        </View>
        <View style={styles.sectionTrending}>
          <Text style={styles.labelText}>TRENDING</Text>
          <HorizontalListImages designStyles={design} reverseData={false} navigation={navigation} nameSection="TRENDING" />
        </View>
        <View style={styles.sectionRecent}>
          <Text style={styles.labelText}>RECENT</Text>
          <HorizontalListImages
            designStyles={false}
            reverseData={reverseDataJson}
            navigation={navigation}
            nameSection="RECENT"
          />
        </View>
      </View>
    </View>
  );
};

export default index;
