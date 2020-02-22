import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (newGoal) => {
    setCourseGoals(currentGoals => [...currentGoals,
    { id: Math.random().toString(), value: newGoal }
    ])
  }

  const removeGoalHandler = (id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id)
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler}/>
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
