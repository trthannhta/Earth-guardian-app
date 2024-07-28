import { StyleSheet, Dimensions } from "react-native";
import { Button, Text, Image, Box, View, VStack } from "@gluestack-ui/themed";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { quizzData } from "../../db/quizz";
import TextBox, { EStatus } from "../../components/common/TextBox";
import { getRandomArray } from "../../utils/function";

const show: { [key: string]: string } = {
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
};

const QuizzScreen = () => {
  const [status, setStatus] = useState<EStatus[]>([
    EStatus.NORMAL,
    EStatus.NORMAL,
    EStatus.NORMAL,
  ]);
  const [next, setNext] = useState(false);
  const [point, setPoint] = useState(0);

  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [currQues, setCurrQues] = useState(0);
  const level: string = route.params.level ? route.params.level : "easy";
  const [quizzes] = useState(getRandomArray(quizzData[level], 6));

  const onPress = (i: number) => () => {
    const { ans } = quizzes[currQues];
    const newStatus = [...status];
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.DISABLE;
    }
    if (i == ans) {
      newStatus[i] = EStatus.CORRECT;
      setPoint(point + 1);
    } else {
      newStatus[ans] = EStatus.CORRECT;
      newStatus[i] = EStatus.IN_CORRECT;
    }
    setNext(true);
    setStatus(newStatus);
  };

  const onNext = () => {
    if (currQues < quizzes.length - 1) {
      setCurrQues(currQues + 1);
      setNext(false);

      const newStatus = [...status];
      for (let index = 0; index < newStatus.length; index++) {
        newStatus[index] = EStatus.NORMAL;
      }
      setStatus(newStatus);
    } else {
      navigation.navigate("QuizzResult", {
        level: level,
        point,
        length: quizzes.length,
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Mức độ ${show[level]}`,
    });
  }, []);

  return (
    <VStack flex={1} justifyContent="space-between" bg="$white">
      <VStack gap={"$6"}>
        <Image
          alt="img-ques"
          w={"$full"}
          height={Math.round(
            (159 / 290) * Math.round(0.8 * Dimensions.get("screen").width)
          )}
          source={quizzes[currQues].image}
        />
        <VStack px="$12" gap="$10">
          <Text
            color="$textDark900"
            fontWeight="600"
            fontSize={"$md"}
            w={"$full"}
            textAlign="center"
          >
            {quizzes[currQues].ques}
          </Text>
          <Box w={"$full"} gap={"$4"}>
            {quizzes[currQues].choose.map((item: string, i: number) => (
              <TextBox
                key={`${item}-${i}`}
                status={status[i]}
                onPress={onPress(i)}
                content={item}
                next={next}
              />
            ))}
          </Box>
        </VStack>
      </VStack>
      <Box height={50} px={"$4"} my={"$4"}>
        <Button
          disabled={!next}
          w={"$full"}
          rounded={"$xl"}
          bg="#3758F9"
          onPress={onNext}
          opacity={!next ? 0.5 : 1}
        >
          <Text color="$white">
            {next && currQues === quizzes.length - 1
              ? "Hoàn thành"
              : "Tiếp tục"}
          </Text>
        </Button>
      </Box>
    </VStack>
  );
};

export default QuizzScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  text_main: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
  },
  text_level: {
    color: "#3D7944",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btn__stop: {
    backgroundColor: "#FFFFFF",
    borderColor: "#3D7944",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  btn__continue: {
    backgroundColor: "#3D7944",
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
