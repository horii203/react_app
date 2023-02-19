import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleButton(props) {
    const { children, style } = props;
    return (
        //メモ一覧画面とメモ詳細画面でボタンの位置が違うのでstyleを上書く
        <View style={[styles.circleBottom, style]}>
            {/* ボタンの＋－をApp.jsxで切り替え */}
          <Text style={styles.circleBottomLabel}>{ children }</Text>
        </View>
    );
};


CircleButton.propTypes = {
    // CircleButton利用時にchildrenの値は必須
    children: string.isRequired,
    styles: shape(),
};

CircleButton.defaultProps = {
  styles: null
}

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