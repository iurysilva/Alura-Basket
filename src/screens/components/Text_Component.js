import React from 'react';
import {StyleSheet, Text} from 'react-native'

export default function Text_Component({children, style}){
    let style_from_component = styles.text_component;
    if (style?.fontWeight == 'bold'){
        style_from_component = styles.textBold;
    }
    return <Text style={[style, style_from_component]}>{children}</Text>
}

const styles = StyleSheet.create({
    text_component: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})