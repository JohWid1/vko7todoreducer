import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task, onRemove }) => {
  return (
    <TouchableOpacity onPress={() => onRemove(task.id)}>
      <View style={styles.listItem}>
        <Text>{task.task}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TaskItem;
