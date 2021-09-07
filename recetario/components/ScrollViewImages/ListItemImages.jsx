/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    display: 'flex',
    height: 220,
    marginTop: 20,
  },
  scrollview: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});

const logo = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiJva36jVjmHLsw8_h0WcWFNrUOa9F0JMeOMvSnHS-kNFy6tnlJlVsyqSPBPHGHrokL0&usqp=CAU',
  width: 180,
  height: 180,
};

const ListItemImages = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
      </ScrollView>
    </View>
  );
};
export default ListItemImages;
