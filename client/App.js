import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AppButton} from "./src/components/AppButton";
import {Container} from "./src/components/Container";

export default function App() {
  return (
    <View style={styles.container}>
        <Container>
            <Text>Open up App.js to start working on your app!</Text>
            <View style={styles.buttons}>
                <AppButton prompt="Click Me!" />
                <AppButton prompt="Click Me!" />
            </View>
        </Container>
        <StatusBar style="auto" hidden={true}/>
    </View>
  );
}

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $primaryColor: '#5B7CFD',
  $primaryHighlight: '#5270e4',
  $primaryDeep: '#2e3e7f',
  $baseLight: '#E7EEF7',
  $itemLight: '#FFFFFF',
  $itemFadedLight: '#F5F6F8'
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  }
});