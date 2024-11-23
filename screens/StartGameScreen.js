import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen({ onSetPicked }) {
  const [userInput, setUserInput] = useState(null);

  //Dynamic screen Adjustment
  const { width } = useWindowDimensions();

  let styleGuessTextDimension =
    width > 450
      ? {
          marginTop: 40,
          marginBottom: 50,
          marginHorizontal: 100,
        }
      : {
          marginTop: 70,
          marginBottom: 150,
          marginHorizontal: 30,
        };

  let inputContainerDimension =
    width > 450
      ? {
          marginHorizontal: 174,
        }
      : {
          marginHorizontal: 44,
        };

  //function
  function userInputHandler(enterednumber) {
    setUserInput(enterednumber);
  }

  function confirmInputHandler() {
    if (userInput > 0 && userInput < 100) {
      onSetPicked(userInput);
    } else {
      Alert.alert("Invalid number!", "Number has to be between 1 to 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
  }

  function resetInputHandler() {
    setUserInput(0);
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <Text style={[styles.styleGuessText, styleGuessTextDimension]}>
        {" "}
        Guess My Number{" "}
      </Text>
      <View style={[styles.inputContainer, inputContainerDimension]}>
        <Text style={styles.displayText}> Enter a Number </Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={userInputHandler}
          value={userInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={resetInputHandler}>Reset </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  styleGuessText: {
    color: "#ffcf31",
    fontSize: 30,
    fontFamily: "sans-serif",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 2,
    padding: 10,
    fontWeight: "bold",
    elevation: 50,
    backgroundColor: "#971958",
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#4e0329",
    padding: 16,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  displayText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: 28,
    textAlign: "center",
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
