import { StyleSheet } from "react-native";
import React from "react";
import {
  Text,
  Box,
  HStack,
  VStack,
  Image,
  ImageBackground,
} from "@gluestack-ui/themed";

type Props = {};

type CardPopularProps = {
  image: any;
  title: string;
  flexSize: number;
};

const CardPopular = ({ image, title, flexSize }: CardPopularProps) => {
  return (
    <ImageBackground
      source={image}
      alt="image"
      flex={flexSize}
      minHeight={"$24"}
      w={"$full"}
      overflow="hidden"
      resizeMode="cover"
      rounded={"$xl"}
      justifyContent="flex-end"
      alignItems="center"
    >
      <Text color="#fff" mb="$2" fontWeight="$semibold">
        {title}
      </Text>
    </ImageBackground>
  );
};

const PopularList = (props: Props) => {
  return (
    <VStack gap={"$4"}>
      <HStack justifyContent="space-between" mb={"$4"}>
        <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
          Phổ biến
        </Text>
        <Text fontWeight="$normal" fontSize={"$sm"} color="$textDark500">
          Xem tất cả
        </Text>
      </HStack>
      <HStack h={"$96"} gap={"$4"}>
        <VStack flex={1} gap={"$4"}>
          <CardPopular
            image={require("../../../assets/popular-image1.png")}
            title="Bài học 1"
            flexSize={3}
          />
          <CardPopular
            image={require("../../../assets/popular-image2.png")}
            title="Bài học 2"
            flexSize={2}
          />
        </VStack>
        <VStack flex={1} gap={"$4"}>
          <CardPopular
            image={require("../../../assets/popular-image3.png")}
            title="Bài học 3"
            flexSize={1}
          />
          <CardPopular
            image={require("../../../assets/popular-image4.png")}
            title="Bài học 4"
            flexSize={2}
          />
        </VStack>
      </HStack>
      <Box>
        <CardPopular
          image={require("../../../assets/popular-image5.png")}
          title="Bài học 5"
          flexSize={1}
        />
      </Box>
    </VStack>
  );
};

export default PopularList;

const styles = StyleSheet.create({});
