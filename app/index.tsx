import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          backgroundColor: "blue",
        }}
      >Hello Deepak, Welcome to Native!</Text>
    </View>
  );
}
