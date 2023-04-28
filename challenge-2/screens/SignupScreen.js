// Sign up screen

import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Input from '../components/Input';
import {Colors} from '../constants/styles'
import Button from '../components/Button';
import React, { useState } from 'react';

function SignupScreen(){
    const [isChecked, setChecked] = useState(false)

    function onPress(){
        console.log("Text pressed")
    }

    return <View style={styles.container}>
        <View style={styles.contentContainer}>
                <Text style={styles.title}> SIGN UP </Text>
            <View style={styles.inputsView}>
                <Input iconPath={require('../assets/icon_mail.png')}  placeHolder='Your email' password={false} keyboardType='email-address'/>
                <Input iconPath={require('../assets/icon_user.png')}  placeHolder='username' password={false} keyboardType='default'/>
                <Input iconPath={require('../assets/icon_lock.png')}  placeHolder='Your password' password={true} keyboardType='default'/>
                <View style={styles.checkboxContainer}>
                    <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? '#4630EB' : undefined}/>
                    <Text style={styles.checkboxText}>Agree To <Text style={styles.underlinedText}>Terms And Conditions</Text></Text>
                </View>
                <Button btnText='CREATE ACCOUNT'/>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? <Text style={{color:Colors.primary}} onPress={onPress}>Sign in</Text></Text>
        </View>
    </View>
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer:{
        flex:1
    },
    title: {
        color: Colors.primary,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign:'center',
        alignItems: 'center',
        // marginTop: 100,
        // marginBottom:50
    },
    inputsView:{
        flex: 2,
        width: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign:'center',
    },
    footer:{
        paddingTop:20,
        paddingBottom:20,
        alignItems:'center',
        justifyContent: 'center',
        borderTopWidth:1,
        borderTopColor:Colors.primary,
        width:'100%'
    },
    footerText:{
        color:'white',
        fontSize: 16,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
    },
    checkboxContainer:{
        width: "100%",
        flexDirection:'row',
        marginBottom:32,
        alignItems:'center',
        justifyContent: 'flex-start',
    },
    checkbox:{
        marginRight: 10,
        borderRadius: 5,
        borderColor:"white",
        backgroundColor: "white"
    },
    checkboxText:{
        color :'white'
    },
    underlinedText:{
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
});