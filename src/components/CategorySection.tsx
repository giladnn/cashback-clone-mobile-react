
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: 1, name: "Fashion", icon: "👕" },
  { id: 2, name: "Electronics", icon: "📱" },
  { id: 3, name: "Home", icon: "🏠" },
  { id: 4, name: "Beauty", icon: "💄" },
  { id: 5, name: "Travel", icon: "✈️" },
  { id: 6, name: "Food", icon: "🍔" },
  { id: 7, name: "Sports", icon: "⚽" },
  { id: 8, name: "Kids", icon: "🧸" },
];

const CategorySection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Categories</Text>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.card}
            activeOpacity={0.7}
          >
            <View style={styles.cardContent}>
              <Text style={styles.icon}>{category.icon}</Text>
              <Text style={styles.name}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  headerContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingRight: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardContent: {
    padding: 8,
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    marginBottom: 2,
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default CategorySection;
