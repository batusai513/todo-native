import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

const isIOS = Platform.OS == 'ios';

export default function Todo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.checkbox} />
      <Text style={ [styles.todo] }>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ededed',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row'
  },
  todo: {
    fontSize: 24,
    color: '#4d4d4d',
    fontFamily: isIOS ? 'Al Nile' : 'sans-serif-thin',
  },
  checkbox: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
  }
})
