import { Slot } from 'expo-router';
import { View, Text } from 'react-native'

const RootLayout = () => {
  return (
    <View>
      <Text>RootLayout</Text>
      {/* Slot busca el index.tsx de la carpeta */}
      <Slot />
      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout;