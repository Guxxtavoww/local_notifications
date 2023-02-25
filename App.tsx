import { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';

import { globalAppStyles } from './src/styles/global';

export default function App() {
  const displayNotification = useCallback(async () => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'test',
      name: 'notifications app',
      vibration: true,
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      id: '7',
      title: 'Salve, essa notificacao é do app',
      body: 'First notification',
      android: {
        channelId,
      },
    });
  }, []);

  return (
    <View style={globalAppStyles.container}>
      <Text>Olá, Mundo!</Text>
      <Button
        onPress={displayNotification}
        title="Aperte para enviar a notificacao"
      />
    </View>
  );
}
