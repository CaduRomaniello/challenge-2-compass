// Login Screen

import { View, Text} from 'react-native'
import Input from '../../components/Input';
import {Colors} from '../../constants/styles'
import Button from '../../components/Button';
import styles from './style'
import {useState} from 'react'
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type LoginScreenProps={
    navigation: NavigationProp<ParamListBase>
}

function LoginScreen({navigation}:LoginScreenProps){
    const [enteredEmail, setEnteredEmail] = useState('') // handle the email input
    function emailInputHandler(enteredText:string){
        setEnteredEmail(enteredText)
    }

    const [enteredPassword, setEnteredPassword] = useState('') // handle the password input
    function passwordInputHandler(enteredText:string){
        setEnteredPassword(enteredText)
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

    const [passwordIsEmpty, setPasswordIsEmpty]=useState(false); // check if password input is empty
    function passwordIsEmptyHandler(){
        if (enteredPassword === ''){
            setPasswordIsEmpty(true)
        }
        else{
            setPasswordIsEmpty(false)
        }
    }

    // go to signup screen
    function onPress(){
        navigation.navigate("SignupScreen")
    }

    // function that will be passed to the button to verify and navigate to home screen
    function goToHomePage(){
        emailIsEmptyHandler();
        passwordIsEmptyHandler();
        if (enteredEmail!=='' && enteredPassword!==''){
            navigation.navigate("HomeScreen")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.inputsView}>
                    <Text style={styles.title}> WELCOME </Text>

                    <Input iconPath={require('../../assets/icon_mail.png')}  placeHolder='Your email' password={false} keyboardType='email-address' value={enteredEmail} onChangeText={emailInputHandler} isEmpty={emailIsEmpty}/>
                    {emailIsEmpty?(
                        <Text style={styles.errorText}>Please enter a valid email address.</Text>
                    ):null}

                    <Input iconPath={require('../../assets/icon_lock.png')}  placeHolder='Your password' password={true} keyboardType='default' value={enteredPassword} onChangeText={passwordInputHandler} isEmpty={passwordIsEmpty}/>
                    {passwordIsEmpty?(
                        <Text style={styles.errorText}>Please enter a valid password.</Text>
                    ):null}

                    <Button btnText='LOGIN' func1={emailIsEmptyHandler} func2={passwordIsEmptyHandler} goToFunc={goToHomePage}/>
                </View>
            </View>
            
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? <Text style={{color:Colors.primary}} onPress={onPress}>Sign up</Text></Text>
            </View>
        </View>
    )
}

export default LoginScreen;