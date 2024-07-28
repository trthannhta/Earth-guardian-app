import {
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Image, Box, Text, VStack } from "@gluestack-ui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface LevelInfo {
  text: string;
  level: string;
}

const levels: LevelInfo[] = [
  { text: "Dễ", level: "easy" },
  { text: "Trung Bình", level: "medium" },
  { text: "Khó", level: "hard" },
];

const OPTION_COLOR = ["#78C819", "#FFA800", "#EF4444"];

const Quizz = () => {
  const navigation = useNavigation<any>();
  return (
    <VStack
      flex={1}
      gap={"$12"}
      px={"$8"}
      py={"$4"}
      justifyContent="space-between"
      bg="$white"
    >
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <Image
        source={require("../../assets/env/question_logo.png")}
        w="$full"
        height={200}
        resizeMode="contain"
        alt="logo"
      />
      <VStack gap={"$6"}>
        {levels.map((info, index) => (
          <TouchableOpacity
            key={info.level}
            onPress={() =>
              navigation.navigate("QuizzScreen", { level: info.level })
            }
            style={{ width: "100%" }}
          >
            <Box
              backgroundColor={OPTION_COLOR[index]}
              py={"$3"}
              alignItems="center"
              rounded={"$xl"}
            >
              <Text fontWeight="$semibold" color="$white" fontSize={"$2xl"}>
                {info.text}
              </Text>
            </Box>
          </TouchableOpacity>
        ))}
      </VStack>
      <Box>
        <Text textAlign="center" fontSize={"$sm"} color="$coolGray500">
          Lựa chọn mức độ câu hỏi
        </Text>
      </Box>
    </VStack>
  );
};

export default Quizz;

const styles = StyleSheet.create({
  textmain: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  box: {
    width: "100%",
    height: 41,
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#FFFFFF",
  },
});
