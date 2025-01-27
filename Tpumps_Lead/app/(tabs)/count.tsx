import { StyleSheet, TextInput, Button, Image, Platform } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { NumericFormat } from 'react-number-format';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState } from 'react';

export default function TabFourScreen() {
  const [number20s, setNumber20s] = useState('');
  const [number10s, setNumber10s] = useState('');
  const [number5s, setNumber5s] = useState('');
  const [number1s, setNumber1s] = useState('');
  const [numberCent, setNumberCent] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  
  const [total, setTotal] = useState(0);
  
  const [isOpen, setIsOpen] = useState(false);

  const itemToCount = [
    {title: 'safe'},
    {title: 'register'},
  ];

  const calculateTotal = () => {
    const result = (parseInt(number20s) * 20) + (parseInt(number10s) * 10) + (parseInt(number5s) * 5) + parseInt(number1s) + parseFloat(numberCent);
    setTotal(result);
  };

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
      <ThemedText>This page will include the functionality to help you count your register. Please select if you are counting the register or safe and enter the counts of bills and coins below:</ThemedText>
      <ThemedView style={styles.billRowContainer}>
        <SelectDropdown
          data={itemToCount}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedItem(selectedItem);
          }}
          renderButton={(selectedItem, isOpen) => {
            return (
              <ThemedView style={styles.dropdownButtonStyle}>
                <ThemedText style={styles.dropdownButtonTxtStyle}>{selectedItem !== null ? selectedItem.title : 'What are you counting? (Tap Me)'}</ThemedText>
              </ThemedView>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <ThemedView
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: '#D2D9DF'}),
                }}>
                <ThemedText style={styles.dropdownItemTxtStyle}>{item.title}</ThemedText>
              </ThemedView>
            );
          }}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
      <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number20s} 
              onChangeText={text => setNumber20s(text)} 
              placeholder="How many $20 bills?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.multiplyBox}>
          <ThemedText>x $20 = </ThemedText>
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>{number20s !== '' ? parseInt(number20s) * 20 : 0}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
        <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number10s} 
              onChangeText={text => setNumber10s(text)} 
              placeholder="How many $10 bills?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.multiplyBox}>
          <ThemedText>x $10 = </ThemedText>
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>{number10s !== '' ? parseInt(number10s) * 10 : 0}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
      <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number5s} 
              onChangeText={text => setNumber5s(text)} 
              placeholder="How many $5 bills?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.multiplyBox}>
          <ThemedText>x $5 = </ThemedText>
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>{number5s !== '' ? parseInt(number5s) * 5 : 0}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
        <ThemedView style={styles.inputBox}>
          <TextInput 
              keyboardType='numeric' 
              value={number1s} 
              onChangeText={text => setNumber1s(text)} 
              placeholder="How many $1 bills?"
              placeholderTextColor='grey'
          />
        </ThemedView>
        <ThemedView style={styles.multiplyBox}>
          <ThemedText>x $1 = </ThemedText>
        </ThemedView>
        <ThemedView style={styles.outputBox}>
          <ThemedText>{number1s !== '' ? number1s : 0}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.billRowContainer}>
        {(() => {
        switch (selectedItem) {
          case 'safe':
            return (
              <ThemedView>
              <ThemedView style={styles.inputBox}>
                <TextInput 
                    keyboardType='numeric' 
                    value={numberCent} 
                    onChangeText={text => setNumberCent(text)} 
                    placeholder="How much in coins?"
                    placeholderTextColor='grey'
                />
              </ThemedView>
              <ThemedView style={styles.outputBox}>
                <ThemedText>{numberCent}</ThemedText>
              </ThemedView>
              </ThemedView>
            );
          case 'register':
            return (
              <ThemedView>
              <ThemedView style={styles.inputBox}>
                <TextInput 
                    keyboardType='numeric' 
                    value={numberCent} 
                    onChangeText={text => setNumberCent(text)} 
                    placeholder="How much in coins?"
                    placeholderTextColor='grey'
                />
              </ThemedView>
              <ThemedView style={styles.outputBox}>
                <ThemedText>{numberCent}</ThemedText>
              </ThemedView>
              </ThemedView>
            );
          default:
            return (
              <ThemedView style={styles.unknownCountItem}>
                <ThemedText>Please choose what you are counting above</ThemedText>
              </ThemedView>
            );
        };
      }
      )()}
      </ThemedView>
      <ThemedView style={styles.totalBox}>
        <ThemedText>Total = ${total.toFixed(2)}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.calculateBox}>
        <Button title="Calculate!" onPress={calculateTotal}/>
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
  unknownCountItem:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'maroon',
    borderWidth: 2,
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
  totalBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderWidth: 2,
  },
  calculateBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
  },
  dropdownButtonStyle: {
    width: 350,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
    textAlign: 'center'
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
});
