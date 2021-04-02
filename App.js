import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screeens/StartGameScreen";
import GameScreen from "./screeens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHander = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = (
    <StartGameScreen onStartGame={startGameHander}></StartGameScreen>
  );
  if (userNumber) {
    content = <GameScreen userChoice={userNumber}></GameScreen>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
