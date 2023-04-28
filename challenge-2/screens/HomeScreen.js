// Home Screen

import { View, Text, StyleSheet, Pressable, FlatList, Dimensions } from 'react-native'
import Input from '../components/Input';
import {Colors} from '../constants/styles'
import Button from '../components/Button';
import CategoryGridTile from '../components/CategoryGridTile';

const data = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}, {key: '6'}, {key: '7'}, {key: '8'}, {key: '9'}, {key: '10'}, {key: '11'}, {key: '12'}, {key: '13'}, {key: '14'}];

// var numCol = 2;

function renderItem(itemData){
    return <CategoryGridTile title={itemData.item.key} color={'white'}/>
}

function onPress(){
    console.log('Home Screen text pressed')
}

function HomeScreen(){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.topText} onPress={onPress}>HOME</Text>
            </View>
            <FlatList
                data = {data}
                // keyExtractor={(item, index)=> {index}}
                renderItem={renderItem}
                numColumns={2}
                style={styles.flatlist}
            />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    mainContainer:{
        width:'95%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    topText:{
        color:Colors.primary,
        fontSize:20,
    },
    textContainer:{
        marginBottom:20,
    },
    flatlist:{
    }
});