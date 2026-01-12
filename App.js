import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const [text, changeText] = useState('');

  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 28, fontFamily: 'serif', textAlign: 'center' }}>Your goals start here. Let's crush them</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <View style={{ height: 380, width: 380 }}>
          <Image style={{ width: '100%', height: '100%', borderRadius: 15 }} source={require('./assets/homescreen.png')} />
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
        <TextInput onChangeText={changeText} value={text} placeholder='Search about some exercise' style={{ backgroundColor: '#EDEDED', width: '92%', paddingLeft: 20,borderRadius: 20 }} />
      </View>
      <View>
        <Text>Footer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


