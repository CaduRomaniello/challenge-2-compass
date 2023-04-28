import {Colors} from '../../constants/styles'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: Colors.background
    },
    topText:{
        color:Colors.primary,
        fontSize:20,
    },
    textContainer:{
        marginBottom:20,
        marginTop:50,
        marginLeft:20
    },
    flatlist:{
    }
});

export default styles;