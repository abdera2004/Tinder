import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

export default function Welcome(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerlogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/logotinder.png')}
                    style={{width: 100, height: 100,}}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.titulo}>Bem-vindo!</Text>
                <Text style={styles.titulo2}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
         flex: 1,
         backgroundColor: '#FF66C4',
    },
    titulo:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    titulo2:{
        color: '#a1a1a1',
        textAlign: 'center',
    },
    containerlogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#FFE0B5',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#FF66C4',
        borderRadius: 50,
        paddingVertical: 8,
        width: '50%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})