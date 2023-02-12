
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AppBar from './src/components/AppBar';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;



export default function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={styles.sectionContainer}>

        <AppBar />

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

// export default App;
