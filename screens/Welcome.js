import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
            
            <View style={{ flex: 1 }}>
                <View>
                    

                    <Image
                        source={require("../assets/hamloy.png")}
                        style={{
                            height: 300,
                            width: 300,
                            borderRadius: 20,
                            position: "absolute",
                            top: 80,
                            left: 30,

                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 350,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.black,
                        marginLeft: 40,
                
                    }}
                    >Welcome to HamloyApp</Text>
                    

                    <Button
                        title="Sign Up"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.blue,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>

    )
}

export default Welcome