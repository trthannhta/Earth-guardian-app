import { ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Box, ImageBackground, Text, VStack } from "@gluestack-ui/themed";

export interface MemberImageProps {
  image: ImageSourcePropType;
  name?: string;
  wrapperStyle?: any;
}

function MemberImage(props: MemberImageProps) {
  const { image, name, wrapperStyle } = props;

  return (
    <Box rounded={"$2xl"} overflow="hidden" height={"$96"}>
      <ImageBackground source={image} w="$full" alt="Animal" h={"$full"}>
        <Box p={"$4"} flexDirection="column" justifyContent="flex-end" flex={1}>
          <VStack gap={"$3"} w={"70%"}>
            <Text color="$white" fontSize={18} fontWeight="$bold">
              Lập trình Scratch
            </Text>
            <Text color="$white" ellipsizeMode="tail" numberOfLines={2}>
              Dành cho độ tuổi 8 - 13
            </Text>
          </VStack>
        </Box>
      </ImageBackground>
    </Box>
  );
}

const styles = StyleSheet.create({});
export default React.memo(MemberImage);
