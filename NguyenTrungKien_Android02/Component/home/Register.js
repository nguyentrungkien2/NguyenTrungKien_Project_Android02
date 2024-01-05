import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Register = () => {

        const navigation = useNavigation();
    
        const handleRegisterNow = () => {
            navigation.navigate('Login');
        };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                {/* <Image
                    source={require('../../assets/Register.jpg')}
                    style={styles.backgroundImage}
                /> */}
                <View style={styles.content}>
                    <Text style={styles.title}>Register</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="user" size={20} color="gray" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="User Name"
                            keyboardType="default"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="envelope" size={20} color="gray" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email Address"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={20} color="gray" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.textForgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRegister} onPress={handleRegisterNow}>
                <Text style={styles.buttonText}>Register Now</Text>
            </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonText}>Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    innerContainer: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 45,
        color: '#66CCFF',
        marginBottom: 20,
        marginTop: 70,
        alignSelf: 'flex-start',
        paddingLeft: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 20,
        width: '85%',
        paddingLeft: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#66CCFF',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        color: 'gray',
        backgroundColor: '#ffff',
        height: 70,
        flex: 1,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginRight: '15%',
        marginBottom: 10,
    },
    textForgot: {
        color: '#66CCFF',
        fontSize: 16,
    },
    buttonRegister: {
        backgroundColor: '#0099CC',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 3,
        marginTop: 30,
        shadowColor: '#66CCFF',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 1.5,
        shadowRadius: 500,
        elevation: 7,
    },
    buttonLogin: {
        marginTop: 20,
    },
    buttonText: {
        color: '#DDDDDD',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Register;