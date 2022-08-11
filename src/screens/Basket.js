import React from 'react';
import {Image, StyleSheet, Dimensions, Text, View} from 'react-native';
import top from '../../assets/topo.png';
import logo from '../../assets/logo.png';

import Text_Component from './components/Text_Component';

const width = Dimensions.get('screen').width;

export default function Basket(){
    return <>
    <Image source={top} style={styles.top}/>
    <Text_Component style={styles.titles}>basket details</Text_Component>
    <View style={styles.basket}>
        <Text_Component style={styles.name}>Vegetables basket</Text_Component>
        <Text_Component style={styles.description}>A basket with carefully selected products, from the farm directly to your kitchen</Text_Component>
        <View style={styles.farm}>
            <Image style={styles.farmImage} source={logo}/>
            <Text_Component style={styles.farmName}>Jenny Jack Farm</Text_Component>
        </View>
        <Text_Component style={styles.price}>R$ 40,00</Text_Component>
    </View>
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
    basket: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
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