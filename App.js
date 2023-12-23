import Navigation from "./src/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { AuthContextProvider } from "./context";
const App = () => {
  const [Loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!Loaded) {
    return;
  }
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <StatusBar style="dark" />
        <Navigation />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
