import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (newGoal) => {
    setCourseGoals(currentGoals => [...currentGoals,
    { uid: Math.random().toString(), value: newGoal }
    ])
    //setEnteredGoal('')
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
        )} />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
