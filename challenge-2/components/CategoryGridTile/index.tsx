// this component represents each white sqaure in the home page

import { View } from "react-native"
import styles from "./style"

type Props={
    title:string;
    color:string;
}

const CategoryGridTile = ({title, color}:Props) => {
    return(
        <View style={styles.gridItem}></View>
    )
}

export default CategoryGridTile