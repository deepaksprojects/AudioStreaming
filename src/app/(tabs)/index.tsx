import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { tracks } from "../../../assets/data/tracks";
import TrackCard from "../../components/TrackCard";
import { Track } from "../../types";

export default function Home() {
  const renderTrack = ({ item }: any) => {
    return <TrackCard track={item} />;
  };

  return <FlatList data={tracks} renderItem={renderTrack} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
