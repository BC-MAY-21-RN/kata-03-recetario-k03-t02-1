/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */

import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

const HorizontalListImages = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      flexDirection: 'row',
      display: 'flex',
      height: 220,
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

  return (
    <View style={styles.container}>
      <ScrollView>
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
export default HorizontalListImages;
