import React from 'react';
import {StyleSheet, View} from 'react-native';
import Top from './components/Top';
import Details from './components/Details';

export default function Basket(){
    return <>
    <Top></Top>
    <View style={styles.basket}>
    <Details></Details>
    </View>
    </>
}

const styles = StyleSheet.create({
    basket: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
})