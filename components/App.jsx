import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;


