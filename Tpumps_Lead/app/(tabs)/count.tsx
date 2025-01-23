import { StyleSheet, TextInput, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';

export default function TabFourScreen() {
  const [number, setNumber] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#38761d' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#b6d7a8"
          name="dollarsign"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Count the Register</ThemedText>
      </ThemedView>
      <ThemedText>This page will include the functionality to help you count your register. Please enter the counts of bills and coins below:</ThemedText>
      <ThemedView style={styles.billRowContainer}>
      <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number} 
              onChangeText={text => setNumber(text)} 
              placeholder="How many $20 bills?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.multiplyBox}>
          <ThemedText>x $20 = </ThemedText>
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>calculate</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
        <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number} 
              onChangeText={text => setNumber(text)} 
              placeholder="How many $10 bills?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.multiplyBox}>
          <ThemedText>x $10 = </ThemedText>
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>calculate</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
      <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number} 
              onChangeText={text => setNumber(text)} 
              placeholder="How many $5 bills?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.multiplyBox}>
          <ThemedText>x $5 = </ThemedText>
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>calculate</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
        <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number} 
              onChangeText={text => setNumber(text)} 
              placeholder="How many $1 bills?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.multiplyBox}>
          <ThemedText>x $1 = </ThemedText>
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>calculate</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
        <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number} 
              onChangeText={text => setNumber(text)} 
              placeholder="How much in coins?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>calculate</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#38761d',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  billRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputBox: {
    width: 150,
    backgroundColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  multiplyBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    backgroundColor: 'red',
    borderWidth: 2,
  },
  outputBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    backgroundColor: 'blue',
    borderWidth: 2,
  },
  picker: {
    height: 50,
    width: 200,
  }
});
