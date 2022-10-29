import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { JCstyles } from "../lib/styles";

export const JCContact = () => (
    <View style={JCstyles.containerContact}>
        <Text style={JCstyles.text}>
            Contact me!
        </Text>
        <TextInput
            style={JCstyles.input}
            placeholder="Type your name!"
        />
        <TextInput
            style={JCstyles.input}
            placeholder="Type your mail!"
        />
        <TextInput
            style={JCstyles.input}
            placeholder="Type your comment!"
        />
        <TouchableOpacity
            style={JCstyles.appButtonContainer}
            onPress={() => alert('Thanks for your comment!')}
        >
            <Text style={JCstyles.appButtonText}>Press Here</Text>
        </TouchableOpacity>
    </View>
)