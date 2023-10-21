import { StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { tracks } from "../../../assets/data/tracks";
import TrackCard from "../../components/TrackCard";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const renderTrack = ({ item }: any) => {
    return <TrackCard track={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={25} color={"white"} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search..."
          style={styles.searchInput}
        />
        <Text onPress={() => setSearch("")}>Cancel</Text>
      </View>
      <FlatList data={tracks} renderItem={renderTrack} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  inputContainer: { backgroundColor: "transparent", flexDirection: "row" },
  searchContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    height: 50,
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  searchInput: {
    paddingHorizontal: 8,
    flex: 1,
  },
});
