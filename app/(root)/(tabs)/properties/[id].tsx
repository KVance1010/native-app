import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Property = () => {
  const { id } = useLocalSearchParams();
  
  return (
    <View>
      <Text> Property</Text>
    </View>
  );
};

export default Property;

const styles = StyleSheet.create({});
