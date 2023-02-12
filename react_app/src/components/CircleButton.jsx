import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props) {
    const { children } = props;
    return (
        <View style={styles.circleBottom}>
            {/* ボタンの＋－をApp.jsxで切り替え */}
          <Text style={styles.circleBottomLabel}>{ children }</Text>
        </View>
    );
};

// CircleButton利用時にchildrenの値は必須
CircleButton.propTypes = {
    children: string.isRequired,
};

const styles = StyleSheet.create({
    
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