/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */

import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, ScrollView, Image, Text, StyleSheet } from 'react-native';

import dataTrending from '../../data/trending.json';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    height: 225,
  },
  containerRecent: {
    flexDirection: 'column',
    display: 'flex',
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
const HorizontalListImages = ({ designStyles, reverseData, nameSection, navigation }) => {
  const [dataJson] = useState(dataTrending);
  const resultDataJson = reverseData ? dataJson.reverse() : dataJson;
  return (
    <View style={designStyles ? styles.container : styles.containerRecent}>
      <ScrollView horizontal>
        {resultDataJson?.map((value) => {
          return (
            <View key={value.id}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('RecipeDetail', {
                  name: value.name,
                  nameSection: nameSection,
                  url: value.url,
                  detail: value.ingredients,
                });
              }}>
                <Image
                  style={designStyles ? styles.images : styles.recentImage} 
                  source={{ uri: value.url }} />
                <Text style={styles.title}>{ value.name }</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default HorizontalListImages;
