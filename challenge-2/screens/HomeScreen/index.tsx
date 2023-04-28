// Home Screen

import { View, Text, FlatList, SafeAreaView} from 'react-native'
import CategoryGridTile from '../../components/CategoryGridTile';
import styles from './style'

const data = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}, {key: '6'}, {key: '7'}, {key: '8'}, {key: '9'}, {key: '10'}, {key: '11'}, {key: '12'}, {key: '13'}, {key: '14'}]; // auxiliar variable to create each tile in the home page

function HomeScreen(){
    return(
        <View style={styles.mainContainer}>
            <SafeAreaView>
                <View style={styles.textContainer}>
                    <Text style={styles.topText}>HOME</Text>
                </View>
                <FlatList
                    data = {data}
                    renderItem={({ item }) => <CategoryGridTile title={item.key} color={'white'} />}
                    numColumns={2}
                    style={styles.flatlist}
                />
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen;