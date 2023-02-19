import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

// メモリスト一覧の画面
export default function MemoListScreen() {
    return (
        <View style={styles.sectionContainer}>
            <AppBar />
            <MemoList />
            <CircleButton>+</CircleButton>
        </View>
    );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});