import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import GameOverScreen from "./screens/GameOverScreen";

let count = 0;

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    count = 0;
  }, []);

  function restartTheGame() {
    setPickedNumber(null);
    setGameOver(false);
  }

  function gameOverHandler(logCount) {
    count = logCount;
    setGameOver(true);
  }

  function setPicked(enterednumber) {
    setPickedNumber(enterednumber);
  }

  let screen = <StartGameScreen onSetPicked={setPicked} />;

  if (pickedNumber) {
    screen = (
      <GameScreen
        pickedNumber={pickedNumber}
        gameOverHandler={gameOverHandler}
      />
    );
  }

  if (gameOver && pickedNumber) {
    screen = (
      <GameOverScreen
        onClick={restartTheGame}
        pickedNumber={pickedNumber}
        count={count}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#74063d", "#37021d", "#e9c038", "#720e40"]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
