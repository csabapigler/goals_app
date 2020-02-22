import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalItem = (props) => {

  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (goal) => {
    setEnteredGoal(goal)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder='Course goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title='Add' onPress={() => props.addGoal(enteredGoal)} />
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default GoalItem