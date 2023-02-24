import { Text, View } from 'react-native';

import { globalAppStyles } from './src/styles/global';

export default function App() {
  return (
    <View style={globalAppStyles.container}>
      <Text>Olá, Mundo!</Text>
    </View>
  );
}
