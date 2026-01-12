import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [text, changeText] = useState('');

  return (
    <View style={{ flexDirection: 'column' }}>
      <ScrollView>
        <View style={{ marginTop: 80 }}>
          <Text style={{ fontSize: 28, fontFamily: 'serif', textAlign: 'center' }}>Your goals start here. Let's crush them</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <View style={{ height: 380, width: 380 }}>
            <Image style={{ width: '100%', height: '100%', borderRadius: 15 }} source={require('./assets/homescreen.png')} />
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 25 }}>
          {/* TODO Think about searching ideas  */}
          <TextInput onChangeText={changeText} value={text} placeholder='Search about some exercise' style={{ backgroundColor: '#EDEDED', width: '92%', marginBottom: 25, paddingLeft: 20, borderRadius: 20 }} />
          {/* TODO Change background color of cards */}
          {text ? '' : (
            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
              <Text style={{ backgroundColor: '#7CFC00', width: 65, height: 60, textAlignVertical: 'center', textAlign: 'center', borderRadius: 15 }}>Back</Text>
              <Text style={{ backgroundColor: '#7CFC00', width: 65, height: 60, textAlignVertical: 'center', textAlign: 'center', borderRadius: 15 }}>Chest</Text>
              <Text style={{ backgroundColor: '#7CFC00', width: 65, height: 60, textAlignVertical: 'center', textAlign: 'center', borderRadius: 15 }}>Arms</Text>
              <Text style={{ backgroundColor: '#7CFC00', width: 65, height: 60, textAlignVertical: 'center', textAlign: 'center', borderRadius: 15 }}>Legs</Text>
              <Text style={{ backgroundColor: '#7CFC00', width: 65, height: 60, textAlignVertical: 'center', textAlign: 'center', borderRadius: 15 }}>Full-Body</Text>
            </View>
          )}
        </View>
        <View style={{ justifyContent: 'center', marginTop: 25, marginBottom: 70 }}>
          {/* It has to be filtered by most liked exercises */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
            <Text style={{ fontSize: 30 }}>Popular Exercises</Text>
            <Button title='View all'></Button>
          </View>
          <View style={{ flexDirection: 'row', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            <View>
              <Image style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 5 }} source={require('./assets/bench-press.jpg')} />
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Bench Press</Text>
            </View>
            <View>
              <Image style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 5 }} source={require('./assets/pull-up.webp')} />
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Pull Up</Text>
            </View>
            <View>
              <Image style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 5 }} source={require('./assets/squat.webp')} />
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Squat</Text>
            </View>
            <View>
              <Image style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 5 }} source={require('./assets/curl.webp')} />
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Curl</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#2F4F4F', flexDirection: 'row', justifyContent: 'center', paddingBottom: 30 }}>
          <View style={{ paddingTop: 15, width: '40%' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginBottom: 5 }}>21 Example Street</Text>
            <Text style={{ color: 'white' }}>Sofia, Bulgaria</Text>
            <Text style={{ color: 'white' }}>support@company.com</Text>
          </View>
          <View style={{ paddingTop: 15, width: '40%' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginBottom: 5 }}>About the company</Text>
            <Text style={{ color: 'white' }}>This is a student app, which is created not only for good grade, but also with educational purpose.</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}


