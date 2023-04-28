// Sign up screen

import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Input from '../../components/Input';
import {Colors} from '../../constants/styles'
import Button from '../../components/Button';
import React, { useState } from 'react';
import styles from './style'

function SignupScreen(){
    const [isChecked, setChecked] = useState(false)

    const [enteredEmail, setEnteredEmail] = useState('')
    function emailInputHandler(enteredText:string){
        setEnteredEmail(enteredText)
    }

    const [enteredUsername, setEnteredUsername] = useState('')
    function usernameInputHandler(enteredText:string){
        setEnteredUsername(enteredText)
    }
    
    const [enteredPassword, setEnteredPassword] = useState('')
    function passwordInputHandler(enteredText:string){
        setEnteredPassword(enteredText)
    }

    const [checkboxIsEmpty, setCheckboxIsEmpty] = useState(false)
    function checkboxIsEmptyHandler(){
        if (isChecked){
            setCheckboxIsEmpty(false)
        }
        else{
            setCheckboxIsEmpty(true)
        }
    }

    const [emailIsEmpty, setEmailIsEmpty]=useState(false);
    function emailIsEmptyHandler(){
        if (enteredEmail === ''){
            setEmailIsEmpty(true)
        }
        else{
            setEmailIsEmpty(false)
        }
    }

    const [usernameIsEmpty, setUsernameIsEmpty]=useState(false);
    function usernameIsEmptyHandler(){
        if (enteredUsername === ''){
            setUsernameIsEmpty(true)
        }
        else{
            setUsernameIsEmpty(false)
        }
    }

    const [passwordIsEmpty, setPasswordIsEmpty]=useState(false);
    function passwordIsEmptyHandler(){
        if (enteredPassword === ''){
            setPasswordIsEmpty(true)
        }
        else{
            setPasswordIsEmpty(false)
        }
    }

    function onPress(){
        console.log("Text pressed")
    }

    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}> SIGN UP </Text>
            <View style={styles.inputsView}>
                <Input iconPath={require('../../assets/icon_mail.png')}  placeHolder='Your email' password={false} keyboardType='email-address' value={enteredEmail} onChangeText={emailInputHandler} isEmpty={emailIsEmpty}/>
                <Input iconPath={require('../../assets/icon_user.png')}  placeHolder='username' password={false} keyboardType='default' value={enteredUsername} onChangeText={usernameInputHandler} isEmpty={usernameIsEmpty}/>
                <Input iconPath={require('../../assets/icon_lock.png')}  placeHolder='Your password' password={true} keyboardType='default' value={enteredPassword} onChangeText={passwordInputHandler} isEmpty={passwordIsEmpty}/>
                <View style={styles.checkboxContainer}>
                    <Checkbox style={checkboxIsEmpty ? styles.checkboxError : styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? '#4630EB' : undefined}/>
                    <Text style={styles.checkboxText}>Agree To <Text style={styles.underlinedText}>Terms And Conditions</Text></Text>
                </View>
                <Button btnText='CREATE ACCOUNT' func1={emailIsEmptyHandler} func2={usernameIsEmptyHandler} func3={passwordIsEmptyHandler} func4={checkboxIsEmptyHandler}/>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? <Text style={{color:Colors.primary}} onPress={onPress}>Sign in</Text></Text>
        </View>
    </View>
}

export default SignupScreen;