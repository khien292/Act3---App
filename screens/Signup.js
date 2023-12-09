import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import COLORS from '../constants/colors';
import axios from 'axios';

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setC_Password] = useState('');
  const [isError, setIsError] = useState(false);

  const showToast = (message = 'Something went wrong') => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleRegister = async () => {
    try {
      setLoading(true);

      if (name === '' || email === '' || password === '' || c_password === '') {
        showToast('Please input required data');
        setIsError(true);
        return;
      }

      if (password !== c_password) {
        showToast('Passwords do not match');
        setIsError(true);
        return;
      }

      const response = await axios.post('http://192.168.125.108:3000/api/register', {
        name,
        email,
        password,
        c_password,
      });

        if (response.data.success) {
            showToast('User registered successfully.');
            // Redirect to login page or perform other actions after successful registration
        } else {
            showToast('Registration failed.');
        }
        } catch (error) {
        showToast('Error during registration.');
        console.error('Error during registration:', error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Create Account
                    </Text>

                    
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Username</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1.5,
                        borderRadius: 20,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        
                        <TextInput
                            placeholder='Enter your Username'
                            placeholderTextColor={COLORS.black}
                            keyboardType='default'
                            style={{
                                width: "80%"
                            }}
                            mode="outlined"
                            value={name}
                            onChangeText={setName}
                            error={isError}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1.5,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            mode="outlined"
                            value={email}
                            onChangeText={setEmail}
                            error={isError}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1.5,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                            mode="outlined"
                            value={password}
                            onChangeText={setPassword}
                            error={isError}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>Confirm Password</Text>
                <View style={{
                    // Style for confirm password input container
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1.5,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22
                }}>
                    <TextInput
                        placeholder='Confirm password'
                        placeholderTextColor={COLORS.black}
                        secureTextEntry={isPasswordShown}
                        style={{
                            width: "100%"
                        }}
                        mode="outlined"
                        value={c_password}
                        onChangeText={setC_Password}
                        error={isError}
                    />
                    <TouchableOpacity
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                        style={{
                            position: "absolute",
                            right: 12
                        }}
                    >
                        {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }
                    </TouchableOpacity>
                </View>
            </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>I agree to the terms and conditions</Text>
                </View>

                <Button
                    title="Sign Up"
                    filled
                    onPress={handleRegister}
                    style={{
                        backgroundColor: 'black',
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    disabled={loading}
                    loading={loading}
                    mode="contained"
                    
                />
                <Button
                    title="Back"
                    filled
                    disabled={loading}
                    onPress={() => navigation.pop()}
                    icon="arrow-left"
                    mode="contained"
                    style={{ 
                        backgroundColor: 'black',
                        marginTop: 10 }}
                    >
                </Button>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.blue,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default Signup