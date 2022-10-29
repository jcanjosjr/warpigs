import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { JCstyles } from "../lib/styles";
import logo from "/home/jcanjos/warpigs/assets/logo.jpg";

export const JCHome = () => (
    <View style={JCstyles.container}>
        <Image source={logo} style={{ width: 505, height: 259 }} />
        <Text style={JCstyles.text}>
        Politicians hide themselves away, they only started the war. <br></br>
        Why should they go out to fight? They leave that role to the poor.
        </Text>
    </View>
)