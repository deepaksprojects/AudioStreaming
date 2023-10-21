import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import TrackCard from "../../components/TrackCard";
import { tracks } from "../../../assets/data/tracks";

const Favorites = () => {
  const renderTrack = ({ item }: any) => {
    return <TrackCard track={item} />;
  };

  return <FlatList data={tracks} renderItem={renderTrack} />;
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
