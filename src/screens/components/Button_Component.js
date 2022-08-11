import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text_Component from "./Text_Component";

export default function Button_Component({children, style}){
    return <TouchableOpacity style={[style, styles.button]}>
        <Text_Component style={styles.buttonText}>{children}</Text_Component>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})