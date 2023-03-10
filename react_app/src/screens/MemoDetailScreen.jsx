import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

// メモリスト一覧の画面
export default function MemoDetailScreen() {
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年01月01日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    買い物リスト
                    テキストテキストテキスト
                    テキストテキストテキスト
                </Text>
            </ScrollView>
            <CircleButton style={{top: 160, bottom: 'auto'}}>+</CircleButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    memoHeader: {
        backgroundColor:'#467FE3',
        heigh: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#fff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
    }
});