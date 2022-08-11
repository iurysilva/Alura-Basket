import { StatusBar, SafeAreaView, View} from 'react-native';
import Basket from './src/screens/Basket';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import basket from './src/mocks/basket';

export default function App() {
  const [loadedFont] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  })

  if (!loadedFont) {
    return <View/>
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <Basket {...basket}/>
    </SafeAreaView>
  );
}

