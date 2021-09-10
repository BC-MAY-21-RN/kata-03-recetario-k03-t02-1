/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: 0,
    flex: 1,
    backgroundColor: '#272727',
    flexDirection: 'column',
  },
  containerImage: {
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    width: '100%',
    height: '50%',
  },
  imageSection: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  colTitleSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 30,
  },
  labelText: {
    color: '#fff',
    fontSize: 40,
    marginLeft: 5,
  },
  titleSection: {
    fontSize: 30,
    color: '#fff',
  },
});

const RecipeDetail = ({ route, navigation }) => {
  const { name, nameSection, url, detail } = route.params;
  const [detailRecipe] = useState(detail);

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <ImageBackground source={{ uri: url }} style={styles.imageSection}>
          <View style={styles.colTitleSection}>
            <Text style={styles.titleSection}>{nameSection}</Text>
            <Text style={styles.labelText}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
export default RecipeDetail;
