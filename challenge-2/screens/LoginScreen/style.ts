import {Colors} from '../../constants/styles'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background
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
        marginBottom:100
    },
    inputsView:{
        flex: 2,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
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
    },
    errorText:{
        textAlign:'left',
        alignSelf: "stretch",
        color:Colors.warning,
        fontSize: 12,
        marginBottom:28
    }
});

export default styles;