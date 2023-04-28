// Button component

import { View, StyleSheet, TextInput, Image, Text, Pressable } from 'react-native'
import {Colors} from '../../constants/styles'
import styles from './style'

type Props = {
    btnText:string;
    func1?:Function;
    func2?:Function;
    func3?:Function;
    func4?:Function;
};

const Button = ({btnText, func1, func2, func3, func4}:Props) => {
    function onPress(){
        console.log("Pressed")
        if (func1){
            func1();
        }
        if (func2){
            func2();
        }
        if (func3){
            func3();
        }
        if (func4){
            func4();
        }
    }

    return <View style={styles.outerContainer}>
        <Pressable style={styles.innerContainer} onPress={onPress} android_ripple={{color: '#96642a'}}>
            <Text style={styles.btnText}>{btnText}</Text>
        </Pressable>
    </View>
}

export default Button;