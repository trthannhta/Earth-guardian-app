import {
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Box, Image, Text, VStack, View } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { quizzData } from "../../db/quizz";

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

enum EResultType {
  GOOD,
  BAD,
}

const RETURN_RESULT = {
  [EResultType.GOOD]: {
    title: "Xin chúc mừng!",
    description: "Bạn đã trả lời đúng",
    color: "#16A34A",
    logo: require("../../assets/good_logo.png"),
  },
  [EResultType.BAD]: {
    title: "Rất tiếc!",
    description: "Bạn không trả lời đúng câu nào",
    color: "#EF4444",
    logo: require("../../assets/bad_logo.png"),
  },
};

const QuizzResult = () => {
  const route = useRoute<any>();
  const { point, length } = route.params;
  const navigation = useNavigation<any>();
  let result = point > length / 2 ? EResultType.GOOD : EResultType.BAD;

  return (
    <VStack
      flex={1}
      bg="$white"
      justifyContent="center"
      alignItems="center"
      px={"$12"}
      gap={"$3"}
    >
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <Image source={RETURN_RESULT[result].logo} alt="logo" />
      <VStack gap={"$1"}>
        <Text
          textAlign="center"
          fontWeight="700"
          fontSize={"$3xl"}
          color="$coolGray800"
        >
          {RETURN_RESULT[result].title}
        </Text>
        <Text textAlign="center" fontSize={"$md"} color="$coolGray800">
          {RETURN_RESULT[result].description}
        </Text>
      </VStack>
      <Text
        textAlign="center"
        fontWeight="700"
        fontSize="$3xl"
        color={RETURN_RESULT[result].color}
      >
        {route.params.point}/{route.params.length}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Quizz")}>
        <Box bgColor="#3758F9" py={"$2.5"} px={"$8"} rounded={"$xl"}>
          <Text color="$white">Tiếp tục học</Text>
        </Box>
      </TouchableOpacity>
      {/* 
      <Box>
        <View style={styles.box__score}>
          <View style={[styles.ques, styles.ques__total]}>
            <Text style={styles.ques__num}>{route.params.length}</Text>
            <Text>question</Text>
          </View>
          <View style={[styles.ques, styles.ques__true]}>
            <Text style={[styles.ques__num, styles.text__white]}>
              {route.params.point}
            </Text>
            <Text style={styles.text__white}>true</Text>
          </View>
          <View style={[styles.ques, styles.ques__false]}>
            <Text style={[styles.ques__num, styles.text__white]}>
              {route.params.length - route.params.point}
            </Text>
            <Text style={styles.text__white}>false</Text>
          </View>
        </View>

      </Box> */}
    </VStack>
  );
};

export default QuizzResult;

const styles = StyleSheet.create({
  text__main: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  text__level: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20,
  },
  text__comment: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#3D7944",
  },
  text__score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3D7944",
    marginTop: 10,
  },
  box__score: {
    flexDirection: "row",
    marginTop: 20,
  },
  ques: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  ques__total: {
    backgroundColor: "#F7D46B",
  },
  ques__true: {
    backgroundColor: "#3D7944",
  },
  ques__false: {
    backgroundColor: "#D00809",
  },
  ques__num: {
    fontSize: 35,
    fontWeight: "bold",
  },
  text__white: {
    color: "#FFFFFF",
  },
});
