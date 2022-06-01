import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, Pressable } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const SignIn = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/signin.jpg')}
                style={styles.image}
            />
            <Text style={styles.headline}>
                Never forget your notes
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                />
            </View>

            <Button title="Login" customStyles={{ alignSelf: 'center', marginTop: 40 }} />

            <View style={styles.bottomContent}>


                <Pressable onPress={() => { navigation.navigate('Signup') }}>
                    <Text>Don't have an account? <Text style={{ color: 'green', fontWeight: 'bold' }}>Sign up</Text></Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        alignSelf: 'center',
        width: "100%",
        height: "50%"
    },
    headline: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginTop: 5,
    },
    inputContainer: {
        paddingHorizontal: 16,
        marginVertical: 25
    },
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20
    }
})
