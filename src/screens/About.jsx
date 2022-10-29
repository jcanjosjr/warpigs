import React from "react";
import { StyleSheet, Text, View, Linking } from 'react-native';
import { JCstyles } from "../lib/styles";

export const JCAbout = () => (
    <View style={JCstyles.container}>
        <Text style={JCstyles.abouttext}>
            This presentation was created as a work for Senac's Web Development class.<br></br>
            In it we have a brief tribute to the Heavy Metal band Black Sabbath.<br></br>
            Are utilized React Native, as the principal Library on development.<br></br>
            The navigation are made with React Navigation with the Stack Navigator. <br></br>
            <br></br>
            <br></br>
        </Text>
        <Text style={JCstyles.abouttext} onPress={() => Linking.openURL('https://github.com/jcanjosjr')}>
            It was developed by DBA José Carlos.
        </Text>
    </View>
)