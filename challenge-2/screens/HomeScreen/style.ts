import {Colors} from '../../constants/styles'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        width:'95%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    topText:{
        color:Colors.primary,
        fontSize:20,
    },
    textContainer:{
        marginBottom:20,
    },
    flatlist:{
    }
});

export default styles;