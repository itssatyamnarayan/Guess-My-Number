import {
  Text,
  StyleSheet,
  View,
  Alert,
  useWindowDimensions,
} from "react-native";
import Log from "../components/Log";
import HighLowButton from "../components/HighLowButton";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function GameScreen({ pickedNumber, gameOverHandler }) {
  const [randomNumber, setRandomNumber] = useState({
    random: Math.floor(Math.random() * 99) + 1,
    listOfRandom: [],
  });

  //Dynamic screen Adjustment

  const { width } = useWindowDimensions();

  let mainScreenDimension =
    width > 450
      ? {
          marginTop: 35,
          justifyContent: "space-between",
        }
      : {
          marginTop: 70,
          justifyContent: "space-between",
        };

  let styleGuessDimension =
    width > 450
      ? {
          marginHorizontal: 130,
        }
      : {
          marginHorizontal: 40,
        };

  let highLowBoxDimension =
    width > 450
      ? {
          marginHorizontal: 200,
        }
      : {
          marginHorizontal: 50,
        };

  let guessedNumberDimension =
    width > 450
      ? {
          marginHorizontal: 250,
          marginBottom: 10,
        }
      : {
          marginHorizontal: 110,
        };

  let log =
    width > 450
      ? {
          flex: 0.4,
        }
      : {
          flex: 0.9,
        };

  //Effect & Functions

  useEffect(() => {
    if (pickedNumber == randomNumber.random) {
      let logCount = randomNumber.listOfRandom.length;
      gameOverHandler(logCount);
    }
  }, [randomNumber.random, pickedNumber]);

  function predictLessNumber() {
    if (randomNumber.random > pickedNumber) {
      setRandomNumber((obj) => {
        return {
          random: Math.floor(Math.random() * pickedNumber) + 1,
          listOfRandom: [...obj.listOfRandom, obj.random],
        };
      });
    } else {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
    }
  }

  function predictHighNumber() {
    if (randomNumber.random < pickedNumber) {
      setRandomNumber((obj) => {
        return {
          random:
            Math.floor(Math.random() * (99 - randomNumber.random + 1)) +
            randomNumber.random,
          listOfRandom: [...obj.listOfRandom, obj.random],
        };
      });
    } else {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
    }
  }

  return (
    <>
      <View style={[styles.mainScreen, mainScreenDimension]}>
        <Text style={[styles.styleGuess, styleGuessDimension]}>
          {" "}
          Opponent's Guess{" "}
        </Text>
        <Text style={[styles.guessedNumber, guessedNumberDimension]}>
          {" "}
          {randomNumber.random}{" "}
        </Text>
        <View style={[styles.highLowBox, highLowBoxDimension]}>
          <Text style={styles.highLow}>Higher or Lower?</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <HighLowButton onClick={predictLessNumber}>
                <Ionicons
                  name="remove"
                  size={24}
                  color="white"
                  style={styles.icon}
                />
              </HighLowButton>
            </View>
            <View style={styles.buttonContainer}>
              <HighLowButton onClick={predictHighNumber}>
                <Ionicons
                  name="add"
                  size={24}
                  color="white"
                  style={styles.icon}
                />
              </HighLowButton>
            </View>
          </View>
        </View>
      </View>
      <View style={log}>
        <Log listOfRandom={randomNumber.listOfRandom} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  styleGuess: {
    color: "#ffcf31",
    marginBottom: 20,
    fontSize: 30,
    fontFamily: "sans-serif",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 2,
    padding: 10,
    fontWeight: "bold",
    elevation: 30,
    backgroundColor: "#971958",
  },
  guessedNumber: {
    color: "white",
    fontSize: 40,
    fontFamily: "sans-serif",
    textAlign: "center",
    borderWidth: 0.41,
    borderColor: "white",
    borderRadius: 2,
    padding: 10,
    fontWeight: "bold",
    elevation: 30,
    backgroundColor: "black",
  },
  highLowBox: {
    backgroundColor: "#4e0329",
    padding: 20,
    borderRadius: 10,
    elevation: 20,
  },
  highLow: {
    color: "#ffcf31",
    fontSize: 25,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  icon: {
    textAlign: "center",
  },
});
