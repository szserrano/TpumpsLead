import { StyleSheet, Image, Platform, View} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/tpumps-450x277.jpg')}
          style={styles.tpumpsHeaderPicture}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tips & Tricks</ThemedText>
      </ThemedView>
      <ThemedText>This page includes some tips compiled from other leads that helped them run the store efficiently.</ThemedText>
      <Collapsible title="FAQ's about Catering Orders">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="How many breaks do my workers have?">
        <ThemedText>
          Here's the general breakdown of worker's breaks:
        </ThemedText>
        <ThemedText>
        <Unorderedlist bulletUnicode={0x2022} color='white'><ThemedText type="italic">Less than 5 Hours: <ThemedText type="defaultSemiBold">One 10-minute break.</ThemedText></ThemedText></Unorderedlist>
        <Unorderedlist bulletUnicode={0x2022} color='white'><ThemedText type="italic">Between 5 Hours and 30 Minutes and 6 Hours:{' '}<ThemedText type="defaultSemiBold">One unpaid 30-minute break and one 10-minute break.</ThemedText></ThemedText></Unorderedlist>
        <Unorderedlist bulletUnicode={0x2022} color='white'><ThemedText type="italic">More than 6 Hours:{' '}<ThemedText type="defaultSemiBold">One unpaid 30-minute break and two 10-minute breaks.</ThemedText></ThemedText></Unorderedlist>
        </ThemedText>
      </Collapsible>
      <Collapsible title="How to Make A Sample Batch For Customers">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Closing Tasks">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
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
  tpumpsHeaderPicture: {
    height: 250,
    width: 390,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  bulletPoint: {
    padding: 5,
  },
  middle: {
    flex: 1,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
});