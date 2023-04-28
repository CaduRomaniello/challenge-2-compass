import {Colors} from '../../constants/styles'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        backgroundColor: Colors.input,
        justifyContent: 'flex-start',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:19,
        paddingBottom: 19,
        paddingLeft:22,
        width:'80%',
        marginBottom:32
    },
    containerError: {
        borderRadius: 25,
        backgroundColor: Colors.input,
        justifyContent: 'flex-start',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:19,
        paddingBottom: 19,
        paddingLeft:22,
        width:'80%',
        marginBottom:32,
        borderWidth:1,
        borderColor:'red'
    },
    input: {
        color:Colors.primary,
        flex:1,
        fontSize:20
    },
    img:{
        marginRight:10
    }
});

export default styles;