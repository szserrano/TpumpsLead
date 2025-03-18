import { StyleSheet, Image, Platform, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { BarChart, LineChart, PieChart, PopulationPyramid, RadarChart } from "react-native-gifted-charts";

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { disableErrorHandling } from 'expo';

export default function TabSixScreen() {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [curDate, setCurDate] = useState('');
  const [timesData, setTimesData] = useState([{value: 0}]);
  
  // interface TimeData {
  //   value: number;
  // }

  // const timesData: {value: number}[] = [];
  const timesColRef = collection(db, 'times')

  useEffect(() => {
    if(isActive){
      let intervalID = setInterval(() => {
        setTime(time + 1)
      }, 1000)
      
      
      setSec((time % 60));
      let remainSeconds = sec % 60;
      let minutes = Math.floor((time - remainSeconds) / 60); 
      // console.log(minutes);
      setMin(minutes);

      return () => clearInterval(intervalID);
    }
  });

  useEffect(() =>{                  //useEffect utilized for cleaning up newly declared objects after function and runs once to determine date
    var date = new Date()
    if (curDate == ''){
      var month = date.getMonth() + 1
      var day = date.getDate()
      var year = date.getFullYear()
      setCurDate(month.toString().padStart(2, '0') + day.toString().padStart(2, '0') + year) //creates date for firestore data
    }
  }, []);

  useEffect(() => {                 // Read documents from firestore for display on graph
    const fetchData = async() => {
      setTimesData([]);
      try {
        await getDocs(timesColRef)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log(doc.id, doc.data().minutes, doc.data().seconds)
            let totalSeconds = (doc.data().minutes * 60) + doc.data().seconds
            setTimesData(prevItems => [...prevItems, {value: totalSeconds}])
          })
        })
      } catch (err) {
        console.log("Error receiving collection: ", err)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    console.log("timesData after fetchData call: ", timesData)
  }, []);

  // const addTimeData = (newItem) => {
  //   setTimesData(prevItems => [...prevItems, newItem])
  // }

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const clearTimer = () => {
    setTime(0);
    setMin(0);
    setSec(0);
  }
  const finishTimer = async () => {
    // update google firebase with the current time 
    // we use async function bc we don't know how long adding the doc will take
    try {
      const docRef = await addDoc(collection(db, "times"), {
        minutes: min,
        seconds: sec,
        date: curDate,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setIsActive(false);
    clearTimer();
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#8c0d68' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="stopwatch"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Performance</ThemedText>
      </ThemedView>
      <ThemedText>This page will provide you a graph of count times as well as your trends of time to close as you continue to use this app. It also gives you the ability to time yourself for counting and sending your report.</ThemedText>
      <ThemedView style={styles.timerContainer}>
        <ThemedText type='subtitle'>{min} Minutes, {sec} Seconds </ThemedText>
      </ThemedView>
      <Button title={isActive ? 'Pause Timer' : 'Resume Timer'} onPress={handleToggle}/>
      <Button title='Reset Timer' onPress={clearTimer}/>
      <Button title='Finish Timer' onPress={finishTimer}/>
      
      {isLoading ? (<ThemedText>Loading Graphs</ThemedText>)
      : (
        <ThemedView>
          <LineChart data = {timesData} yAxisColor="#0BA5A4" xAxisColor="#0BA5A4" color={'#177AD5'} />
          <PieChart data = {timesData} />
        </ThemedView>
      )
      }

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
});
