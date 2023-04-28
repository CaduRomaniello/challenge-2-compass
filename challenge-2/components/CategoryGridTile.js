import { View, Text, StyleSheet } from "react-native"

function CategoryGridTile({title, color}){
    return(
        <View style={styles.gridItem}>
            {/* <Text style={styles.textItem}>{title}</Text> */}
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        backgroundColor: 'white',
        flex: 1,
        margin: 20,
        height:150,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center"
    },
    textItem:{
        textAlign:"center"
    }
});