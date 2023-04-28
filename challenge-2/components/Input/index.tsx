// Input component

import { View, TextInput, Image, ImageSourcePropType, KeyboardTypeOptions} from 'react-native'
import React from 'react'
import styles from './style'
import {Colors} from '../../constants/styles'

type Props = {
    iconPath: ImageSourcePropType;                     // icon that will be displayed in the input
    placeHolder:string;                                // input placeholder
    password:boolean;                                  // variable to check if input will receive a password
    keyboardType:KeyboardTypeOptions | undefined;      // variable to define the type of the keyboard that will appear when user starts to digit in the input field
    value:string;                                      // variable tht will hold the value that will be inserted in the input field
    onChangeText:((text: string) => void) | undefined; // function that will update the variable that holds the input value
    isEmpty:boolean;                                   // variable that checks if the input field is empty
};

const Input = ({iconPath, placeHolder, password, keyboardType, value, onChangeText, isEmpty}:Props) => {
  
    return (
        <View style={isEmpty ? styles.containerError : styles.container}>
            <Image source={iconPath} style={styles.img}/>
            <TextInput style={styles.input}
            secureTextEntry={password}
            placeholder={placeHolder}
            placeholderTextColor={Colors.inputPlaceholder}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}/>
        </View>
    );
};

export default Input;