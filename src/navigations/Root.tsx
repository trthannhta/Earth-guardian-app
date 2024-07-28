import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/common/ErrorOverlay";
import LoadingOverlay from "../components/common/LoadingOverlay";
import { RootStackParams } from "./config";
import TabNavigation from "./TabNavigation";
import QuizzResult from "../screens/quizz-mode/QuizzResult";
import QuizzScreen from "../screens/quizz-mode/QuizzScreen";
import Detail from "../screens/detail/Detail";
import PracticeDetail from "../screens/practice/PracticeDetail";
import { UseTokenColor } from "../hook/UseTokenColor";
import SplashScreen from "../screens/auth/SplashScreen";
import DetailActivity from "../screens/detail/DetailActivity";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const colors = UseTokenColor();
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="DetailActivity" component={DetailActivity} />

          <Stack.Screen
            name="QuizzResult"
            component={QuizzResult}
            options={{
              headerShown: true,
              title: "Kết quả trắc nghiệm",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="QuizzScreen"
            component={QuizzScreen}
            options={{
              headerShown: true,
              title: "Bài trắc nghiệm",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="PracticeDetail"
            component={PracticeDetail}
            options={{
              headerShown: true,
              title: "Bài thực hành",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
