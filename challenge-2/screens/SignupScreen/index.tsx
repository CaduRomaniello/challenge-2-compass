// Sign up screen

import Checkbox from 'expo-checkbox';
import { View, Text} from 'react-native'
import Input from '../../components/Input';
import {Colors} from '../../constants/styles'
import Button from '../../components/Button';
import React, { useState } from 'react';
import styles from './style'
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type SignupScreenProps={
    navigation: NavigationProp<ParamListBase>
}

function SignupScreen({navigation}:SignupScreenProps){
    const [isChecked, setChecked] = useState(false) // check if checkbox is checked or not

    const [enteredEmail, setEnteredEmail] = useState('') // handle email input
    function emailInputHandler(enteredText:string){
        setEnteredEmail(enteredText)
    }

    const [enteredUsername, setEnteredUsername] = useState('') // handle username input
    function usernameInputHandler(enteredText:string){
        setEnteredUsername(enteredText)
    }
    
    const [enteredPassword, setEnteredPassword] = useState('') // handle password input
    function passwordInputHandler(enteredText:string){
        setEnteredPassword(enteredText)
    }

    const [checkboxIsEmpty, setCheckboxIsEmpty] = useState(false) // check if checkbox is not checked, i did this to keep a pattern
    function checkboxIsEmptyHandler(){
        if (isChecked){
            setCheckboxIsEmpty(false)
        }
        else{
            setCheckboxIsEmpty(true)
        }
    }

    const [emailIsEmpty, setEmailIsEmpty]=useState(false); // check if email input is empty
    function emailIsEmptyHandler(){
        if (enteredEmail === ''){
            setEmailIsEmpty(true)
        }
        else{
            setEmailIsEmpty(false)
        }
    }

    const [usernameIsEmpty, setUsernameIsEmpty]=useState(false); // check if username input is empty
    function usernameIsEmptyHandler(){
        if (enteredUsername === ''){
            setUsernameIsEmpty(true)
        }
        else{
            setUsernameIsEmpty(false)
        }
    }

    const [passwordIsEmpty, setPasswordIsEmpty]=useState(false); // check if password input is empty
    function passwordIsEmptyHandler(){
        if (enteredPassword === ''){
            setPasswordIsEmpty(true)
        }
        else{
            setPasswordIsEmpty(false)
        }
    }

    // go to login screen
    function onPress(){
        navigation.navigate("LoginScreen")
    }

    // function that will be passed to the button to verify and navigate to home screen
    function goToHomePage(){
        if (enteredEmail!=='' && enteredPassword!=='' && enteredUsername!=='' && isChecked){
            navigation.navigate("HomeScreen")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}> SIGN UP </Text>

                <View style={styles.inputsView}>
                    <Input iconPath={require('../../assets/icon_mail.png')}  placeHolder='Your email' password={false} keyboardType='email-address' value={enteredEmail} onChangeText={emailInputHandler} isEmpty={emailIsEmpty}/>
                    {emailIsEmpty?(
                        <Text style={styles.errorText}>Please enter a valid email address.</Text>
                    ):null}

                    <Input iconPath={require('../../assets/icon_user.png')}  placeHolder='username' password={false} keyboardType='default' value={enteredUsername} onChangeText={usernameInputHandler} isEmpty={usernameIsEmpty}/>
                    {usernameIsEmpty?(
                        <Text style={styles.errorText}>Please enter a valid username.</Text>
                    ):null}

                    <Input iconPath={require('../../assets/icon_lock.png')}  placeHolder='Your password' password={true} keyboardType='default' value={enteredPassword} onChangeText={passwordInputHandler} isEmpty={passwordIsEmpty}/>
                    {passwordIsEmpty?(
                        <Text style={styles.errorText}>Please enter a valid password.</Text>
                    ):null}

                    <View style={checkboxIsEmpty? styles.checkboxContainerError : styles.checkboxContainer}>
                        <Checkbox style={checkboxIsEmpty ? styles.checkboxError : styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? '#4630EB' : undefined}/>
                        <Text style={styles.checkboxText}>Agree To <Text style={styles.underlinedText}>Terms And Conditions</Text></Text>
                    </View>
                    {checkboxIsEmpty?(
                        <Text style={styles.errorText}>Please accept the terms.</Text>
                    ):null}

                    <Button btnText='CREATE ACCOUNT' func1={emailIsEmptyHandler} func2={usernameIsEmptyHandler} func3={passwordIsEmptyHandler} func4={checkboxIsEmptyHandler} goToFunc={goToHomePage}/>
                </View>
            </View>
            
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? <Text style={{color:Colors.primary}} onPress={onPress}>Sign in</Text></Text>
            </View>
        </View>
    )
}

export default SignupScreen;