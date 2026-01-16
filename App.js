import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Homepage from './components/home/homescreen';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Homepage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



