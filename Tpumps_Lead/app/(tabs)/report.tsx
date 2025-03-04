import { StyleSheet, Pressable, Image, Platform } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useEffect, useState } from 'react';

export default function TabFiveScreen() { 
  const [curDate, setCurDate] = useState('');
  const [unchanged, setUnchanged] = useState(false)
  const [subject, setSubject] = useState('');
  
  
  useEffect(() =>{                  //useEffect utilized for cleaning up newly declared objects after function
    var date = new Date()
    if (curDate == ''){
      var month = date.getMonth() + 1
      var day = date.getDate()
      var year = date.getFullYear()
      setCurDate(month.toString().padStart(2, '0') + day.toString().padStart(2, '0') + year) //creates date for email subject
    }
      var hours = date.getHours()
      {hours < 18 ? setSubject('FM Day Cashier ') : setSubject('FM NIGHT CASH ')}
  }, [])  


  const sendEmail = () => { //onPress function for Pressable
    MailComposer.composeAsync({
      recipients: ['sydbrawrdude@gmail.com'],
      subject: subject + curDate,
      body: '',
      isHtml: false,
      attachments: [
      ],
    });
  };
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#0d8c8c' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#0ddede"
          name="square.and.arrow.up"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Reports</ThemedText>
      </ThemedView>
      <ThemedText>This page allows you to send pictures of your cash report to the higher-ups via email (reports@tpumps.com).</ThemedText>
      <ThemedText>There are different formats for the subject line depending on whether you are closing or opening:</ThemedText>
      <ThemedText><ThemedText type="defaultSemiBoldUnderline">Day (~4PM) Subject:</ThemedText> FM Day Cashier MMDDYYYY</ThemedText>
      <ThemedText><ThemedText type="defaultSemiBoldUnderline">Night (~9:30PM-10PM) Subject:</ThemedText> FM NIGHT CASH MMDDYYYY </ThemedText>
      <ThemedText>The subject line will be automatically entered for you based on the time you're sending your report. However, please take an additional moment to ensure its accuracy.</ThemedText>
      <Pressable onPress={sendEmail}>
        <ThemedView style={styles.emailButtonStyle}>
          <ThemedText style={styles.emailButtonTxtStyle}>Send Your Report</ThemedText>
        </ThemedView>
      </Pressable>
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
  calculateBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
  },
  emailButtonStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  emailButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#0665fd',
    textAlign: 'center'
  },
});
