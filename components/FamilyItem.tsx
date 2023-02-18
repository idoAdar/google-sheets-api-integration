import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Person} from '../types/main';

const FamilyItem: React.FC<Person> = ({name, age}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
});

export default FamilyItem;
