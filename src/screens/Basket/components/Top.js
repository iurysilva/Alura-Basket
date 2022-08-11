import React from "react";
import {Image, StyleSheet, Dimensions} from "react-native";

import Text_Component from "../../components/Text_Component";
import top from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Top({title}){
    return <>
    <Image source={top} style={styles.top}/>
    <Text_Component style={styles.titles}>{title}</Text_Component>
    </>
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 578 / 768 * width,
    },
    titles: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
})