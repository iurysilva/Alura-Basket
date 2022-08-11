import React from "react";
import { View, Image, StyleSheet} from "react-native";

import Text_Component from "../../components/Text_Component";
import logo from "../../../../assets/logo.png"

export default function Details(){
    return <>
    <Text_Component style={styles.name}>Vegetables basket</Text_Component>
    <Text_Component style={styles.description}>A basket with carefully selected products, from the farm directly to your kitchen</Text_Component>
    <View style={styles.farm}>
        <Image style={styles.farmImage} source={logo}/>
        <Text_Component style={styles.farmName}>Jenny Jack Farm</Text_Component>
    </View>
    <Text_Component style={styles.price}>R$ 40,00</Text_Component>
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