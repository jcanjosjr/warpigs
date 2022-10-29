import React, {useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import loading from '/home/jcanjos/warpigs/assets/loading.gif';
import { JCstyles } from "../lib/styles";

const JCNews = () => {
    const [state, setState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const url = "https://jsonplaceholder.typicode.com/posts"
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setState(data);
            setIsLoading(false);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <View style={JCstyles.container}>
            {isLoading ? <Image source={loading} /> : <Text style={JCstyles.text}>{state[0].title}</Text>}
        </View>
    );
}

export default JCNews;