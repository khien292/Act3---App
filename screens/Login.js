import { View, Text, Pressable, TextInput, TouchableOpacity, ToastAndroid} from 'react-native'
import { HelperText } from 'react-native-paper';
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);

    const showToast = (message ="Something went wrong") => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };
    
    const handleLogin = async (values, { setSubmitting }) => {
        try {
            const url = "http://192.168.125.108:3000/api/login";
            const response = await axios.post(url, values);

            if (response.data.success) {
                showToast('User logged in successfully.');
                // Redirect to home or perform other actions after successful login
                navigation.navigate("Home");
            } else {
                showToast('Login failed.');
            }
        } catch (error) {
            showToast('Error during login.');
            console.error('Error during login:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid Email")
            .required("Please enter your email"),
        password: Yup.string().required("Please enter your password"),
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    
                <View style={{ flex: 1, marginHorizontal: 22 }}>
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 40,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: COLORS.black,
                            textAlign: 'center',
                        }}>
                            HI WELCOME TO HAMLOY APP
                        </Text>
                    </View>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={async (values, { setSubmitting }) => {
                            await handleLogin(values, { setSubmitting });
                        }}
                        validationSchema={validationSchema}
                    >
                        {({
                            values,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            errors,
                            touched,
                        }) => (
                            <View>
                                <View style={{ marginBottom: 12 }}>
                                    {/* Email Input */}
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: 400,
                                        marginVertical: 8
                                    }}>Email address</Text>
                                    <View style={{
                                        width: "100%",
                                        height: 48,
                                        borderColor: COLORS.black,
                                        borderWidth: 2,
                                        borderRadius: 20,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        paddingLeft: 22
                                    }}>
                                        <TextInput
                                            mode="outlined"
                                            value={values.email}
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            error={errors.email && touched.email}
                                            placeholder='Enter your email address'
                                            placeholderTextColor={COLORS.black}
                                            keyboardType='email-address'
                                            style={{
                                                width: "100%"
                                            }}
                                        />
                                        {errors.email && touched.email && (
                                            <HelperText type="error" visible={errors.email}>
                                                {errors.email}
                                            </HelperText>
                                        )}
                                    </View>
                                </View>

                                <View style={{ marginBottom: 12 }}>
                                    {/* Password Input */}
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: 400,
                                        marginVertical: 8
                                    }}>Password</Text>
                                    <View style={{
                                        width: "100%",
                                        height: 48,
                                        borderColor: COLORS.black,
                                        borderWidth: 2,
                                        borderRadius: 20,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        paddingLeft: 22
                                    }}>
                                        <TextInput
                                            mode="outlined"
                                            value={values.password}
                                            onChangeText={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                            error={errors.password && touched.password}
                                            placeholder='Enter your password'
                                            placeholderTextColor={COLORS.black}
                                            secureTextEntry={!isPasswordShown}
                                            style={{
                                                width: "100%"
                                            }}
                                        />
                                        {errors.password && touched.password && (
                                            <HelperText type="error" visible={errors.password}>
                                                {errors.password}
                                            </HelperText>
                                        )}
                                        <TouchableOpacity
                                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                                            style={{
                                                position: "absolute",
                                                right: 12
                                            }}
                                        >
                                            <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={COLORS.black} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Remember Me Checkbox */}
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
                                    <Text>Remember Me</Text>
                                </View>

                                {/* Login Button */}
                                <Button
                                    title="Login"
                                    filled
                                    onPress={handleSubmit}
                                    style={{
                                        backgroundColor: 'black',
                                        marginTop: 18,
                                        marginBottom: 4,
                                    }}
                                    loading={isSubmitting}
                                    disabled={isSubmitting}
                                    mode="contained"
                                />

                                {/* Back Button */}
                                <Button
                                    title="Back"
                                    filled
                                    onPress={() => navigation.pop()}
                                    icon="arrow-left"
                                    mode="contained"
                                    style={{ 
                                        backgroundColor: 'black',
                                        marginTop: 10 }}
                                />

                                {/* Forgot Password */}
                                <Pressable
                                    onPress={() => navigation.navigate("AccountRecover")}
                                >
                                    <Text style={{
                                        fontSize: 16,
                                        color: COLORS.blue,
                                        fontWeight: "bold",
                                        marginTop: 15,
                                        marginLeft: 4,
                                        textAlign: 'center',
                                    }}>Forgot Your Password?</Text>
                                </Pressable>

                                {/* Register Section */}
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginVertical: 22
                                }}>
                                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account ? </Text>
                                    <Pressable
                                        onPress={() => navigation.navigate("Signup")}
                                    >
                                        <Text style={{
                                            fontSize: 16,
                                            color: COLORS.blue,
                                            fontWeight: "bold",
                                            marginLeft: 6
                                        }}>Register</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
        </SafeAreaView>
    );
}

export default Login
