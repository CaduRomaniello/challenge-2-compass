// Sign up screen

import { View, Text, StyleSheet, Pressable } from 'react-native'
import Input from '../components/Input';
import {Colors} from '../constants/styles'
import Button from '../components/Button';

function SignupScreen(){
    function onPress(){
        console.log("Text pressed")
    }

    return <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View style={styles.inputsView}>
                <Text style={styles.title}> SIGN UP </Text>
                <Input iconPath={require('../assets/icon_mail.png')}  placeHolder='Your email' password={false} keyboardType='email-address'/>
                <Input iconPath={require('../assets/icon_user.png')}  placeHolder='username' password={false} keyboardType='default'/>
                <Input iconPath={require('../assets/icon_lock.png')}  placeHolder='Your password' password={true} keyboardType='default'/>
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
        marginBottom:100
    },
    inputsView:{
        flex: 2,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
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
    }
});