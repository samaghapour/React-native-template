import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import RootNavigation from "./navigation/RootNavigator";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {flex: 1},
});

export default App;
