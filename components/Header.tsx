import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.black, styles.bold]}>IDEO Project</Text>
      <Text style={styles.black}>Fetching data from Google Sheets API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  black: {
    color: 'black',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Header;
