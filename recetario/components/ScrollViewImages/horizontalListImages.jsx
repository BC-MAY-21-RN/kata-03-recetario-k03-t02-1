/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */

import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import dataTrending from '../../data/trending.json';

const HorizontalListImages = ({ designStyles, reverseData }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      display: 'flex',
      height: 250,
    },
    containerRecent: {
      flexDirection: 'row',
      display: 'flex',
      height: 361,
    },
    images: {
      width: 150,
      height: 150,
      margin: 15,
      borderRadius: 10,
    },
    recentImage: {
      width: 210,
      height: 250,
      margin: 15,
      borderRadius: 10,
    },
    scrollview: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    title: {
      color: '#e0e0e0',
      marginLeft: 20,
      width: 150,
      fontSize: 18,
    },
  });
  const [dataJson] = useState(dataTrending);
  const resultDataJeson = reverseData ? dataJson.reverse() : dataJson;
  return (
    <View style={designStyles ? styles.container : styles.containerRecent}>
      <ScrollView horizontal>
        {resultDataJeson?.map((value) => {
          return (
            <View key={value.id}>
              <Image 
                style={designStyles ? styles.images : styles.recentImage} 
                source={{ uri: value.url }} />
              <Text style={styles.title}>{ value.name }</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default HorizontalListImages;
