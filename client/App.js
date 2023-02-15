import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigation from "./src/navigation/TabNavigation";
import AppNavigator from "./src/pages/AppNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          // colors: { ...DefaultTheme.colors, background: "#1E2128" },
        }}
      >
        {/* <TabNavigation /> */}
        <AppNavigator/>
      </NavigationContainer>
    </>
  );
}
