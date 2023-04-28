import {Colors} from '../../constants/styles'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius:25,
        marginBottom:32,
        overflow:'hidden'
    },
    innerContainer: {
        borderRadius: 25,
        backgroundColor: Colors.primary,
        flexDirection:'row',
        paddingTop:19,
        paddingBottom: 19,
        width:'80%',
    },
    btnText:{
        color:"white",
        flex:1,
        fontSize:16,
        textAlign:'center'
    }
})

export default styles;