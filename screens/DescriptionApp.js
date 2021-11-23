import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import slides from '../slides'
import MainTab from '../navigation/MainTab'

const DescriptionApp = () => {

    const [showRealApp, setShowRealApp] = useState(false)

    const onDone = () => {
        setShowRealApp(true)
    }

    const onSkip = () => {
        setShowRealApp(true)
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.Onboarding}>
                <StatusBar
                    animated={true}
                    backgroundColor="#51608F"
                    barStyle="light-content"
                />
                <Text style={styles.introTitle}>
                    {item.title}
                </Text>
                <Image
                    style={styles.introImage}
                    source={item.image}
                />
                <Text style={styles.introDescrition}>
                    {item.description}
                </Text>
            </View>
        )
    }

    return (
        <>
            {
                showRealApp ? (
                    <>
                        <StatusBar
                            animated={true}
                            backgroundColor="#51608F"
                            barStyle="light-content"
                        />
                        <MainTab />
                    </>
                ) : (
                    <AppIntroSlider
                        data={slides}
                        renderItem={renderItem}
                        onDone={onDone}
                        onSkip={onSkip}
                        showSkipButton={true}
                        showPrevButton
                        doneLabel="Empezar"
                        nextLabel="Siguente"
                        skipLabel="Omitir"
                        prevLabel="Atras"
                        activeDotStyle={{
                            width: 20,
                            backgroundColor: "#EDF2F4"
                        }}
                    />
                )
            }
        </>
    )
}

export default DescriptionApp

const styles = StyleSheet.create({
    Onboarding: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: 100,
        backgroundColor: "#51608F"
    },
    introImage: {
        width: 200,
        height: 200
    },
    introDescrition: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    introTitle: {
        fontSize: 25,
        color: "white",
        textAlign: "center",
        marginBottom: 16,
        fontWeight: "bold"
    }
})