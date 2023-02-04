/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.sectionContainer}>
        <View style={styles.appbar}>
          <View style={styles.appbarInner}>
            <Text style={styles.appbarTitle}>MEMO APP</Text>
            <Text style={styles.appbarRight}>ログアウト</Text>
          </View>
        </View>

        <View>
          <View style={styles.memoListItem}> 
            <View>
              <Text style={styles.memoListItemTitle}>買い物リスト</Text>
              <Text style={styles.memoListItemDate}>2023/02/04 10:00</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>

          <View style={styles.memoListItem}> 
            <View>
              <Text style={styles.memoListItemTitle}>買い物リスト</Text>
              <Text style={styles.memoListItemDate}>2023/02/04 10:00</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>

          <View style={styles.memoListItem}> 
            <View>
              <Text style={styles.memoListItemTitle}>買い物リスト</Text>
              <Text style={styles.memoListItemDate}>2023/02/04 10:00</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>
        </View>

        <View style={styles.circleBottom}>
          <Text style={styles.circleBottomLabel}>+</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FE3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center'
  },
  appbarRight:{
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  circleBottom: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8 // android影
  },
  circleBottomLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  }
});

export default App;
