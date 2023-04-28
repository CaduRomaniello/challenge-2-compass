// Login Screen

import { View, Text} from 'react-native'
import Input from '../../components/Input';
import {Colors} from '../../constants/styles'
import Button from '../../components/Button';
import styles from './style'
import {useState} from 'react'

function LoginScreen(){
    const [enteredEmail, setEnteredEmail] = useState('')
    function emailInputHandler(enteredText:string){
        setEnteredEmail(enteredText)
    }

    const [enteredPassword, setEnteredPassword] = useState('')
    function passwordInputHandler(enteredText:string){
        setEnteredPassword(enteredText)
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
        console.log(enteredEmail + ' --- ' + enteredPassword)
    }

    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View style={styles.inputsView}>
                <Text style={styles.title}> WELCOME </Text>
                <Input iconPath={require('../../assets/icon_mail.png')}  placeHolder='Your email' password={false} keyboardType='email-address' value={enteredEmail} onChangeText={emailInputHandler} isEmpty={emailIsEmpty}/>
                <Input iconPath={require('../../assets/icon_lock.png')}  placeHolder='Your password' password={true} keyboardType='default' value={enteredPassword} onChangeText={passwordInputHandler} isEmpty={passwordIsEmpty}/>
                <Button btnText='LOGIN' func1={emailIsEmptyHandler} func2={passwordIsEmptyHandler}/>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? <Text style={{color:Colors.primary}} onPress={onPress}>Sign up</Text></Text>
        </View>
    </View>
}

export default LoginScreen;