import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>My To-Do App</Text>
        <Text style={styles.subtitle}>Created by [Your Name]</Text>
        <Text style={styles.date}>Current Date: {currentDate}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
});

export default AboutScreen;
