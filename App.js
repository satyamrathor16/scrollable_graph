/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TextInput
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import moment from 'moment'
const App = () => {

  // const data = {
  //   labels: ["2000", "2001", "2002", "2003", "2004", "2005","2006","2007","2008","2009","2010","2011",],
  //   datasets: [
  //     {
  //       data: [
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //         Math.random() * 100,
  //       ]
  //     }
  //   ]
  // }



  // var dataTemp = [
  //   { x: '01-10-21', planned_value: 2.17, actual_value: 2.7 },
  //   { x: '02-10-21', planned_value: 2.5, actual_value: 2.7 },
  //   { x: '03-10-21', planned_value: 2.83, actual_value: 3.1 },
  //   { x: '04-10-21', planned_value: 3.17, actual_value: 3.1 },
  //   { x: '05-10-21', planned_value: 3.5, actual_value: 3.7 },
  //   { x: '06-10-21', planned_value: 3.83, actual_value: 3.7 },
  //   { x: '07-10-21', planned_value: 3.97, actual_value: 3.7 },
  //   { x: '08-10-21', planned_value: 4.1, actual_value: 3.7 },
  //   { x: '09-10-21', planned_value: 4.23, actual_value: 3.7 },
  //   { x: '10-10-21', planned_value: 4.37, actual_value: 3.9 },
  //   { x: '11-10-21', planned_value: 4.5, actual_value: 4.1 },
  //   { x: '12-10-21', planned_value: 5, actual_value: 5.11 },
  //   { x: '13-10-21', planned_value: 5.29, actual_value: 5.21 },
  //   { x: '14-10-21', planned_value: 5.58, actual_value: 5.45 },
  //   { x: '15-10-21', planned_value: 5.87, actual_value: 5.66 },
  //   { x: '16-10-21', planned_value: 6.16, actual_value: 5.92 },
  //   { x: '17-10-21', planned_value: 6.44, actual_value: 6.13 },
  //   { x: '18-10-21', planned_value: 6.73, actual_value: 6.39 },
  //   { x: '19-10-21', planned_value: 7.02, actual_value: 6.6 },
  //   { x: '20-10-21', planned_value: 7.31, actual_value: 6.87 },
  //   { x: '21-10-21', planned_value: 7.6, actual_value: 7.08 },
  //   { x: '22-10-21', planned_value: 7.89, actual_value: 7.35 },
  //   { x: '23-10-21', planned_value: 7.91, actual_value: 7.56 },
  //   { x: '24-10-21', planned_value: 7.94, actual_value: 7.69 },
  //   { x: '25-10-21', planned_value: 7.96, actual_value: 7.8 },
  //   { x: '26-10-21', planned_value: 7.99, actual_value: 7.92 },
  //   { x: '27-10-21', planned_value: 8.01, actual_value: 7.94 },
  //   { x: '28-10-21', planned_value: 8.03, actual_value: 7.97 },
  //   { x: '29-10-21', planned_value: 8.06, actual_value: 8 },
  //   { x: '30-10-21', planned_value: 8.08, actual_value: 8.04 },
  //   { x: '31-10-21', planned_value: 8.11, actual_value: 8.07 },
  // ]

  // var dataTemp = [
  //   { x: '07-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '08-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '09-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '10-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '11-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '12-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '13-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '14-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '15-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '16-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '17-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '18-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '19-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '20-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '21-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '22-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '23-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '24-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '25-9-21', planned_value: 0, actual_value: 0.2 },
  //   { x: '26-9-21', planned_value: 0.5, actual_value: 0.7 },
  //   { x: '27-9-21', planned_value: 0.83, actual_value: 1.5 },
  //   { x: '28-9-21', planned_value: 1.17, actual_value: 1.5 },
  //   { x: '29-9-21', planned_value: 1.5, actual_value: 1.9 },
  //   { x: '30-9-21', planned_value: 1.83, actual_value: 1.9 },
  //   { x: '01-10-21', planned_value: 2.17, actual_value: 2.7 },
  //   { x: '02-10-21', planned_value: 2.5, actual_value: 2.7 },
  //   { x: '03-10-21', planned_value: 2.83, actual_value: 3.1 },
  //   { x: '04-10-21', planned_value: 3.17, actual_value: 3.1 },
  //   { x: '05-10-21', planned_value: 3.5, actual_value: 3.7 },
  //   { x: '06-10-21', planned_value: 3.83, actual_value: 3.7 },
  //   { x: '07-10-21', planned_value: 3.97, actual_value: 3.7 },
  //   { x: '08-10-21', planned_value: 4.1, actual_value: 3.7 },
  //   { x: '09-10-21', planned_value: 4.23, actual_value: 3.7 },
  //   { x: '10-10-21', planned_value: 4.37, actual_value: 3.9 },
  //   { x: '11-10-21', planned_value: 4.5, actual_value: 4.1 },
  //   { x: '12-10-21', planned_value: 5, actual_value: 5.11 },
  //   { x: '13-10-21', planned_value: 5.29, actual_value: 5.21 },
  //   { x: '14-10-21', planned_value: 5.58, actual_value: 5.45 },
  //   { x: '15-10-21', planned_value: 5.87, actual_value: 5.66 },
  //   { x: '16-10-21', planned_value: 6.16, actual_value: 5.92 },
  //   { x: '17-10-21', planned_value: 6.44, actual_value: 6.13 },
  //   { x: '18-10-21', planned_value: 6.73, actual_value: 6.39 },
  //   { x: '19-10-21', planned_value: 7.02, actual_value: 6.6 },
  //   { x: '20-10-21', planned_value: 7.31, actual_value: 6.87 },
  //   { x: '21-10-21', planned_value: 7.6, actual_value: 7.08 },
  //   { x: '22-10-21', planned_value: 7.89, actual_value: 7.35 },
  //   { x: '23-10-21', planned_value: 7.91, actual_value: 7.56 },
  //   { x: '24-10-21', planned_value: 7.94, actual_value: 7.69 },
  //   { x: '25-10-21', planned_value: 7.96, actual_value: 7.8 },
  //   { x: '26-10-21', planned_value: 7.99, actual_value: 7.92 },
  //   { x: '27-10-21', planned_value: 8.01, actual_value: 7.94 },
  //   { x: '28-10-21', planned_value: 8.03, actual_value: 7.97 },
  //   { x: '29-10-21', planned_value: 8.06, actual_value: 8 },
  //   { x: '30-10-21', planned_value: 8.08, actual_value: 8.04 },
  //   { x: '31-10-21', planned_value: 8.11, actual_value: 8.07 },
  //   { x: '01-11-21', planned_value: 8.13, actual_value: 8.1 },
  //   { x: '02-11-21', planned_value: 8.16, actual_value: 8.13 },
  //   { x: '03-11-21', planned_value: 8.18, actual_value: 8.16 },
  //   { x: '04-11-21', planned_value: 8.21, actual_value: 8.19 },
  //   { x: '05-11-21', planned_value: 8.23, actual_value: 8.23 },
  //   { x: '06-11-21', planned_value: 8.26, actual_value: 8.26 },
  //   { x: '07-11-21', planned_value: 8.33, actual_value: 8.3 },
  //   { x: '08-11-21', planned_value: 8.4, actual_value: 8.35 },
  //   { x: '09-11-21', planned_value: 8.48, actual_value: 8.41 },
  //   { x: '10-11-21', planned_value: 8.55, actual_value: 8.47 },
  //   { x: '11-11-21', planned_value: 8.62, actual_value: 8.53 },
  //   { x: '12-11-21', planned_value: 8.7, actual_value: 8.59 },
  //   { x: '13-11-21', planned_value: 8.77, actual_value: 8.63 },
  //   { x: '14-11-21', planned_value: 8.84, actual_value: 8.63 },
  //   { x: '15-11-21', planned_value: 8.99, actual_value: 8.64 },
  //   { x: '16-11-21', planned_value: 9.14, actual_value: 8.66 },
  //   { x: '17-11-21', planned_value: 9.28, actual_value: 8.68 },
  //   { x: '18-11-21', planned_value: 9.43, actual_value: 8.69 },
  //   { x: '19-11-21', planned_value: 9.58, actual_value: 8.71 },
  //   { x: '20-11-21', planned_value: 9.73, actual_value: 8.73 },
  //   { x: '21-11-21', planned_value: 9.87, actual_value: 8.79 },
  //   { x: '22-11-21', planned_value: 10.02, actual_value: 8.86 },
  //   { x: '23-11-21', planned_value: 10.17, actual_value: 8.92 },
  //   { x: '24-11-21', planned_value: 10.31, actual_value: 9.03 },
  //   { x: '25-11-21', planned_value: 10.46, actual_value: 9.15 },
  //   { x: '26-11-21', planned_value: 10.61, actual_value: 9.26 },
  //   { x: '27-11-21', planned_value: 10.68, actual_value: 9.37 },
  //   { x: '28-11-21', planned_value: 10.75, actual_value: 9.49 },
  //   { x: '29-11-21', planned_value: 10.83, actual_value: 9.55 },
  //   { x: '30-11-21', planned_value: 11.15, actual_value: 9.64 },
  //   { x: '01-12-21', planned_value: 11.48, actual_value: 9.72 },
  //   { x: '02-12-21', planned_value: 11.8, actual_value: 9.82 },
  //   { x: '03-12-21', planned_value: 12.13, actual_value: 9.91 },
  //   { x: '04-12-21', planned_value: 12.46, actual_value: 10.1 },
  //   { x: '05-12-21', planned_value: 12.56, actual_value: 10.27 },
  //   { x: '06-12-21', planned_value: 12.67, actual_value: 10.5 },
  //   { x: '07-12-21', planned_value: 12.77, actual_value: 10.74 },
  //   { x: '08-12-21', planned_value: 12.97, actual_value: 10.87 },
  //   { x: '09-12-21', planned_value: 13.17, actual_value: 11.02 },
  //   { x: '10-12-21', planned_value: 13.37, actual_value: 11.08 },
  //   { x: '11-12-21', planned_value: 13.57, actual_value: 11.14 },
  //   { x: '12-12-21', planned_value: 13.84, actual_value: 11.2 },
  //   { x: '13-12-21', planned_value: 14.11, actual_value: 11.27 },
  //   { x: '14-12-21', planned_value: 14.38, actual_value: 11.37 },
  //   { x: '15-12-21', planned_value: 14.61, actual_value: 11.56 },
  //   { x: '16-12-21', planned_value: 14.85, actual_value: 11.76 },
  //   { x: '17-12-21', planned_value: 15.08, actual_value: 11.96 },
  //   { x: '18-12-21', planned_value: 15.37, actual_value: 12.16 },
  //   { x: '19-12-21', planned_value: 15.63, actual_value: 12.36 },
  //   { x: '20-12-21', planned_value: 15.89, actual_value: 12.48 },
  //   { x: '21-12-21', planned_value: 16.15, actual_value: 12.75 },
  //   { x: '22-12-21', planned_value: 16.4, actual_value: 12.8 },
  //   { x: '23-12-21', planned_value: 16.64, actual_value: 13.19 },
  //   { x: '24-12-21', planned_value: 16.89, actual_value: 13.58 },
  //   { x: '25-12-21', planned_value: 17.26, actual_value: 13.68 },
  //   { x: '26-12-21', planned_value: 17.58, actual_value: 14.03 },
  //   { x: '27-12-21', planned_value: 17.9, actual_value: 14.41 },
  //   { x: '28-12-21', planned_value: 18.05, actual_value: 14.8 },
  //   { x: '29-12-21', planned_value: 18.29, actual_value: 15.03 },
  //   { x: '30-12-21', planned_value: 18.46, actual_value: 15.51 },
  //   { x: '31-12-21', planned_value: 18.77, actual_value: 15.72 },
  //   { x: '01-01-22', planned_value: 18.94, actual_value: 15.97 },
  //   { x: '02-01-22', planned_value: 19.12, actual_value: 16.22 },
  //   { x: '03-01-22', planned_value: 19.29, actual_value: 16.48 },
  //   { x: '04-01-22', planned_value: 19.47, actual_value: 16.73 },
  //   { x: '05-01-22', planned_value: 19.92, actual_value: 17.1 },
  //   { x: '06-01-22', planned_value: 20.37, actual_value: 17.23 },
  //   { x: '07-01-22', planned_value: 20.93, actual_value: 17.6 },
  //   { x: '08-01-22', planned_value: 21.62, actual_value: 17.73 },
  //   { x: '09-01-22', planned_value: 22.4, actual_value: 17.77 },
  //   { x: '10-01-22', planned_value: 23.19, actual_value: 17.82 },
  //   { x: '11-01-22', planned_value: 23.98, actual_value: 17.87 },
  //   { x: '12-01-22', planned_value: 24.67, actual_value: 17.92 },
  //   { x: '13-01-22', planned_value: 25.48, actual_value: 17.98 },
  //   { x: '14-01-22', planned_value: 26.36, actual_value: 18.04 },
  //   { x: '15-01-22', planned_value: 27.26, actual_value: 18.04 },
  //   { x: '16-01-22', planned_value: 28.15, actual_value: 18.11 },
  //   { x: '17-01-22', planned_value: 29.05, actual_value: 18.17 },
  //   { x: '18-01-22', planned_value: 29.94, actual_value: 18.25 },
  //   { x: '19-01-22', planned_value: 30.87, actual_value: 18.32 },
  //   { x: '20-01-22', planned_value: 31.76, actual_value: 18.46 },
  //   { x: '21-01-22', planned_value: 32.66, actual_value: 18.6 },
  //   { x: '22-01-22', planned_value: 33.55, actual_value: 18.6 },
  //   { x: '23-01-22', planned_value: 34.22, actual_value: 19.05 },
  //   { x: '24-01-22', planned_value: 34.89, actual_value: 19.66 },
  //   { x: '25-01-22', planned_value: 35.62, actual_value: 20.3 },
  //   { x: '26-01-22', planned_value: 36.37, actual_value: 21.06 },
  //   { x: '27-01-22', planned_value: 37.02, actual_value: 22.01 },
  //   { x: '28-01-22', planned_value: 37.67, actual_value: 22.71 },
  //   { x: '29-01-22', planned_value: 38.17, actual_value: 23.18 },
  //   { x: '30-01-22', planned_value: 38.95, actual_value: 23.52 },
  //   { x: '31-01-22', planned_value: 39.72, actual_value: 23.86 },
  //   { x: '01-02-22', planned_value: 40.73, actual_value: 24.2 },
  //   { x: '02-02-22', planned_value: 41.74, actual_value: 24.77 },
  //   { x: '03-02-22', planned_value: 42.76, actual_value: 25.23 },
  //   { x: '04-02-22', planned_value: 43.59, actual_value: 26.32 },
  //   { x: '05-02-22', planned_value: 44.41, actual_value: 27.17 },
  //   { x: '06-02-22', planned_value: 45.12, actual_value: 28.39 },
  //   { x: '07-02-22', planned_value: 45.82, actual_value: 29.67 },
  //   { x: '08-02-22', planned_value: 46.49, actual_value: 31.13 },
  //   { x: '09-02-22', planned_value: 47.11, actual_value: 32.46 },
  //   { x: '10-02-22', planned_value: 47.74, actual_value: 33.9 },
  //   { x: '11-02-22', planned_value: 48.36, actual_value: 35.5 },
  //   { x: '12-02-22', planned_value: 48.98, actual_value: 37.06 },
  //   { x: '13-02-22', planned_value: 49.49, actual_value: 38.52 },
  //   { x: '14-02-22', planned_value: 50.57, actual_value: 40.11 },
  //   { x: '15-02-22', planned_value: 51.64, actual_value: 41.7 },
  //   { x: '16-02-22', planned_value: 52.92, actual_value: 43.36 },
  //   { x: '17-02-22', planned_value: 53.91, actual_value: 45.03 },
  //   { x: '18-02-22', planned_value: 54.98, actual_value: 46.59 },
  //   { x: '19-02-22', planned_value: 55.86, actual_value: 48.27 },
  //   { x: '20-02-22', planned_value: 56.74, actual_value: 50.12 },
  //   { x: '21-02-22', planned_value: 57.54, actual_value: 51.86 },
  //   { x: '22-02-22', planned_value: 58.3, actual_value: 53.43 },
  //   { x: '23-02-22', planned_value: 58.9, actual_value: 54.85 },
  //   { x: '24-02-22', planned_value: 59.47, actual_value: 55.68 },
  //   { x: '25-02-22', planned_value: 59.92, actual_value: 56.58 },
  //   { x: '26-02-22', planned_value: 60.37, actual_value: 57.68 },
  //   { x: '27-02-22', planned_value: 60.82, actual_value: 58.75 },
  //   { x: '28-02-22', planned_value: 61.27, actual_value: 60.6 },
  //   { x: '01-03-22', planned_value: 61.66, actual_value: 62.18 },
  //   { x: '02-03-22', planned_value: 62.05, actual_value: 63.28 },
  //   { x: '03-03-22', planned_value: 62.57, actual_value: 64.08 },
  //   { x: '04-03-22', planned_value: 63.09, actual_value: 64.93 },
  //   { x: '05-03-22', planned_value: 63.63, actual_value: 65.3 },
  //   { x: '06-03-22', planned_value: 64.24, actual_value: 65.67 },
  //   { x: '07-03-22', planned_value: 65.08, actual_value: 66.04 },
  //   { x: '08-03-22', planned_value: 65.93, actual_value: 66.41 },
  //   { x: '09-03-22', planned_value: 66.77, actual_value: 66.78 },
  //   { x: '10-03-22', planned_value: 67.58, actual_value: 67.2 },
  //   { x: '11-03-22', planned_value: 68.39, actual_value: 67.6 },
  //   { x: '12-03-22', planned_value: 69.13, actual_value: 68.26 },
  //   { x: '13-03-22', planned_value: 69.84, actual_value: 68.96 },
  //   { x: '14-03-22', planned_value: 70.54, actual_value: 69.66 },
  //   { x: '15-03-22', planned_value: 71.22, actual_value: 70.29 },
  //   { x: '16-03-22', planned_value: 71.9, actual_value: 70.92 },
  //   { x: '17-03-22', planned_value: 72.58, actual_value: 71.55 },
  //   { x: '18-03-22', planned_value: 73.19, actual_value: 72.13 },
  //   { x: '19-03-22', planned_value: 73.75, actual_value: 72.7 },
  //   { x: '20-03-22', planned_value: 74.57, actual_value: 73.59 },
  //   { x: '21-03-22', planned_value: 75.4, actual_value: 74.42 },
  //   { x: '22-03-22', planned_value: 76.26, actual_value: 75.29 },
  //   { x: '23-03-22', planned_value: 76.96, actual_value: 76.02 },
  //   { x: '24-03-22', planned_value: 77.66, actual_value: 76.75 },
  //   { x: '25-03-22', planned_value: 78.35, actual_value: 77.48 },
  //   { x: '26-03-22', planned_value: 79.05, actual_value: 78.21 },
  //   { x: '27-03-22', planned_value: 79.68, actual_value: 78.86 },
  //   { x: '28-03-22', planned_value: 80.31, actual_value: 80.61 },
  //   { x: '29-03-22', planned_value: 80.72, actual_value: 81.13 },
  //   { x: '30-03-22', planned_value: 81.1, actual_value: 81.62 },
  //   { x: '31-03-22', planned_value: 81.52, actual_value: 82.15 },
  //   { x: '01-04-22', planned_value: 82.09, actual_value: 82.71 },
  //   { x: '02-04-22', planned_value: 82.65, actual_value: 83.27 },
  //   { x: '03-04-22', planned_value: 83.23, actual_value: 83.84 },
  //   { x: '04-04-22', planned_value: 83.91, actual_value: 84.51 },
  //   { x: '05-04-22', planned_value: 84.6, actual_value: 85.18 },
  //   { x: '06-04-22', planned_value: 85.16, actual_value: 85.72 },
  //   { x: '07-04-22', planned_value: 85.71, actual_value: 86.26 },
  //   { x: '08-04-22', planned_value: 86.27, actual_value: 86.8 },
  //   { x: '09-04-22', planned_value: 86.81, actual_value: 87.33 },
  //   { x: '10-04-22', planned_value: 87.36, actual_value: 87.89 },
  //   { x: '11-04-22', planned_value: 87.84, actual_value: 88.34 },
  //   { x: '12-04-22', planned_value: 88.32, actual_value: 88.79 },
  //   { x: '13-04-22', planned_value: 88.8, actual_value: 89.23 },
  //   { x: '14-04-22', planned_value: 89.21, actual_value: 89.62 },
  //   { x: '15-04-22', planned_value: 89.63, actual_value: 89.93 },
  //   { x: '16-04-22', planned_value: 90.03, actual_value: 90.24 },
  //   { x: '17-04-22', planned_value: 90.43, actual_value: 90.58 },
  //   { x: '18-04-22', planned_value: 90.76, actual_value: 90.84 },
  //   { x: '19-04-22', planned_value: 91.04, actual_value: 91.08 },
  //   { x: '20-04-22', planned_value: 91.21, actual_value: 91.27 },
  //   { x: '21-04-22', planned_value: 91.5, actual_value: 91.43 },
  //   { x: '22-04-22', planned_value: 91.78, actual_value: 91.43 },
  //   { x: '23-04-22', planned_value: 92.07, actual_value: 91.43 },
  //   { x: '24-04-22', planned_value: 92.37, actual_value: 91.43 },
  //   { x: '25-04-22', planned_value: 92.65, actual_value: 91.43 },
  //   { x: '26-04-22', planned_value: 92.91, actual_value: 91.43 },
  //   { x: '27-04-22', planned_value: 93.25, actual_value: 91.43 },
  //   { x: '28-04-22', planned_value: 93.58, actual_value: 91.43 },
  //   { x: '29-04-22', planned_value: 93.86, actual_value: 91.43 },
  //   { x: '30-04-22', planned_value: 94.22, actual_value: 91.43 },
  //   { x: '01-05-22', planned_value: 94.64, actual_value: 91.43 },
  //   { x: '02-05-22', planned_value: 95.02, actual_value: 91.43 },
  //   { x: '03-05-22', planned_value: 95.38, actual_value: 91.43 },
  //   { x: '04-05-22', planned_value: 95.7, actual_value: 91.43 },
  //   { x: '05-05-22', planned_value: 96.01, actual_value: 91.43 },
  //   { x: '06-05-22', planned_value: 96.31, actual_value: 91.43 },
  //   { x: '07-05-22', planned_value: 96.62, actual_value: 91.43 },
  //   { x: '08-05-22', planned_value: 96.93, actual_value: 91.43 },
  //   { x: '09-05-22', planned_value: 97.15, actual_value: 91.43 },
  //   { x: '10-05-22', planned_value: 97.37, actual_value: 91.43 },
  //   { x: '11-05-22', planned_value: 97.6, actual_value: 91.43 },
  //   { x: '12-05-22', planned_value: 97.75, actual_value: 91.43 },
  //   { x: '13-05-22', planned_value: 97.9, actual_value: 91.43 },
  //   { x: '14-05-22', planned_value: 98.06, actual_value: 91.43 },
  //   { x: '15-05-22', planned_value: 98.14, actual_value: 91.43 },
  //   { x: '16-05-22', planned_value: 98.3, actual_value: 91.43 },
  //   { x: '17-05-22', planned_value: 98.46, actual_value: 91.43 },
  //   { x: '18-05-22', planned_value: 98.58, actual_value: 91.43 },
  //   { x: '19-05-22', planned_value: 98.69, actual_value: 91.43 },
  //   { x: '20-05-22', planned_value: 98.8, actual_value: 91.43 },
  //   { x: '21-05-22', planned_value: 98.9, actual_value: 91.43 },
  //   { x: '22-05-22', planned_value: 99.01, actual_value: 92.89 },
  //   { x: '23-05-22', planned_value: 99.12, actual_value: 92.89 },
  //   { x: '24-05-22', planned_value: 99.23, actual_value: 92.89 },
  //   { x: '25-05-22', planned_value: 99.34, actual_value: 92.89 },
  //   { x: '26-05-22', planned_value: 99.37, actual_value: 92.89 },
  //   { x: '27-05-22', planned_value: 99.48, actual_value: 92.89 },
  //   { x: '28-05-22', planned_value: 99.59, actual_value: 92.89 },
  //   { x: '29-05-22', planned_value: 99.7, actual_value: 92.89 },
  //   { x: '30-05-22', planned_value: 99.81, actual_value: 92.89 },
  //   { x: '31-05-22', planned_value: 99.92, actual_value: 92.89 },
  //   { x: '01-06-22', planned_value: 99.95, actual_value: 92.89 },
  //   { x: '02-06-22', planned_value: 99.98, actual_value: 92.89 },
  //   { x: '03-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '04-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '05-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '06-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '07-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '08-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '09-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '10-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '11-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '12-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '13-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '14-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '15-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '16-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '17-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '18-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '19-06-22', planned_value: 100, actual_value: 92.89 },
  //   { x: '20-06-22', planned_value: 100, actual_value: 92.93 }]

  var dataTemp = [
    { x: '06-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '07-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '08-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '09-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '10-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '11-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '12-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '13-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '14-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '15-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '16-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '17-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '18-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '19-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '20-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '21-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '22-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '23-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '24-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '25-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '26-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '27-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '28-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '29-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '30-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '31-Aug-2021', planned_value: 0, actual_value: 0 },
    { x: '01-Sep-2021', planned_value: 0, actual_value: 0 },
    { x: '02-Sep-2021', planned_value: 0, actual_value: 0 },
    { x: '03-Sep-2021', planned_value: 0, actual_value: 0 },
    { x: '04-Sep-2021', planned_value: 0, actual_value: 0 },
    { x: '05-Sep-2021', planned_value: 0, actual_value: 0 },
    { x: '06-Sep-2021', planned_value: 0.15, actual_value: 0.39 },
    { x: '07-Sep-2021', planned_value: 0.3, actual_value: 0.6 },
    { x: '08-Sep-2021', planned_value: 0.45, actual_value: 0.69 },
    { x: '09-Sep-2021', planned_value: 0.6, actual_value: 1.39 },
    { x: '10-Sep-2021', planned_value: 0.75, actual_value: 1.48 },
    { x: '11-Sep-2021', planned_value: 0.9, actual_value: 1.57 },
    { x: '12-Sep-2021', planned_value: 1.05, actual_value: 1.97 },
    { x: '13-Sep-2021', planned_value: 1.2, actual_value: 2.06 },
    { x: '14-Sep-2021', planned_value: 1.35, actual_value: 2.06 },
    { x: '15-Sep-2021', planned_value: 1.5, actual_value: 2.66 },
    { x: '16-Sep-2021', planned_value: 1.65, actual_value: 2.66 },
    { x: '17-Sep-2021', planned_value: 1.8, actual_value: 2.66 },
    { x: '18-Sep-2021', planned_value: 1.95, actual_value: 2.96 },
    { x: '19-Sep-2021', planned_value: 2.1, actual_value: 2.96 },
    { x: '20-Sep-2021', planned_value: 2.25, actual_value: 2.96 },
    { x: '21-Sep-2021', planned_value: 2.4, actual_value: 3.56 },
    { x: '22-Sep-2021', planned_value: 2.55, actual_value: 3.56 },
    { x: '23-Sep-2021', planned_value: 2.7, actual_value: 3.56 },
    { x: '24-Sep-2021', planned_value: 2.85, actual_value: 3.86 },
    { x: '25-Sep-2021', planned_value: 3, actual_value: 3.86 },
    { x: '26-Sep-2021', planned_value: 3.43, actual_value: 4.14 },
    { x: '27-Sep-2021', planned_value: 3.76, actual_value: 5.18 },
    { x: '28-Sep-2021', planned_value: 4.09, actual_value: 5.18 },
    { x: '29-Sep-2021', planned_value: 4.43, actual_value: 5.4 },
    { x: '30-Sep-2021', planned_value: 4.76, actual_value: 5.7 },
    { x: '01-Oct-2021', planned_value: 5.09, actual_value: 6.14 },
    { x: '02-Oct-2021', planned_value: 5.43, actual_value: 6.14 },
    { x: '03-Oct-2021', planned_value: 5.76, actual_value: 6.36 },
    { x: '04-Oct-2021', planned_value: 6.09, actual_value: 6.36 },
    { x: '05-Oct-2021', planned_value: 6.43, actual_value: 6.69 },
    { x: '06-Oct-2021', planned_value: 6.66, actual_value: 7.29 },
    { x: '07-Oct-2021', planned_value: 6.78, actual_value: 7.29 },
    { x: '08-Oct-2021', planned_value: 6.91, actual_value: 7.29 },
    { x: '09-Oct-2021', planned_value: 7.03, actual_value: 7.29 },
    { x: '10-Oct-2021', planned_value: 7.15, actual_value: 7.4 },
    { x: '11-Oct-2021', planned_value: 7.28, actual_value: 7.51 },
    { x: '12-Oct-2021', planned_value: 7.6, actual_value: 8.06 },
    { x: '13-Oct-2021', planned_value: 8.84, actual_value: 8.11 },
    { x: '14-Oct-2021', planned_value: 10.07, actual_value: 10.31 },
    { x: '15-Oct-2021', planned_value: 11.31, actual_value: 11.29 },
    { x: '16-Oct-2021', planned_value: 12.75, actual_value: 11.83 },
    { x: '17-Oct-2021', planned_value: 14.19, actual_value: 12.35 },
    { x: '18-Oct-2021', planned_value: 15.62, actual_value: 13.72 },
    { x: '19-Oct-2021', planned_value: 17.06, actual_value: 17.12 },
    { x: '20-Oct-2021', planned_value: 17.47, actual_value: 17.34 },
    { x: '21-Oct-2021', planned_value: 17.88, actual_value: 18.58 },
    { x: '22-Oct-2021', planned_value: 18.29, actual_value: 19.05 },
    { x: '23-Oct-2021', planned_value: 18.55, actual_value: 19.5 },
    { x: '24-Oct-2021', planned_value: 18.82, actual_value: 19.65 },
    { x: '25-Oct-2021', planned_value: 19.08, actual_value: 20.1 },
    { x: '26-Oct-2021', planned_value: 19.34, actual_value: 20.5 },
    { x: '27-Oct-2021', planned_value: 19.61, actual_value: 20.82 },
    { x: '28-Oct-2021', planned_value: 19.87, actual_value: 20.91 },
    { x: '29-Oct-2021', planned_value: 20.13, actual_value: 21.02 },
    { x: '30-Oct-2021', planned_value: 20.4, actual_value: 21.04 },
    { x: '31-Oct-2021', planned_value: 20.66, actual_value: 21.13 },
    { x: '01-Nov-2021', planned_value: 20.92, actual_value: 21.14 },
    { x: '02-Nov-2021', planned_value: 21.19, actual_value: 21.16 },
    { x: '03-Nov-2021', planned_value: 21.45, actual_value: 21.32 },
    { x: '04-Nov-2021', planned_value: 21.71, actual_value: 21.42 },
    { x: '05-Nov-2021', planned_value: 21.73, actual_value: 21.79 },
    { x: '06-Nov-2021', planned_value: 21.74, actual_value: 22.33 },
    { x: '07-Nov-2021', planned_value: 21.78, actual_value: 22.86 },
    { x: '08-Nov-2021', planned_value: 21.82, actual_value: 23.44 },
    { x: '09-Nov-2021', planned_value: 21.86, actual_value: 24.05 },
    { x: '10-Nov-2021', planned_value: 21.9, actual_value: 24.62 },
    { x: '11-Nov-2021', planned_value: 21.94, actual_value: 25.02 },
    { x: '12-Nov-2021', planned_value: 21.98, actual_value: 25.05 },
    { x: '13-Nov-2021', planned_value: 22.02, actual_value: 25.52 },
    { x: '14-Nov-2021', planned_value: 22.06, actual_value: 25.94 },
    { x: '15-Nov-2021', planned_value: 22.76, actual_value: 26.29 },
    { x: '16-Nov-2021', planned_value: 23.45, actual_value: 26.75 },
    { x: '17-Nov-2021', planned_value: 24.15, actual_value: 27.1 },
    { x: '18-Nov-2021', planned_value: 24.84, actual_value: 27.45 },
    { x: '19-Nov-2021', planned_value: 25.72, actual_value: 27.94 },
    { x: '20-Nov-2021', planned_value: 26.67, actual_value: 28.25 },
    { x: '21-Nov-2021', planned_value: 27.62, actual_value: 28.58 },
    { x: '22-Nov-2021', planned_value: 28.53, actual_value: 29 },
    { x: '23-Nov-2021', planned_value: 29.43, actual_value: 29.33 },
    { x: '24-Nov-2021', planned_value: 30.33, actual_value: 29.93 },
    { x: '25-Nov-2021', planned_value: 31.24, actual_value: 30.64 },
    { x: '26-Nov-2021', planned_value: 32.14, actual_value: 31.16 },
    { x: '27-Nov-2021', planned_value: 33, actual_value: 31.65 },
    { x: '28-Nov-2021', planned_value: 33.86, actual_value: 32.25 },
    { x: '29-Nov-2021', planned_value: 34.55, actual_value: 32.29 },
    { x: '30-Nov-2021', planned_value: 34.87, actual_value: 32.77 },
    { x: '01-Dec-2021', planned_value: 35.2, actual_value: 33.17 },
    { x: '02-Dec-2021', planned_value: 35.53, actual_value: 33.47 },
    { x: '03-Dec-2021', planned_value: 35.86, actual_value: 33.77 },
    { x: '04-Dec-2021', planned_value: 36.19, actual_value: 34.24 },
    { x: '05-Dec-2021', planned_value: 36.29, actual_value: 34.59 },
    { x: '06-Dec-2021', planned_value: 36.39, actual_value: 35 },
    { x: '07-Dec-2021', planned_value: 36.49, actual_value: 35.52 },
    { x: '08-Dec-2021', planned_value: 36.65, actual_value: 35.85 },
    { x: '09-Dec-2021', planned_value: 36.8, actual_value: 35.93 },
    { x: '10-Dec-2021', planned_value: 36.95, actual_value: 36.06 },
    { x: '11-Dec-2021', planned_value: 37.1, actual_value: 36.1 },
    { x: '12-Dec-2021', planned_value: 37.3, actual_value: 36.16 },
    { x: '13-Dec-2021', planned_value: 37.49, actual_value: 36.22 },
    { x: '14-Dec-2021', planned_value: 37.68, actual_value: 36.31 },
    { x: '15-Dec-2021', planned_value: 37.85, actual_value: 36.44 },
    { x: '16-Dec-2021', planned_value: 38.02, actual_value: 36.58 },
    { x: '17-Dec-2021', planned_value: 38.19, actual_value: 36.72 },
    { x: '18-Dec-2021', planned_value: 38.39, actual_value: 36.83 },
    { x: '19-Dec-2021', planned_value: 38.58, actual_value: 36.98 },
    { x: '20-Dec-2021', planned_value: 38.77, actual_value: 37.09 },
    { x: '21-Dec-2021', planned_value: 38.95, actual_value: 37.29 },
    { x: '22-Dec-2021', planned_value: 39.13, actual_value: 37.32 },
    { x: '23-Dec-2021', planned_value: 39.31, actual_value: 37.59 },
    { x: '24-Dec-2021', planned_value: 39.49, actual_value: 37.86 },
    { x: '25-Dec-2021', planned_value: 39.73, actual_value: 37.92 },
    { x: '26-Dec-2021', planned_value: 39.96, actual_value: 38.17 },
    { x: '27-Dec-2021', planned_value: 40.18, actual_value: 38.44 },
    { x: '28-Dec-2021', planned_value: 40.3, actual_value: 38.72 },
    { x: '29-Dec-2021', planned_value: 41.12, actual_value: 38.85 },
    { x: '30-Dec-2021', planned_value: 41.88, actual_value: 39.18 },
    { x: '31-Dec-2021', planned_value: 42.72, actual_value: 39.29 },
    { x: '01-Jan-2022', planned_value: 43.49, actual_value: 39.85 },
    { x: '02-Jan-2022', planned_value: 44.25, actual_value: 40.41 },
    { x: '03-Jan-2022', planned_value: 45.02, actual_value: 41.01 },
    { x: '04-Jan-2022', planned_value: 45.78, actual_value: 41.6 },
    { x: '05-Jan-2022', planned_value: 46.06, actual_value: 41.81 },
    { x: '06-Jan-2022', planned_value: 46.34, actual_value: 42.33 },
    { x: '07-Jan-2022', planned_value: 46.67, actual_value: 43.05 },
    { x: '08-Jan-2022', planned_value: 47.07, actual_value: 43.62 },
    { x: '09-Jan-2022', planned_value: 47.53, actual_value: 44.14 },
    { x: '10-Jan-2022', planned_value: 47.99, actual_value: 44.68 },
    { x: '11-Jan-2022', planned_value: 48.46, actual_value: 45.21 },
    { x: '12-Jan-2022', planned_value: 48.86, actual_value: 45.24 },
    { x: '13-Jan-2022', planned_value: 49.34, actual_value: 45.28 },
    { x: '14-Jan-2022', planned_value: 49.83, actual_value: 45.33 },
    { x: '15-Jan-2022', planned_value: 50.33, actual_value: 45.34 },
    { x: '16-Jan-2022', planned_value: 50.83, actual_value: 45.39 },
    { x: '17-Jan-2022', planned_value: 51.33, actual_value: 45.44 },
    { x: '18-Jan-2022', planned_value: 51.83, actual_value: 45.49 },
    { x: '19-Jan-2022', planned_value: 52.35, actual_value: 45.53 },
    { x: '20-Jan-2022', planned_value: 52.85, actual_value: 45.62 },
    { x: '21-Jan-2022', planned_value: 53.35, actual_value: 45.71 },
    { x: '22-Jan-2022', planned_value: 53.85, actual_value: 45.72 },
    { x: '23-Jan-2022', planned_value: 54.23, actual_value: 45.98 },
    { x: '24-Jan-2022', planned_value: 54.61, actual_value: 46.31 },
    { x: '25-Jan-2022', planned_value: 55.02, actual_value: 46.66 },
    { x: '26-Jan-2022', planned_value: 55.44, actual_value: 47.08 },
    { x: '27-Jan-2022', planned_value: 55.81, actual_value: 47.6 },
    { x: '28-Jan-2022', planned_value: 56.17, actual_value: 47.99 },
    { x: '29-Jan-2022', planned_value: 56.46, actual_value: 48.25 },
    { x: '30-Jan-2022', planned_value: 56.89, actual_value: 48.44 },
    { x: '31-Jan-2022', planned_value: 57.33, actual_value: 48.62 },
    { x: '01-Feb-2022', planned_value: 57.89, actual_value: 48.81 },
    { x: '02-Feb-2022', planned_value: 58.46, actual_value: 49.12 },
    { x: '03-Feb-2022', planned_value: 59.02, actual_value: 49.38 },
    { x: '04-Feb-2022', planned_value: 59.92, actual_value: 49.98 },
    { x: '05-Feb-2022', planned_value: 60.83, actual_value: 50.44 },
    { x: '06-Feb-2022', planned_value: 61.66, actual_value: 51.12 },
    { x: '07-Feb-2022', planned_value: 62.5, actual_value: 51.82 },
    { x: '08-Feb-2022', planned_value: 63.32, actual_value: 52.62 },
    { x: '09-Feb-2022', planned_value: 64.11, actual_value: 53.35 },
    { x: '10-Feb-2022', planned_value: 64.91, actual_value: 55.04 },
    { x: '11-Feb-2022', planned_value: 65.7, actual_value: 56.83 },
    { x: '12-Feb-2022', planned_value: 66.49, actual_value: 58.59 },
    { x: '13-Feb-2022', planned_value: 67.22, actual_value: 60.29 },
    { x: '14-Feb-2022', planned_value: 67.81, actual_value: 62.06 },
    { x: '15-Feb-2022', planned_value: 68.4, actual_value: 62.93 },
    { x: '16-Feb-2022', planned_value: 69.1, actual_value: 63.85 },
    { x: '17-Feb-2022', planned_value: 69.65, actual_value: 64.77 },
    { x: '18-Feb-2022', planned_value: 70.24, actual_value: 65.63 },
    { x: '19-Feb-2022', planned_value: 70.72, actual_value: 66.55 },
    { x: '20-Feb-2022', planned_value: 71.21, actual_value: 67.57 },
    { x: '21-Feb-2022', planned_value: 71.64, actual_value: 68.52 },
    { x: '22-Feb-2022', planned_value: 72.06, actual_value: 69.39 },
    { x: '23-Feb-2022', planned_value: 72.39, actual_value: 70.17 },
    { x: '24-Feb-2022', planned_value: 72.71, actual_value: 70.62 },
    { x: '25-Feb-2022', planned_value: 72.95, actual_value: 71.12 },
    { x: '26-Feb-2022', planned_value: 73.2, actual_value: 71.73 },
    { x: '27-Feb-2022', planned_value: 73.45, actual_value: 72.31 },
    { x: '28-Feb-2022', planned_value: 73.7, actual_value: 73.33 },
    { x: '01-Mar-2022', planned_value: 73.91, actual_value: 74.2 },
    { x: '02-Mar-2022', planned_value: 74.13, actual_value: 74.8 },
    { x: '03-Mar-2022', planned_value: 74.42, actual_value: 75.25 },
    { x: '04-Mar-2022', planned_value: 74.7, actual_value: 75.71 },
    { x: '05-Mar-2022', planned_value: 75, actual_value: 75.91 },
    { x: '06-Mar-2022', planned_value: 75.33, actual_value: 76.12 },
    { x: '07-Mar-2022', planned_value: 75.8, actual_value: 76.32 },
    { x: '08-Mar-2022', planned_value: 76.26, actual_value: 76.52 },
    { x: '09-Mar-2022', planned_value: 76.73, actual_value: 76.73 },
    { x: '10-Mar-2022', planned_value: 77.17, actual_value: 76.96 },
    { x: '11-Mar-2022', planned_value: 77.61, actual_value: 77.18 },
    { x: '12-Mar-2022', planned_value: 78.02, actual_value: 77.55 },
    { x: '13-Mar-2022', planned_value: 78.41, actual_value: 77.93 },
    { x: '14-Mar-2022', planned_value: 78.8, actual_value: 78.31 },
    { x: '15-Mar-2022', planned_value: 79.17, actual_value: 78.66 },
    { x: '16-Mar-2022', planned_value: 79.54, actual_value: 79.01 },
    { x: '17-Mar-2022', planned_value: 79.92, actual_value: 79.35 },
    { x: '18-Mar-2022', planned_value: 80.26, actual_value: 79.67 },
    { x: '19-Mar-2022', planned_value: 80.56, actual_value: 79.99 },
    { x: '20-Mar-2022', planned_value: 81.02, actual_value: 80.47 },
    { x: '21-Mar-2022', planned_value: 81.47, actual_value: 80.93 },
    { x: '22-Mar-2022', planned_value: 81.94, actual_value: 81.41 },
    { x: '23-Mar-2022', planned_value: 82.33, actual_value: 81.81 },
    { x: '24-Mar-2022', planned_value: 82.71, actual_value: 82.21 },
    { x: '25-Mar-2022', planned_value: 83.09, actual_value: 82.61 },
    { x: '26-Mar-2022', planned_value: 83.48, actual_value: 83.01 },
    { x: '27-Mar-2022', planned_value: 83.82, actual_value: 83.37 },
    { x: '28-Mar-2022', planned_value: 84.17, actual_value: 84.34 },
    { x: '29-Mar-2022', planned_value: 84.4, actual_value: 84.62 },
    { x: '30-Mar-2022', planned_value: 84.61, actual_value: 84.89 },
    { x: '31-Mar-2022', planned_value: 84.84, actual_value: 85.18 },
    { x: '01-Apr-2022', planned_value: 85.15, actual_value: 85.49 },
    { x: '02-Apr-2022', planned_value: 85.46, actual_value: 85.8 },
    { x: '03-Apr-2022', planned_value: 85.78, actual_value: 86.11 },
    { x: '04-Apr-2022', planned_value: 86.15, actual_value: 86.48 },
    { x: '05-Apr-2022', planned_value: 86.53, actual_value: 86.85 },
    { x: '06-Apr-2022', planned_value: 86.84, actual_value: 87.15 },
    { x: '07-Apr-2022', planned_value: 87.14, actual_value: 87.44 },
    { x: '08-Apr-2022', planned_value: 87.45, actual_value: 87.74 },
    { x: '09-Apr-2022', planned_value: 87.75, actual_value: 88.03 },
    { x: '10-Apr-2022', planned_value: 88.05, actual_value: 88.34 },
    { x: '11-Apr-2022', planned_value: 88.31, actual_value: 88.59 },
    { x: '12-Apr-2022', planned_value: 88.57, actual_value: 88.83 },
    { x: '13-Apr-2022', planned_value: 88.84, actual_value: 89.08 },
    { x: '14-Apr-2022', planned_value: 89.07, actual_value: 89.29 },
    { x: '15-Apr-2022', planned_value: 89.29, actual_value: 89.46 },
    { x: '16-Apr-2022', planned_value: 89.52, actual_value: 89.63 },
    { x: '17-Apr-2022', planned_value: 89.74, actual_value: 89.82 },
    { x: '18-Apr-2022', planned_value: 89.92, actual_value: 89.96 },
    { x: '19-Apr-2022', planned_value: 90.07, actual_value: 90.09 },
    { x: '20-Apr-2022', planned_value: 90.17, actual_value: 90.2 },
    { x: '21-Apr-2022', planned_value: 90.32, actual_value: 90.29 },
    { x: '22-Apr-2022', planned_value: 90.48, actual_value: 90.29 },
    { x: '23-Apr-2022', planned_value: 90.64, actual_value: 90.29 },
    { x: '24-Apr-2022', planned_value: 90.8, actual_value: 90.29 },
    { x: '25-Apr-2022', planned_value: 90.96, actual_value: 90.29 },
    { x: '26-Apr-2022', planned_value: 91.1, actual_value: 90.29 },
    { x: '27-Apr-2022', planned_value: 91.29, actual_value: 90.29 },
    { x: '28-Apr-2022', planned_value: 91.47, actual_value: 90.29 },
    { x: '29-Apr-2022', planned_value: 91.63, actual_value: 90.29 },
    { x: '30-Apr-2022', planned_value: 91.82, actual_value: 90.29 },
    { x: '01-May-2022', planned_value: 92.05, actual_value: 90.29 },
    { x: '02-May-2022', planned_value: 92.26, actual_value: 90.29 },
    { x: '03-May-2022', planned_value: 92.46, actual_value: 90.29 },
    { x: '04-May-2022', planned_value: 92.8, actual_value: 90.29 },
    { x: '05-May-2022', planned_value: 93.15, actual_value: 90.29 },
    { x: '06-May-2022', planned_value: 93.49, actual_value: 90.29 },
    { x: '07-May-2022', planned_value: 93.83, actual_value: 90.29 },
    { x: '08-May-2022', planned_value: 94.17, actual_value: 90.29 },
    { x: '09-May-2022', planned_value: 94.46, actual_value: 90.29 },
    { x: '10-May-2022', planned_value: 94.76, actual_value: 90.29 },
    { x: '11-May-2022', planned_value: 94.88, actual_value: 90.29 },
    { x: '12-May-2022', planned_value: 94.96, actual_value: 90.29 },
    { x: '13-May-2022', planned_value: 95.05, actual_value: 90.29 },
    { x: '14-May-2022', planned_value: 95.13, actual_value: 90.29 },
    { x: '15-May-2022', planned_value: 95.18, actual_value: 90.29 },
    { x: '16-May-2022', planned_value: 95.26, actual_value: 90.29 },
    { x: '17-May-2022', planned_value: 95.35, actual_value: 90.29 },
    { x: '18-May-2022', planned_value: 95.5, actual_value: 90.29 },
    { x: '19-May-2022', planned_value: 95.64, actual_value: 90.29 },
    { x: '20-May-2022', planned_value: 95.78, actual_value: 90.29 },
    { x: '21-May-2022', planned_value: 95.92, actual_value: 90.29 },
    { x: '22-May-2022', planned_value: 96.06, actual_value: 91.09 },
    { x: '23-May-2022', planned_value: 96.2, actual_value: 91.09 },
    { x: '24-May-2022', planned_value: 96.34, actual_value: 91.09 },
    { x: '25-May-2022', planned_value: 96.48, actual_value: 91.09 },
    { x: '26-May-2022', planned_value: 96.57, actual_value: 91.09 },
    { x: '27-May-2022', planned_value: 96.71, actual_value: 91.09 },
    { x: '28-May-2022', planned_value: 96.85, actual_value: 91.09 },
    { x: '29-May-2022', planned_value: 97, actual_value: 91.09 },
    { x: '30-May-2022', planned_value: 97.14, actual_value: 91.09 },
    { x: '31-May-2022', planned_value: 97.28, actual_value: 91.09 },
    { x: '01-Jun-2022', planned_value: 97.55, actual_value: 91.09 },
    { x: '02-Jun-2022', planned_value: 97.73, actual_value: 91.09 },
    { x: '03-Jun-2022', planned_value: 98.01, actual_value: 91.09 },
    { x: '04-Jun-2022', planned_value: 98.27, actual_value: 91.09 },
    { x: '05-Jun-2022', planned_value: 98.54, actual_value: 91.09 },
    { x: '06-Jun-2022', planned_value: 98.8, actual_value: 91.37 },
    { x: '07-Jun-2022', planned_value: 99.07, actual_value: 91.37 },
    { x: '09-Jun-2022', planned_value: 99.25, actual_value: 91.37 },
    { x: '10-Jun-2022', planned_value: 99.35, actual_value: 91.37 },
    { x: '11-Jun-2022', planned_value: 99.44, actual_value: 91.37 },
    { x: '12-Jun-2022', planned_value: 99.53, actual_value: 91.37 },
    { x: '13-Jun-2022', planned_value: 99.63, actual_value: 91.37 },
    { x: '14-Jun-2022', planned_value: 99.72, actual_value: 91.37 },
    { x: '15-Jun-2022', planned_value: 99.81, actual_value: 91.49 },
    { x: '16-Jun-2022', planned_value: 99.91, actual_value: 91.67 },
    { x: '17-Jun-2022', planned_value: 100, actual_value: 91.67 },
    { x: '18-Jun-2022', planned_value: 100, actual_value: 91.67 },
    { x: '19-Jun-2022', planned_value: 100, actual_value: 91.67 },
    { x: '20-Jun-2022', planned_value: 100, actual_value: 91.69 },
    { x: '21-Jun-2022', planned_value: 100, actual_value: 91.69 },
    { x: '22-Jun-2022', planned_value: 100, actual_value: 91.72 },
    { x: '23-Jun-2022', planned_value: 100, actual_value: 91.72 },
    { x: '24-Jun-2022', planned_value: 100, actual_value: 91.72 },
    { x: '25-Jun-2022', planned_value: 100, actual_value: 91.86 },
    { x: '26-Jun-2022', planned_value: 100, actual_value: 92.04 }]

  // const data = {
  //   labels: [' JAN', ' FEB', ' MAR', ' APR', ' MAY', ' JUNE', ' JULY', ' AUG', ' SEPT', ' OCT', ' NOV', ' DEC'],
  //   datasets: [

  //     {
  //       data: [10, -4, 6, -8, 25, 20, 10, -4, 6, -8, 25, 20],
  //       strokeWidth: 2,
  //     },
  //     {
  //       data: [5, 8, 6, 9, 8, 2, -2, 5, 8, 6, 9, 8],
  //       strokeWidth: 2,
  //     },
  //   ],
  //   legend: ['Planned Value', 'Actual Value'],
  // }

  const [data, setData] = useState({});
  const [showChart, setShowChart] = useState(false);

  const TextRef = useRef()
  const TextRef1 = useRef()
  const TextRef2 = useRef()
  const plannedValueLineColor = '#ff6800';
  const actualValueLineColor = '#a0a700';

  useEffect(() => {
    setTimeout(() => {
      setShowChart(true)
    }, 1000)
    var lable = dataTemp.map((item) => {
      return item.x;
    })
    var plannedValue = dataTemp.map((item) => {
      return item.planned_value;
    })
    var actualValue = dataTemp.map((item) => {
      return item.actual_value;
    })
    setData({
      labels: lable,
      datasets: [
        {
          data: plannedValue,
          strokeWidth: 4,
          color: (opacity = 1) => plannedValueLineColor,
          // svg: { fill: 'rgb(134, 65, 244)', }
        },
        {
          data: actualValue,
          strokeWidth: 4,
          color: (opacity = 1) => actualValueLineColor,
          // svg: { fill: 'rgb(234, 80, 144)', },
        },
      ],
      // legend: ['Planned Value', 'Actual Value']
    })
  }, [])


  const chartConfig = {
    backgroundColor: "#FFF",
    backgroundGradientFrom: "#FFF",
    backgroundGradientTo: "#FFF",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 4
    },
    propsForDots: {
      r: "1",
      strokeWidth: "2",
      stroke: "#000"
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text>Bezier Line Chart</Text>
      {/* <ScrollView
        horizontal={true}
        contentOffset={{ x: 10000, y: 0 }} // i needed the scrolling to start from the end not the start
        showsHorizontalScrollIndicator={false} // to hide scroll bar
      // style={{backgroundColor:'yellow'}}
      > */}
      {/* <LineChart
          data={data}
          width={1200}
          height={250}
          xLabelsOffset={10}
          chartConfig={chartConfig}
          withHorizontalLines={false}
          withVerticalLines={false}
          withHorizontalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          style={{
            paddingRight: 20, // to remove white spaces at the start of the chart
          }}
          bezier
        /> */}
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
        <View style={{ borderWidth: 1, width: '30%', justifyContent: 'center', alignItems: 'center', borderRadius: 8, borderStyle: 'dashed' }}>
          <View style={{ flexDirection: 'row', }}>
            <TextInput editable={false} style={{ color: 'black', fontSize: 15, paddingVertical: 0 }} ref={TextRef2} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
            <View style={{ height: 15, width: 15, borderRadius: 12, backgroundColor: plannedValueLineColor, }} />
            <TextInput editable={false} style={{ color: 'black', fontSize: 15, paddingVertical: 0 }} ref={TextRef} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
            <View style={{ height: 15, width: 15, borderRadius: 12, backgroundColor: actualValueLineColor, }} />
            <TextInput editable={false} style={{ color: 'black', fontSize: 15, paddingVertical: 0 }} ref={TextRef1} />
          </View>
        </View>
      </View>
      {showChart &&
        <LineChart
          data={data}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={25} // optional, defaults to 1
          withScrollableDot={true}
          onScrollDotPoint={(data) => {
            if (data[2] >= 0) {
              console.log(data);
              console.log('dataTemp.length - ((data[2] + 1))', dataTemp.length - ((data[2] + 1)));
              console.log('dataTemp.length', dataTemp.length);
              console.log('data[2]', data[2] + 1);
              // setPointData(data)
              if ((data[2] + 1) > dataTemp.length) {
                TextRef.current.setNativeProps({
                  text: dataTemp[0].planned_value + ''
                })
                TextRef1.current.setNativeProps({
                  text: dataTemp[0].actual_value + ''
                })
                TextRef2.current.setNativeProps({
                  text: moment(dataTemp[0].x, 'DD-MMM-YY').format('DD-MMM-YY')
                })
              } else {
                TextRef.current.setNativeProps({
                  text: dataTemp[dataTemp.length - ((data[2] + 1))].planned_value + ''
                })
                TextRef1.current.setNativeProps({
                  text: dataTemp[dataTemp.length - ((data[2] + 1))].actual_value + ''
                })
                TextRef2.current.setNativeProps({
                  text: moment(dataTemp[dataTemp.length - ((data[2] + 1))].x, 'DD-MMM-YY').format('DD-MMM-YY')
                })
              }

            }

          }}
          fromZero
          formatXLabel={(value) => ''}
          // withVerticalLabels={true}
          // verticalLabelRotation={90}

          chartConfig={{
            backgroundColor: "#FFF",
            backgroundGradientFrom: "#FFF",
            backgroundGradientTo: "#FFF",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            // backgroundGradientFrom: "#1E2923",
            // backgroundGradientFromOpacity: 0,
            // backgroundGradientTo: "#08130D",
            // backgroundGradientToOpacity: 0.5,
            // color: (opacity = 1) => `rgba(0, 0, 146, ${opacity})`,
            // strokeWidth: 2, // optional, default 3
            // barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
            fillShadowGradientOpacity: 0,
            fillShadowGradientFromOpacity: 0,
            fillShadowGradientToOpacity: 0,
            // fillShadowGradientToOpacity:0,

            propsForDots: {
              r: "0",
              strokeWidth: "5",
              stroke: "#ffa726"
            },
            scrollableInfoSize: {
              height: 0,
              width: 0,
            },
            scrollableDotRadius: 20,
            scrollableDotFill: 'green',
            scrollableDotStrokeColor: '#FFF',
            scrollableDotStrokeWidth: 5,
            scrollableInfoOffset: 0,
            scrollableInfoViewStyle: {
              position: 'absolute',
              backgroundColor: 'rgba(255,255,255,0.5)',
              // padding:0,
              // marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',

            },
            scrollableInfoTextStyle: {
              fontSize: 18,
              padding: 0

            }

          }}
          bezier
          style={{
            borderRadius: 0,
            paddingTop: 20,
            backgroundColor: '#FFF',
          }}
        />
      }
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', paddingBottom: 5 }}>
        <View style={{ height: 15, width: 15, borderRadius: 12, backgroundColor: plannedValueLineColor, marginRight: 5 }} />
        <Text>Planned</Text>
        <View style={{ height: 15, width: 15, borderRadius: 12, backgroundColor: actualValueLineColor, marginLeft: 20, marginRight: 5 }} />
        <Text>Actual</Text>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    // backgroundColor:'#FFF'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
