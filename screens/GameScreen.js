import { useState } from "react";
import { Text, View, StyleSheet } from "react-native"
import Title from "../components/Title";

const generateRandomNumberBetween = (min, max, exclude) => {
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return random;
  }
};

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View>

      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
});