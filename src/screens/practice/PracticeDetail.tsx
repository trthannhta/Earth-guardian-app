import { StyleSheet } from "react-native";
import React from "react";
import { Box, Image, Text, VStack } from "@gluestack-ui/themed";

type Props = {};

const PracticeDetail = (props: Props) => {
  return (
    <Box flex={1} bg="$white" p="$4">
      <VStack gap="$2">
        <Text fontWeight="$semibold" fontSize={"$md"}>
          Bài tập 1: Ô tô chạy
        </Text>
        <Box borderWidth={1} borderColor="$coolGray100" rounded={"$3xl"}>
          <Image
            w={"$full"}
            h={"$40"}
            alt="img-practice"
            source={require("../../assets/practice1.png")}
          />
        </Box>
        <Text fontSize={"$md"} color="$coolGray800">
          Viết chương trình mô tả chiếc xe ô tô chuyển động trên màn hình, từ
          trái sang phải. Nếu gặp cạnh phải thì xuất hiện lại từ bên trái và
          tiếp tục chạy.
        </Text>
      </VStack>
    </Box>
  );
};

export default PracticeDetail;

const styles = StyleSheet.create({});
