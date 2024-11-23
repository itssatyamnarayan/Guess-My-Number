import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onClick }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{ color: "#5e0632" }}
        onPress={onClick}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 5,
    overflow: "hidden",
    borderRadius: 28,
  },
  innerContainer: {
    elevation: 5,
    backgroundColor: "#971958",
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  button: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
