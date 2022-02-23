import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Workout = ({ navigation: { navigate } }) => {
    const startTime = new Date();
    const startTimePretty = startTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    let [duration,setDuration] = React.useState<number>(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setDuration(duration + 1);
        }, 60000);
        return () => clearInterval(interval);
    },[])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'start' }}>
            <Text>Started @ {startTimePretty}     Duration: {duration} min</Text>
            <Text>Today's Workout: { }</Text>
        </View>
    );
}
export default Workout;
