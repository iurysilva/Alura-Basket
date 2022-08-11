import React from "react";
import { View, Image, StyleSheet} from "react-native";

import Text_Component from "../../components/Text_Component";
import logo from "../../../../assets/logo.png"

export default function Details({name, description, farmName, farmImage, price}){
    return <>
    <Text_Component style={styles.name}>{name}</Text_Component>
    <Text_Component style={styles.description}>{description}</Text_Component>
    <View style={styles.farm}>
        <Image style={styles.farmImage} source={farmImage}/>
        <Text_Component style={styles.farmName}>{farmName}</Text_Component>
    </View>
    <Text_Component style={styles.price}>{price}</Text_Component>
    </>
}


const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: "bold",
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 42,
        marginTop: 8
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    farmImage: {
        width: 32,
        height: 32,
    }
})