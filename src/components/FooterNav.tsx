
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Home, Search, Tag, Heart, User } from "lucide-react";

const FooterNav = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.navButtonActive}>
          <Home size={18} color="#6366f1" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Search size={18} color="#6b7280" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Tag size={18} color="#6b7280" />
          <Text style={styles.navText}>Deals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Heart size={18} color="#6b7280" />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <User size={18} color="#6b7280" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 40,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
  },
  navButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonActive: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 10,
    marginTop: 2,
    color: '#6b7280',
  },
  navTextActive: {
    fontSize: 10,
    marginTop: 2,
    color: '#6366f1',
  },
});

export default FooterNav;
