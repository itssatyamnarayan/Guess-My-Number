import { StyleSheet, Pressable, View, useWindowDimensions } from "react-native";

export default function HighLowButton({ children, onClick }) {
  const { width } = useWindowDimensions();

  let screenDimension =
    width > 450
      ? {
          marginHorizontal: 80,
          marginTop: -30,
        }
      : {
          marginHorizontal: 0,
        };

  return (
    <View style={styles.pressOuter}>
      <Pressable
        android_ripple={{ color: "#5e0632" }}
        style={({ pressed }) =>
          pressed ? [styles.pressInner, styles.pressed] : styles.pressInner
        }
        onPress={onClick}
      >
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressOuter: {
    margin: 5,
    marginTop: 20,
    overFlow: "hidden",
  },
  pressInner: {
    paddingHorizontal: 40,
    elevation: 5,
    backgroundColor: "#971958",
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
