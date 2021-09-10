/* eslint-disable arrow-body-style */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: 12,
    flex: 1,
    backgroundColor: '#272727',
    flexDirection: 'column',
  },
  labelText: {
    color: '#fff',
    fontSize: 50,
    marginLeft: 5,
  },
});

const RecipeDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Hello</Text>
    </View>
  );
};
export default RecipeDetail;
