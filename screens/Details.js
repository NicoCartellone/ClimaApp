import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Details = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('MainTab')}
                style={styles.goBackIcon}
            >
                <MaterialCommunityIcons name="arrow-left" color={"#EDF2F4"} size={26}></MaterialCommunityIcons>
            </TouchableOpacity>

        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#51608F"
    },
    goBackIcon: {
        display: "flex",
        position: "absolute",
        top: 10,
        left: 10
    }
})
