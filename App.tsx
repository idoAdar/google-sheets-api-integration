import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

// Credentials
import {
  API_KEY,
  BASE_URL,
  SHEET_ID,
  SHEET_NAME,
} from './fixtures/sheet-credentials.json';

// Types
import {Person} from './types/main';

// Components
import FamilyList from './components/FamilyList';
import PieChart from './components/PieChart';
import Header from './components/Header';
import {formatData} from './utils/formatData';

const App = () => {
  const [list, setList] = useState<Person[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const result = await axios.get(
        `${BASE_URL}/${SHEET_ID}/values/${SHEET_NAME}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`,
      );
      const formattedData = formatData(result.data.values);
      setList(formattedData);
    } catch (error) {
      // @ts-ignore:
      console.log(error.response.data);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Header />
      {!list.length && <ActivityIndicator size={'small'} />}
      <FamilyList list={list} />
      <PieChart list={list} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
});

export default App;
