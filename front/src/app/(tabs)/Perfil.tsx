import { StyleSheet, View, Text} from 'react-native';

export default function Perfil() {
    return(

        <View style={styles.container}>
            <Text style={styles.fonte}> PERFIL {'\n'} (Login + Cadastro + Perfil) </Text>
        </View>
        
    )    
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#ffd000',
    alignItems: 'center',
    justifyContent: 'center',
},

fonte: {
    fontSize: 18,
},

});