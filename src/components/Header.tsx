
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserCircle, Bell } from "lucide-react";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoPrimary}>Pay</Text>
            <Text style={styles.logoSecondary}>Back</Text>
          </View>
          
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={18} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <UserCircle size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoPrimary: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6366f1', // primary color
  },
  logoSecondary: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ec4899', // secondary color
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 4,
    padding: 8,
  },
});

export default Header;
