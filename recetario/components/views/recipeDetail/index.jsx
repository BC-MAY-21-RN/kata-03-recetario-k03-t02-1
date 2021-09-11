/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';


import {
  View, Text, StyleSheet, ImageBackground, FlatList,
} from 'react-native';

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
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  colTitleSection: {
    flex: 1,
    backgroundColor: 'rgba(66, 73, 73,0.7)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 30,
  },
  labelText: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 5,
  },
  titleSection: {
    fontSize: 20,
    marginLeft: 5,
    color: '#fff',
  },
  boxTextIgredients: {
    margin: 25,
  },
  titleIngredients: {
    fontSize: 20,
    color: '#fff',
  },
});

const RecipeDetail = ({ route }) => {
  const {
    name, nameSection, url, detail,
  } = route.params;
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
      <View style={styles.boxTextIgredients}>
        <Text style={styles.titleIngredients}>Ingredients</Text>
        <Text style={styles.titleIngredients}>for 3 servings</Text>
      </View>
      <View>
        <FlatList
          data={detailRecipe}
          renderItem={({ item }) => <Text style={styles.labelText}>{item.quantity}</Text>}
        />
      </View>
    </View>
  );
};
export default RecipeDetail;
