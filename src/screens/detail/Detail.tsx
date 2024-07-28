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
import { allData } from "../../db/slide-data";
import { IData } from "../../types";

type Props = {} & NativeStackScreenProps<RootStackParams, "Detail">;

const Detail = ({ navigation, route }: Props) => {
  const { id, type } = route.params;
  const [data] = useState<IData>(allData[type][id] as any);

  if (!data) {
    return null;
  }

  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground source={data.image} w="$full" height={240}>
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
              {data.description}
            </Text>
          </VStack>
          {data.content.map((contentPart, idx) => (
            <VStack gap="$2" key={`${contentPart.title}-${idx}`}>
              <Text
                color="$primary600"
                fontSize={"$lg"}
                fontWeight={"$semibold"}
              >
                {contentPart.title}
              </Text>
              <VStack gap="$2">
                {contentPart.image && (
                  <Image
                    source={contentPart.image}
                    w="$full"
                    alt="image"
                    height={200}
                    resizeMode="contain"
                  />
                )}
                {contentPart.body.map((elm) => (
                  <Text
                    key={elm}
                    color="$coolGray800"
                    fontSize={"$md"}
                    lineHeight={24}
                  >
                    {elm}
                  </Text>
                ))}
              </VStack>
            </VStack>
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Detail;

const styles = StyleSheet.create({});
