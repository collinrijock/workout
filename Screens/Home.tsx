import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation: { navigate } }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Start Workout" onPress={() => navigate('Workout')}></Button>
            <Text>Today's Workout: { }</Text>
        </View>
    );
}
export default Home;
