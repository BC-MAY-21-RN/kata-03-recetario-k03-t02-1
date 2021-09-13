/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  FlatList, TouchableOpacity, View, Text, StyleSheet, ImageBackground,
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
  colSectionimage: {
    flex: 1,
    backgroundColor: 'rgba(66, 73, 73,0.7)',
    flexDirection: 'column',
    padding: 30,
  },
  colButtonAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colTitleSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 1,
  },
  imageButtonActionClose: {
    fontSize: 32,
    flex: 1,
  },
  imageButtonAction: {
    fontSize: 32,
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
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
  icon: {
    backgroundColor: '#fff',
  },
});

const RecipeDetail = ({ route, navigation }) => {
  const {
    name, nameSection, url, detail,
  } = route.params;
  const buttonClose = () => {
    navigation.navigate('Recipe');
  };
  const [detailRecipe] = useState(detail);
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <ImageBackground source={{ uri: url }} style={styles.imageSection}>
          <View style={styles.colSectionimage}>
            <View style={styles.colButtonAction}>
              <View style={styles.imageButtonActionClose}>
                <TouchableOpacity onPress={buttonClose}>
                  <Icon name="close-outline" style={{ fontSize: 42, color: '#fff' }} />
                </TouchableOpacity>
              </View>
              <View style={styles.imageButtonAction}>
                <Icon name="share-outline" style={{ fontSize: 32, color: '#fff', marginHorizontal: 20 }} />
                <Icon name="heart-outline" style={{ fontSize: 32, color: '#fff' }} />
              </View>
            </View>
            <View style={styles.colTitleSection}>
              <Text style={styles.titleSection}>{nameSection}</Text>
              <Text style={styles.labelText}>{name}</Text>
            </View>
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
