import React from "react";
import { View, Image, StyleSheet} from "react-native";
import Text_Component from "../../components/Text_Component";

export default function Item({item: {name, image}}){
    return <View style={styles.item}>
        <Image source={image} style={styles.image}/>
        <Text_Component style={styles.name}>{name}</Text_Component>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
    
})