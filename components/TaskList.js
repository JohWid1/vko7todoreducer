import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onRemove }) => {
  const renderItem = ({ item }) => <TaskItem task={item} onRemove={onRemove} />;

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.emptyText}>No tasks available</Text>}
    />
  );
};

const styles = StyleSheet.create({
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default TaskList;
