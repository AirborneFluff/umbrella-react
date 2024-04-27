import {Pressable, Text} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export function AppButton({prompt, onPress}) {
  return (
    <Pressable
        style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.buttonContainer
        ]}
        onPress={onPress}>
      <Text style={styles.buttonText}>{prompt}</Text>
    </Pressable>
  )
}

const styles = EStyleSheet.create({
  buttonContainer: {
    backgroundColor: '$primaryColor',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 4,
    margin: 4,
    minWidth: 48
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '$baseLight'
  }
})