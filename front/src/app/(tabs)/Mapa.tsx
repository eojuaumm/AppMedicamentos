import { StyleSheet, View, Text} from 'react-native';

export default function Mapa() {
    return(
        <View style={styles.container}>
            <Text style={styles.fonte}> MAPA {'\n'} (Localizador de Farmacias) </Text>
        </View>
    )    
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#003cff',
    alignItems: 'center',
    justifyContent: 'center',
},

fonte: {
    fontSize: 18,
},

});