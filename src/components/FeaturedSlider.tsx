
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Amazon",
    cashback: "3.5%",
    image: "https://placehold.co/600x300/e6f2ff/0066cc?text=Amazon+Deal",
    color: "#dbeafe" // bg-blue-100
  },
  {
    id: 2,
    title: "ASOS",
    cashback: "5%",
    image: "https://placehold.co/600x300/fff5e6/ff9900?text=ASOS+Deal",
    color: "#ffedd5" // bg-orange-100
  },
  {
    id: 3,
    title: "Nike",
    cashback: "4%",
    image: "https://placehold.co/600x300/e6ffe6/00cc00?text=Nike+Deal",
    color: "#dcfce7" // bg-green-100
  }
];

const FeaturedSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Featured Deals</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all</Text>
          <ArrowRight size={14} color="#6366f1" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        snapToInterval={285} // Approximation of 85% width + margin
        decelerationRate="fast"
      >
        {slides.map((slide) => (
          <TouchableOpacity 
            key={slide.id} 
            style={[styles.card, { backgroundColor: slide.color }]}
            activeOpacity={0.9}
          >
            <View style={styles.cardContent}>
              <View style={styles.cashbackBadge}>
                <Text style={styles.cashbackText}>{slide.cashback} Cashback</Text>
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.cardTitle}>{slide.title}</Text>
                <Text style={styles.cardSubtitle}>Limited time offer</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6366f1', // primary
  },
  arrowIcon: {
    marginLeft: 4,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  card: {
    width: 280, // Approximately 85% of screen width on average devices
    height: 144, // Match the original 36 rem
    borderRadius: 8,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
  },
  cashbackBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cashbackText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardFooter: {
    marginTop: 'auto',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#4b5563', // gray-600
  },
});

export default FeaturedSlider;
