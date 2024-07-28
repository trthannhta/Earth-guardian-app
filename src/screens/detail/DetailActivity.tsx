import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  HStack,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft2 } from "iconsax-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import { activity, IActivity } from "../../db/slide-data";
import { IData } from "../../types";

type Props = {} & NativeStackScreenProps<RootStackParams, "DetailActivity">;

const DetailActivity = ({ navigation, route }: Props) => {
  const { id } = route.params;
  const [data] = useState<IActivity>(activity[id] as any);

  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground source={{ uri: data.image }} w="$full" height={240}>
        <SafeAreaView>
          <HStack>
            <Button
              variant="link"
              size="lg"
              px="$2"
              onPress={() => navigation.goBack()}
            >
              <ButtonIcon as={ArrowLeft2} size="xl" color="$white" />
            </Button>
          </HStack>
        </SafeAreaView>
      </ImageBackground>
      <ScrollView>
        {/* Content */}
        <VStack p="$4" gap="$4">
          {/* Overview */}
          <VStack gap="$2">
            <Text color="$primary600" fontSize={"$xl"} fontWeight={"$bold"}>
              {data.title}
            </Text>
            <Text color="$coolGray800" fontSize={"$md"} lineHeight={24}>
              Đối tượng phù hợp: {data.target}
            </Text>
          </VStack>
          <VStack gap="$2">
            <Text color="$primary500" fontSize={"$lg"} fontWeight={"$semibold"}>
              Dụng cụ cần chuẩn bị
            </Text>
            <Box ml="$2" gap="$2">
              {data.material.map((item) => (
                <Text key={item}>+ {item}</Text>
              ))}
            </Box>
          </VStack>
          <VStack gap="$2">
            <Text color="$primary500" fontSize={"$lg"} fontWeight={"$semibold"}>
              Hướng dẫn thực hiện
            </Text>
            <Box ml="$2" gap="$2">
              {data.instructions.map((contentPart, idx) => (
                <VStack gap="$2" key={`${contentPart.title}-${idx}`}>
                  <Text
                    color="$primary500"
                    fontSize={"$md"}
                    fontWeight={"$semibold"}
                  >
                    {contentPart.title}
                  </Text>
                  <VStack gap="$2">
                    <Text color="$coolGray800" fontSize={"$md"} lineHeight={24}>
                      {contentPart.body}
                    </Text>
                  </VStack>
                </VStack>
              ))}
            </Box>
          </VStack>
          <VStack gap="$2">
            <Text color="$primary500" fontSize={"$lg"} fontWeight={"$semibold"}>
              Lợi ích của hoạt động
            </Text>
            <Box ml="$2" gap="$2">
              {data.benefit.map((item) => (
                <Text key={item}>+ {item}</Text>
              ))}
            </Box>
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default DetailActivity;

const styles = StyleSheet.create({});
