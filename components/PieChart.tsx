import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {VictoryPie} from 'victory-native';
import {Person} from '../types/main';

const width = Dimensions.get('window').width * 0.8;
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

interface PieChartProps {
  list: Person[];
}

const PieChart: React.FC<PieChartProps> = ({list}) => {
  const data = list.map(item => ({
    label: item.name,
    y: item.age,
  }));

  return (
    <View style={styles.container}>
      <VictoryPie
        width={width}
        height={width}
        data={data.slice(1)}
        innerRadius={50}
        style={{labels: {fontSize: 12}}}
        colorScale={colors}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.4,
    alignSelf: 'center',
  },
});

export default PieChart;
