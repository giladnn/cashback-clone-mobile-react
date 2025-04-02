
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import Header from '../components/Header';
import FeaturedSlider from '../components/FeaturedSlider';
import StoreGrid from '../components/StoreGrid';
import CategorySection from '../components/CategorySection';
import FooterNav from '../components/FooterNav';
import { Search } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("featured");
  
  const renderTabContent = () => {
    switch (activeTab) {
      case "featured":
        return (
          <>
            <FeaturedSlider />
            <StoreGrid title="Popular Stores" />
          </>
        );
      case "popular":
        return <StoreGrid title="Popular Stores" />;
      case "new":
        return <StoreGrid title="New Offers" />;
      case "categories":
        return (
          <>
            <CategorySection />
            <StoreGrid title="Stores by Category" />
          </>
        );
      case "all":
        return (
          <>
            <CategorySection />
            <StoreGrid title="All Stores" />
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        stickyHeaderIndices={[1]} // The tab bar will be sticky
      >
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Search style={styles.searchIcon} size={18} color="#9ca3af" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search stores, categories and deals..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>
        
        <View style={styles.tabsContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsScrollContent}
          >
            <TouchableOpacity 
              style={[styles.tab, activeTab === "featured" && styles.activeTab]} 
              onPress={() => setActiveTab("featured")}
            >
              <Text style={[styles.tabText, activeTab === "featured" && styles.activeTabText]}>
                Featured
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === "popular" && styles.activeTab]} 
              onPress={() => setActiveTab("popular")}
            >
              <Text style={[styles.tabText, activeTab === "popular" && styles.activeTabText]}>
                Popular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === "new" && styles.activeTab]} 
              onPress={() => setActiveTab("new")}
            >
              <Text style={[styles.tabText, activeTab === "new" && styles.activeTabText]}>
                New Offers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === "categories" && styles.activeTab]} 
              onPress={() => setActiveTab("categories")}
            >
              <Text style={[styles.tabText, activeTab === "categories" && styles.activeTabText]}>
                Categories
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === "all" && styles.activeTab]} 
              onPress={() => setActiveTab("all")}
            >
              <Text style={[styles.tabText, activeTab === "all" && styles.activeTabText]}>
                All Stores
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        <View style={styles.tabContent}>
          {renderTabContent()}
        </View>
      </ScrollView>
      
      <FooterNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb', // gray-50
    paddingBottom: 56, // Height of footer
  },
  scrollView: {
    flex: 1,
    marginTop: 56, // Height of header
  },
  scrollContent: {
    paddingBottom: 16,
  },
  searchContainer: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e7eb', // gray-200
    borderRadius: 9999,
    paddingHorizontal: 16,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1f2937', // gray-800
  },
  tabsContainer: {
    backgroundColor: '#f9fafb', // gray-50
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb', // gray-200
  },
  tabsScrollContent: {
    paddingHorizontal: 16,
  },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 9999,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#6366f1', // primary
  },
  tabText: {
    fontSize: 12,
    color: '#6b7280', // gray-500
  },
  activeTabText: {
    color: 'white',
  },
  tabContent: {
    paddingTop: 4,
  },
});

export default Index;
