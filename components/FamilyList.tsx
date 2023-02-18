import React from 'react';
import {Dimensions, FlatList, StyleSheet} from 'react-native';
import {Person} from '../types/main';
import FamilyItem from './FamilyItem';

interface FamilyListProps {
  list: Person[];
}

const FamilyList: React.FC<FamilyListProps> = ({list}) => {
  return (
    <FlatList
      data={list}
      keyExtractor={itemData => itemData.name}
      contentContainerStyle={styles.container}
      renderItem={itemData => (
        <FamilyItem name={itemData.item.name} age={itemData.item.age} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.4,
    alignItems: 'center',
  },
});

export default FamilyList;
