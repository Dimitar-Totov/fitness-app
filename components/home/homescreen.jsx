import { StatusBar } from 'expo-status-bar';

import { useMemo, useState } from 'react';

import { Text, View, Image, TextInput, Button, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Home, Plus, CircleUserRound, Grid } from 'lucide-react-native';


import * as data from '../../data.json'
import ExcercisesHomeScreen from '../excerciseHomescreen';

export default function Homepage() {
    const [text, changeText] = useState('');
    const filteredData = useMemo(() => data.exercises.filter(item => text === '' ? '' : item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())), [text]);

    return (
        <View style={style.mainContainer}>
            <ScrollView>
                <View>
                    <Text style={style.welcomeHeader}>Your goals start here. Let's crush them</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ height: 380, width: 380 }}>
                        <Image style={style.welcomeImage} source={require('../../assets/homescreen.png')} />
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 25, width: '100%' }}>
                    <KeyboardAvoidingView
                        style={{ width: '100%', alignItems: 'center', flex: 1 }}
                        behavior={Platform.OS === "ios" ? "padding" : "padding"}
                    >
                        <TextInput onChangeText={changeText} value={text} placeholder='Search about some exercise' style={style.homescreenSearch} />
                    </KeyboardAvoidingView>
                    {text
                        ? <ExcercisesHomeScreen searchedText={filteredData} />
                        : (
                            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                                <Text style={style.searchingExcercisesCard}>Back</Text>
                                <Text style={style.searchingExcercisesCard}>Chest</Text>
                                <Text style={style.searchingExcercisesCard}>Arms</Text>
                                <Text style={style.searchingExcercisesCard}>Legs</Text>
                                <Text style={style.searchingExcercisesCard}>Full-Body</Text>
                            </View>
                        )}
                </View>
                <View style={{ justifyContent: 'center', marginTop: 25 }}>
                    {/* It has to be filtered by most liked exercises */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                        <Text style={{ fontSize: 30 }}>Popular Exercises</Text>
                        <Button title='View all'></Button>
                    </View>
                    <View style={{ flexDirection: 'columns', justifyContent: 'center' }}>
                        <View style={style.popularExcerciseCardContainer}>
                            <Image style={style.popularExercisesImage} source={require('../../assets/bench-press.jpg')} />
                            <View style={{ flexDirection: 'row', width: '83%', justifyContent: 'space-between' }}>
                                <Text style={style.popularExcercisesText}>Bench Press</Text>
                                {/* It has to navigate and all others */}
                                <Text style={{ fontFamily: 'sans-serif-light', fontStyle: 'italic' }}>Learn more...</Text>
                            </View>
                        </View>
                        <View style={style.popularExcerciseCardContainer}>
                            <Image style={style.popularExercisesImage} source={require('../../assets/pull-up.webp')} />
                            <View style={{ flexDirection: 'row', width: '83%', justifyContent: 'space-between' }}>
                                <Text style={style.popularExcercisesText}>Pull Up</Text>
                                <Text style={{ fontFamily: 'sans-serif-light', fontStyle: 'italic' }}>Learn more...</Text>
                            </View>
                        </View>
                        <View style={style.popularExcerciseCardContainer}>
                            <Image style={style.popularExercisesImage} source={require('../../assets/squat.webp')} />
                            <View style={{ flexDirection: 'row', width: '83%', justifyContent: 'space-between' }}>
                                <Text style={style.popularExcercisesText}>Squat</Text>
                                <Text style={{ fontFamily: 'sans-serif-light', fontStyle: 'italic' }}>Learn more...</Text>
                            </View>
                        </View>
                        <View style={style.popularExcerciseCardContainer}>
                            <Image style={style.popularExercisesImage} source={require('../../assets/curl.webp')} />
                            <View style={{ flexDirection: 'row', width: '83%', justifyContent: 'space-between' }}>
                                <Text style={style.popularExcercisesText}>Curl</Text>
                                <Text style={{ fontFamily: 'sans-serif-light', fontStyle: 'italic' }}>Learn more...</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={style.footerContainer}>
                    <View style={{ paddingTop: 20, width: '40%' }}>
                        <Text style={style.footerHeaderText}>21 Example Street</Text>
                        <Text style={{ color: 'dark' }}>Sofia, Bulgaria</Text>
                        <Text style={{ color: 'dark' }}>support@company.com</Text>
                    </View>
                    <View style={{ paddingTop: 20, width: '40%' }}>
                        <Text style={style.footerHeaderText}>About the company</Text>
                        <Text style={{ color: 'dark' }}>This is a student app, which is created not only for good grade, but also with educational purpose.</Text>
                    </View>
                </View>
                <StatusBar style="auto" />
            </ScrollView>
            <View style={style.navBar}>
                <Home size={30} />
                <Plus size={30} />
                <Grid size={30} />
                <CircleUserRound size={30} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        borderTopColor: '#dad5d5',
        borderTopWidth: 1,

    },
    welcomeHeader: {
        fontSize: 28,
        fontFamily: 'serif',
        textAlign: 'center'
    },
    welcomeImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    homescreenSearch: {
        backgroundColor: '#EDEDED',
        width: '92%',
        marginBottom: 25,
        paddingLeft: 20,
        borderRadius: 20
    },
    searchingExcercisesCard: {
        backgroundColor: '#7CFC00',
        width: 65, height: 60,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 15
    },
    popularExcerciseCardContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
    },
    popularExcercisesText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    popularExercisesImage: {
        width: 350,
        height: 350,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 30,
        borderTopColor: '#51ef93',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderWidth: 2,
        backgroundColor: '#fff'
    },
    footerHeaderText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'dark',
        marginBottom: 5
    }
})