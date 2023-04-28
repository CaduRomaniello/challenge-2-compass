// Input component

import { View, StyleSheet, TextInput, Image, Text } from 'react-native'
import {Colors} from '../constants/styles'

function Input(props){
    iconPath =props.iconPath
    return <View style={styles.container}>
        <Image source={props.iconPath} style={styles.img}/>
        <TextInput style={styles.input}
        secureTextEntry={props.password}
        placeholder={props.placeHolder}
        placeholderTextColor={Colors.inputPlaceholder}
        keyboardType={props.keyboardType}/>
    </View>
}

export default Input;

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        backgroundColor: Colors.input,
        justifyContent: 'flex-start',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:19,
        paddingBottom: 19,
        paddingLeft:22,
        width:'80%',
        marginBottom:32
    },
    input: {
        color:Colors.primary,
        flex:1,
        fontSize:20
    },
    img:{
        marginRight:10
    }
});