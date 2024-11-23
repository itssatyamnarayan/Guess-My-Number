import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";

export default function Log({ listOfRandom }) {
  //Dynamic screen Adjustment
  const { width } = useWindowDimensions();

  let logDimension =
    width > 450
      ? {
          marginHorizontal: 110,
        }
      : {
          marginHorizontal: 38,
        };

  let logLeftRightDimension =
    width > 450
      ? {
          paddingInlineStart: 20,
          paddingInlineEnd: 220,
        }
      : {
          paddingInlineStart: 20,
          paddingInlineEnd: 50,
        };

  const renderItem = ({ item, index }) => (
    <View style={[styles.log, logDimension]}>
      <Text style={[styles.logLeftRight, logLeftRightDimension]}>
        #{index + 1}
      </Text>
      <Text style={[styles.logLeftRight, logLeftRightDimension]}>
        Opponent's Guess: {item}
      </Text>
    </View>
  );
  return (
    <View style={styles.logContainer}>
      <FlatList
        data={listOfRandom}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logContainer: {
    margin: 30,
    flex: 1,
  },
  log: {
    backgroundColor: "#ffcf31",
    borderRadius: 20,
    flexDirection: "row",
    elevation: 5,
    marginBottom: 7,
  },
  logLeftRight: {
    textAlign: "left",
    paddingVertical: 10,
  },
});
