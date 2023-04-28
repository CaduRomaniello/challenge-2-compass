// Input component

import { View, TextInput, Image, ImageSourcePropType, KeyboardTypeOptions} from 'react-native'
import React from 'react'
import styles from './style'
import {Colors} from '../../constants/styles'

type Props = {
    iconPath: ImageSourcePropType;
    placeHolder:string;
    password:boolean;
    keyboardType:KeyboardTypeOptions | undefined;
    value:string;
    onChangeText:((text: string) => void) | undefined;
    isEmpty:boolean;
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

// function Input(props){
//     return <View style={styles.container}>
//         <Image source={props.iconPath} style={styles.img}/>
//         <TextInput style={styles.input}
//         secureTextEntry={props.password}
//         placeholder={props.placeHolder}
//         placeholderTextColor={Colors.inputPlaceholder}
//         keyboardType={props.keyboardType}/>
//     </View>
// }