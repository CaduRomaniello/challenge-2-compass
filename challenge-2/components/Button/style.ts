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
        // justifyContent: 'flex-start',
        flexDirection:'row',
        // alignItems:'center',
        paddingTop:19,
        paddingBottom: 19,
        width:'80%',
        // marginBottom:32
    },
    btnText:{
        color:"white",
        flex:1,
        fontSize:16,
        textAlign:'center'
    }
})

export default styles;