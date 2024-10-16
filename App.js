import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useTodoReducer } from './hooks/useTodoReducer';
import TaskList from './components/TaskList';

export default function App() {
  const { tasks, addTask, removeTask } = useTodoReducer();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    addTask(task);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <TaskList tasks={tasks} onRemove={removeTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
