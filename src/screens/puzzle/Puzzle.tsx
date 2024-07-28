import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text, HStack, ScrollView, VStack } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomRootParams } from "../../navigations/config";
import { EDataType, story } from "../../db/slide-data";
import CardItem from "../home/component/CardItem";

type Props = {} & NativeStackScreenProps<BottomRootParams, "Puzzle">;

const Puzzle = ({ navigation }: Props) => {
  return (
    <ScrollView flex={1} bg="$white" showsVerticalScrollIndicator={false}>
      <VStack flex={1} p={"$4"} gap={"$4"} bg="$white">
        <HStack flexWrap="wrap" justifyContent="space-between">
          {Object.values(story).map((item) => (
            <Box key={item.id} mb={"$6"}>
              <CardItem item={item} type={EDataType.STORY} />
            </Box>
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default Puzzle;

const styles = StyleSheet.create({});
