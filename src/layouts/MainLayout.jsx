import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>To-Do App</Text>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2024 My To-Do App</Text>
  </View>
);

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
  },
});

export default MainLayout;
