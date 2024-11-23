import {
  Text,
  StyleSheet,
  Image,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({ onClick, pickedNumber, count }) {
  //Dynamic screen Adjustment

  const { width } = useWindowDimensions();

  let containerDimension =
    width > 450
      ? {}
      : {
          justifyContent: "space-between",
        };
  let styleGuessTextDimension =
    width > 450
      ? {
          marginTop: 10,
          paddingHorizontal: 120,
        }
      : {
          marginTop: 50,
          paddingHorizontal: 70,
        };

  let imageDimension =
    width > 450
      ? {
          marginVertical: 10,
          width: 150,
          height: 150,
        }
      : {
          width: 300,
          height: 300,
        };

  let paragraphDimension =
    width > 450
      ? {
          marginHorizontal: 150,
        }
      : {
          marginHorizontal: 35,
        };

  let winOrLoseDimension =
    width > 450
      ? {
          paddingBottom: 2,
        }
      : {
          paddingBottom: 20,
        };

  let buttonDimension =
    width > 450
      ? {
          marginHorizontal: 250,
        }
      : {
          marginHorizontal: 120,
        };

  //Win or Lose
  let winOrLose;

  count <= 10
    ? (winOrLose = (
        <Text style={[styles.winOrLose, winOrLoseDimension]}>You Won!</Text>
      ))
    : (winOrLose = (
        <Text style={[styles.winOrLose, winOrLoseDimension]}>You Lose!</Text>
      ));

  return (
    <>
      <View style={[styles.container, containerDimension]}>
        <Text style={[styles.styleGuessText, styleGuessTextDimension]}>
          Game Over!
        </Text>
        <Image
          source={require("../assets/images/success.png")}
          style={[styles.image, imageDimension]}
        />
        <Text style={[styles.paragraph, paragraphDimension]}>
          Your phone have only <Text style={styles.highlight}>10</Text> Chance.
          But it took <Text style={styles.highlight}>{count}</Text> Chance to
          guess the number
          <Text style={styles.highlight}> {pickedNumber}</Text>.
        </Text>
      </View>
      <View style={[styles.button, buttonDimension]}>
        {winOrLose}
        <PrimaryButton onClick={onClick}>Restart The Game </PrimaryButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  styleGuessText: {
    color: "white",
    fontSize: 30,
    fontFamily: "sans-serif",
    textAlign: "center",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 2,
    padding: 10,
    fontWeight: "bold",
    elevation: 50,
  },
  image: {
    borderRadius: 200,
    borderColor: "black",
    borderWidth: 1,
  },
  paragraph: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    elevation: 100,
  },
  highlight: {
    color: "#bf0c0c",
    fontWeight: "900",
  },
  winOrLose: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    elevation: 20,
  },
  button: {
    flex: 0.32,
  },
});
