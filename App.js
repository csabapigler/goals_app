import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (newGoal) => {
    setCourseGoals(currentGoals => [...currentGoals,
    { id: Math.random().toString(), value: newGoal }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = (id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title={'Add New Goal'} onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} addGoal={addGoalHandler} cancel={() => setIsAddMode(false)}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} onDelete={() => removeGoalHandler(itemData.item.id)}/>
        )} />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
