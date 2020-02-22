import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalItem = (props) => {

  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (goal) => {
    setEnteredGoal(goal)
  }

  const addCurrentGoal = () => {
    props.addGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title='Cancel' color='red' onPress={props.cancel}/>
          </View>
          <View style={styles.buttonStyle}>
            <Button title='Add' onPress={addCurrentGoal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  buttonStyle: {
    width: '40%'
  },
})

export default GoalItem