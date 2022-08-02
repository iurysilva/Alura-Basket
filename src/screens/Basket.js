import React from 'react';
import {Image, StyleSheet, Dimensions, Text} from 'react-native';
import top from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Basket(){
    return <>
    <Image source={top} style={estilos.top}/>
    <Text style={estilos.titles}>basket details</Text>
    </>
}

const estilos = StyleSheet.create({
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
    }
})