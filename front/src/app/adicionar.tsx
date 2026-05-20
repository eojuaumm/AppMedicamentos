import { StyleSheet, View, Text} from 'react-native';
import { router } from 'expo-router';
import Button from '../components/Button';

export default function Adicionar() {
    return(

        <View style={styles.container}>
            <Text style={styles.fonte}> PLACEHOLDER DA TELA DE ADD! {'\n'} (LOCAL PRA CRIAR OS LEMBRETES DE ALARME) </Text>

             <View style={styles.botao}>
                <Button 
                titulo="Salvar"
                onPress={() => null} 
                />
            </View>
        </View>
        
    )    
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
},

fonte: {
    fontSize: 16,
},

botao: {
    position: 'absolute',
    backgroundColor: '#9DD7E2',
    borderRadius: 30,
    bottom: 30,  
    left: 10,   
    right: 0,
    width: '95%', 
  },

});