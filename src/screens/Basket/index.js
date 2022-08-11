import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Top from './components/Top';
import Details from './components/Details';
import Items from './components/Items';

export default function Basket({top, details, items}){
    return <ScrollView>
    <Top {...top}/>
    <View style={styles.basket}>
        <Details {...details}/>
        <Items {...items}/>
    </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    basket: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
})