import { StyleSheet, Image, Platform, Button } from 'react-native';
import { useState, useEffect } from 'react';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabSixScreen() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  
  useEffect(() => {
    if(isActive){
      let intervalID = setInterval(() => {
        setTime(time + 1)
      }, 1000)
      
      
      setSec((time % 60));
      let remainSeconds = sec % 60;
      let minutes = (time - remainSeconds) / 60; 
      console.log(minutes);
      setMin(minutes);

      return () => clearInterval(intervalID);
    }
  });

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const clearTimer = () => {
    setTime(0);
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
