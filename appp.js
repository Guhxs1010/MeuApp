import React from "react";
import { View,Text } from "react-native";
import styles from './styles';

const App = () => {
    return(
        <view style={styles.container}>
            <text style={styles.text}>Olá, Mundo!</text>
        </view>
    )
};

export default App;