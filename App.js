import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task  from './components/task';

export default function App() {
  return (
    <View style={styles.container}>
    {/* {Today's tasks} */}
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>
      <View style={styles.items}>
        {/* {this is where tasks will go!} */}
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
      </View>

    </View>

    {/* {write a task} */}
     <KeyboardAvoidingView
     behavior = {Platform.OS==='ios'? 'padding':'height'}
     style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder ={'Write a Task!!'}/>

      <TouchableOpacity>
        <View style= {styles.addWrapper}>
          <Text style= {styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
     </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold'

  },
  items: {
    marginTop:30,
  },
  writeTaskWrapper:{},
  input:{},
});
