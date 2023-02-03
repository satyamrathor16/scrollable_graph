import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

export default GiftedChart = () => {
    const lineData = [
        {value: 0, dataPointText: '0'},
        {value: 10, dataPointText: '10'},
        {value: 8, dataPointText: '8'},
        {value: 58, dataPointText: '58'},
        {value: 56, dataPointText: '56'},
        {value: 78, dataPointText: '78'},
        {value: 74, dataPointText: '74'},
        {value: 98, dataPointText: '98'},
      ];
    
      const lineData2 = [
        {value: 0, dataPointText: '0'},
        {value: 20, dataPointText: '20'},
        {value: 18, dataPointText: '18'},
        {value: 40, dataPointText: '40'},
        {value: 36, dataPointText: '36'},
        {value: 60, dataPointText: '60'},
        {value: 54, dataPointText: '54'},
        {value: 85, dataPointText: '85'},
      ];
    return (
        <View>
            <LineChart
                data={lineData}
                data2={lineData2}
                width={Dimensions.get('screen').width - 60}
                height={250}
                curved
            />
        </View>
    );
}
