/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView, StyleSheet,
  Text,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={styles.text} selectable>I am selectable</Text>
      <FlatList data={[1]} renderItem={ListText}/>
    </SafeAreaView>
  );
}

const ListText = () => {
  return <Text style={styles.text} selectable>I am not selectable</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default App;
