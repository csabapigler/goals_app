import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <TextInput placeholder='Course goal' 
        style={{borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, width: '80%'}} />
      <Button title='Add' />
    </View>
    <View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
