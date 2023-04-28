// Button component

import { View, Text, Pressable } from 'react-native'
import styles from './style'

type Props = {
    btnText:string;    // text that will be displayed in the button
    func1?:Function;   // auxiliar funtion to handle useState of inputs and checkbox
    func2?:Function;   // auxiliar funtion to handle useState of inputs and checkbox
    func3?:Function;   // auxiliar funtion to handle useState of inputs and checkbox
    func4?:Function;   // auxiliar funtion to handle useState of inputs and checkbox
    goToFunc?:Function // function to do the navigation
};

const Button = ({btnText, func1, func2, func3, func4, goToFunc}:Props) => {
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

        if (goToFunc){
            goToFunc()
        }
    }

    return <View style={styles.outerContainer}>
        <Pressable style={styles.innerContainer} onPress={onPress} android_ripple={{color: '#96642a'}}>
            <Text style={styles.btnText}>{btnText}</Text>
        </Pressable>
    </View>
}

export default Button;