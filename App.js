import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals,
      {uid: Math.random().toString(), value: enteredGoal}
    ])
    setEnteredGoal('')
  }

  const goalInputHandler = (goal) => {
    setEnteredGoal(goal)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      <FlatList 
        keyExtractor={(item, index) => item.uid}
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
