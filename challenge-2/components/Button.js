// Button component

import { View, StyleSheet, TextInput, Image, Text, Pressable } from 'react-native'
import {Colors} from '../constants/styles'

function Button(props){
    function onPress(){
        console.log("Pressed")
    }

    // return <Pressable onPress={onPress} android_ripple={{color: '#96642a'}}>
    //     <View style={styles.container}>
    //         <Text style={styles.btnText}>{props.btnText}</Text>
    //     </View>
    // </Pressable>

    return <View style={styles.outerContainer}>
        <Pressable style={styles.innerContainer} onPress={onPress} android_ripple={{color: '#96642a'}}>
            <Text style={styles.btnText}>{props.btnText}</Text>
        </Pressable>
    </View>
}

export default Button;

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius:25,
        marginBottom:32,
        overflow:'hidden'
    },
    innerContainer: {
        borderRadius: 25,
        backgroundColor: Colors.primary,
        // justifyContent: 'flex-start',
        flexDirection:'row',
        // alignItems:'center',
        paddingTop:19,
        paddingBottom: 19,
        width:'80%',
        // marginBottom:32
    },
    btnText:{
        color:"white",
        flex:1,
        fontSize:16,
        textAlign:'center'
    }
});