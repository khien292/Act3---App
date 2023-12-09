import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/Button';


const AccountRecover = ({ navigation }) => {
    
    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                <View>
                    

                    <Image
                        source={require("../assets/hamloy.png")}
                        style={{
                            height: 300,
                            width: 300,
                            borderRadius: 20,
                            marginLeft: 20,

                        }}
                    />
                </View>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: COLORS.black,
                        textAlign: 'center',
                    }}>
                        Recover Account
                    </Text>
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
                        borderWidth: 2,
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
                        />
                    </View>
                </View>

                

                

                <Button
                    title="SEND RESET INSTRUCTIONS"
                    filled
                    onPress={() => navigation.navigate("Welcome")}
                    style={{
                        backgroundColor: 'black',
                        marginTop: 5,
                        marginBottom: 4,
                    }}
                />
                
                

                </View>
        </SafeAreaView>

    )
}

export default AccountRecover