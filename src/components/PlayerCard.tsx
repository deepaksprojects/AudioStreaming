import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TrackCardProps } from "./TrackCard";
import { tracks } from "../../assets/data/tracks";
import { Ionicons } from "@expo/vector-icons";
import { usePlayerContext } from "../provider/PlayerProvider";
import { Sound } from "expo-av/build/Audio";
import { Audio } from "expo-av";

const PlayerCard = () => {
  const [sound, setSound] = useState<Sound>();

  const { track } = usePlayerContext();

  useEffect(() => {
    console.log("track", track);
    playTrack();
  }, [track]);

  const playTrack = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    if (track?.preview_url) {
      const { sound: newSound } = await Audio.Sound.createAsync({
        uri: track?.preview_url,
      });
      setSound(newSound);
      await newSound.playAsync();
    }
  };

  const handlePause = async () => {
    if (sound) {
      await sound.unloadAsync();
      setSound(undefined);
    }
  };

  if (!track) {
    return null;
  }
  const image = track?.album?.images?.[0];
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        {image && <Image source={{ uri: image.url }} style={styles.image} />}

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{track.name}</Text>
          <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
        </View>

        <Ionicons
          name={"heart-outline"}
          size={20}
          color={"white"}
          style={{ marginHorizontal: 10 }}
        />
        {sound && track?.preview_url ? (
          <Pressable onPress={handlePause}>
            <Ionicons
              disabled={!track?.preview_url}
              name={"pause"}
              size={22}
              color={track?.preview_url ? "white" : "gray"}
            />
          </Pressable>
        ) : (
          <Pressable onPress={playTrack}>
            <Ionicons
              disabled={!track?.preview_url}
              name={"play"}
              size={22}
              color={track?.preview_url ? "white" : "gray"}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    top: -75,
    height: 75,
    padding: 10,
  },
  player: {
    backgroundColor: "#286660",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 3,
    paddingRight: 15,
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "lightgray",
    fontSize: 12,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },
});
