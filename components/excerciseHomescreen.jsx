import { Text, View, Image } from 'react-native';

export default function ExcercisesHomeScreen(props) {
    return (
        // Fix styling
        <View>
            {props.filter.map(e => (
                <>
                    <Text>{e.title}</Text>
                    <Text>{e.description}</Text>
                    <Image style={{width:20 , height: 20}} source={{uri: e.imageUrl}} />
                </>
            ))}
        </View>

    )
}