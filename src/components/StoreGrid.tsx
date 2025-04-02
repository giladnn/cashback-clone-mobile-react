
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const stores = [
  { id: 1, name: "Amazon", cashback: "3.5%", logo: "https://placehold.co/200/e6f2ff/0066cc?text=A" },
  { id: 2, name: "ASOS", cashback: "5%", logo: "https://placehold.co/200/fff5e6/ff9900?text=AS" },
  { id: 3, name: "Nike", cashback: "4%", logo: "https://placehold.co/200/e6ffe6/00cc00?text=N" },
  { id: 4, name: "Apple", cashback: "2%", logo: "https://placehold.co/200/f2e6ff/6600cc?text=AP" },
  { id: 5, name: "eBay", cashback: "3%", logo: "https://placehold.co/200/ffe6e6/cc0000?text=E" },
  { id: 6, name: "Samsung", cashback: "2.5%", logo: "https://placehold.co/200/e6f7ff/0099cc?text=S" },
];

const StoreGrid = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>{title}</Text>
      </View>
      
      <View style={styles.grid}>
        {stores.map((store) => (
          <TouchableOpacity
            key={store.id}
            style={styles.card}
            activeOpacity={0.7}
          >
            <View style={styles.cardContent}>
              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>{store.name.charAt(0)}</Text>
              </View>
              <Text style={styles.name} numberOfLines={1}>{store.name}</Text>
              <Text style={styles.cashback}>{store.cashback}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  card: {
    width: '33.33%',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  cardContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logoContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
  },
  cashback: {
    fontSize: 12,
    color: '#ec4899', // secondary
    fontWeight: 'bold',
  },
});

export default StoreGrid;
