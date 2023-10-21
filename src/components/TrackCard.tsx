import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Track } from "../types";

type TrackCardProps = {
  track: Track;
};

const TrackCard = ({ track }: TrackCardProps) => {
  const image = track?.album?.images?.[0];

  const handleCardPress = () => {
    console.log("first");
  };
  return (
    <Pressable style={styles.trackCardContainer} onPress={handleCardPress}>
      {image && (
        <Image source={{ uri: image.url }} style={styles.trackCardImage} />
      )}
      <View style={styles.trackCardTextContainer}>
        <Text style={styles.trackCardText}>{track.name}</Text>
        <Text style={styles.trackCardArtist}>{track.artists[0]?.name}</Text>
      </View>
    </Pressable>
  );
};

export default TrackCard;

const styles = StyleSheet.create({
  trackCardContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    padding: 10,
  },
  trackCardImage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 10,
  },
  trackCardTextContainer: {
    flex: 1,
  },
  trackCardText: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 22,
    color: "black",
  },
  trackCardArtist: {
    fontSize: 12,
    fontWeight: "400",
    color: "gray",
  },
});
