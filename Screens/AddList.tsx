import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

export default function AddList({navigation}) {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      setTodos([{ id: todos.length, text }, ...todos]);
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Card style={styles.card}>
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.center}>
          <Text style={styles.title}>Catatan</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Isi Catatan"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTodo}
        >
          <Text style={styles.buttonText}>Tambahkan</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.todoItem}>
                <Text style={styles.item}>{item.text}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteTodo(item.id)}
                >
                  <Text style={styles.deleteButtonText}>Hapus</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
      </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: '98%',
    padding: 20,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 11,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00FF00',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  item: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
