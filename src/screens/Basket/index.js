import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Top from './components/Top';
import Details from './components/Details';
import Item from './components/Item';
import Text_Component from '../components/Text_Component';

export default function Basket({top, details, items}){
    return <>
    <FlatList
    data={items.list}
    renderItem={Item}
    keyExtractor={({name}) => name}
    ListHeaderComponent={() => {
        return <>
            <Top {...top}/>
            <View style={styles.basket}>
                <Details {...details}/>
                <Text_Component style={styles.title}>{items.title}</Text_Component>
            </View>
        </>
    }}
    />
    </>
}

const styles = StyleSheet.create({
    basket: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32 
    },
})