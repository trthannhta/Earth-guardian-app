import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import {
  Button,
  ButtonText,
  ImageBackground,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";

type Props = {} & NativeStackScreenProps<RootStackParams, "SplashScreen">;

const SplashScreen = (props: Props) => {
  const { navigation } = props;
  const [num, setNum] = useState(0);

  const onNext = () => {
    navigation.navigate("TabNavigation");
  }; // arrow function

  return (
    <ImageBackground
      flex={1}
      resizeMode="contain"
      py={32}
      justifyContent="flex-end"
      source={require("../../assets/env/splash-bg.png")}
    >
      <StatusBar style="light" />
      <VStack px="$6">
        <Button onPress={onNext}>
          <ButtonText>Tiếp</ButtonText>
        </Button>
      </VStack>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
