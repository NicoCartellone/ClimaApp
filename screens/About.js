import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Linking } from 'react-native'
import Container from '../components/Container'

const About = ({ navigation }) => {


    return (
        <Container>
            <ScrollView>
                <View style={styles.contenido}>
                    <View style={styles.containAcerca}>
                        <Text style={styles.titulo}>Acerca de nosotros:</Text>
                        <View>
                            <Text style={styles.texto}>ClimaApp corresponde al proyecto final del curso de
                                especialización en Desarrollo Mobile de Codo a Codo | IBM Skillsbuild.
                                La misma consiste en una App que sirve para armar/guardar una lista
                                de ciudades y poder consultar el clima actual de cada una de ellas.
                                Para llevarla a cabo se utilizó el Framework React Native el cual
                                permite desarrollar aplicaciones móviles tanto para Android como
                                para iOS.</Text>

                            <Text style={styles.texto}>Para realizar este trabajo, en principio, se emplearon las
                                herramientas proporcionadas tales como los cursos de Udemy y los
                                Webinarios dictados. En base a esto se comenzó a generar una primera
                                solución al problema planteado utilizando herramientas básicas que luego se
                                fueron mejorando. A partir de tutoriales y documentación de
                                internet pudimos alcanzar la versión final que estamos
                                presentando.</Text>
                        </View>
                    </View>
                    <View style={styles.containHerramientas}>
                        <Text style={styles.nombre}>Las herramientas de UX utilizadas fueron:</Text>

                        <Text style={styles.texto}>-Para el maquetado:</Text>

                        <Text style={{ color: 'blue', marginHorizontal: 20 }}
                            onPress={() => Linking.openURL('https://www.figma.com/file/TAs3qMuV4b3tYV8WAEhpe8/Clima-App?node-id=3%3A2')}>
                            Figma</Text>

                        <Text style={styles.texto}>-Para los iconos y figuras:</Text>

                        <Text style={{ color: 'blue', marginHorizontal: 20 }}
                            onPress={() => Linking.openURL('https://undraw.co/')}>
                            UnDraw</Text>

                        <Text style={styles.texto}>-Para las animaciones:</Text>

                        <Text style={{ color: 'blue', marginHorizontal: 20 }}
                            onPress={() => Linking.openURL('https://lottiefiles.com/')}>
                            LottieFiles</Text>

                        <Text style={styles.texto}>-Para consultar el clima:</Text>

                        <Text style={{ color: 'blue', marginHorizontal: 20 }}
                            onPress={() => Linking.openURL('https://openweathermap.org/')}>
                            OpenWeather</Text>
                    </View>

                    <View style={styles.containerPerfil}>

                        <Text style={styles.nombre}>Los integrantes del equipo son:</Text>

                        <View>
                            <Image
                                style={styles.perfil}
                                source={require('../assets/img/perfil1.jpg')}
                            />
                            <Text style={styles.nombre}>Ana Laura Carpinetti</Text>

                            <Text style={styles.descrip}>Docente. Licenciada en Ciencia y Tecnología de los Alimentos y
                                Profesora en Disciplinas Industriales. Egresada de Codo a Codo
                                curso Full Stack PHP. </Text>
                        </View>

                        <View>
                            <Image
                                style={styles.perfil}
                                source={require('../assets/img/perfil2.jpg')}
                            />
                            <Text style={styles.nombre}>Danny Deward Ramirez Molina</Text>

                            <Text style={styles.descrip}>Empleado Administrativo. Egresado de Codo a Codo curso Full
                                Stack PHP. Estudiante de Codo a Codo curso Full Stack Python.
                            </Text>
                        </View>

                        <View>
                            <Image
                                style={styles.perfil}
                                source={require('../assets/img/perfil3.jpg')}
                            />
                            <Text style={styles.nombre}>Leandro Leonardo</Text>

                            <Text style={styles.descrip}>Ingeniero Proyectista y Docente UBA. Ingeniero Mecánico y
                                Magister en Ingeniería Matemática. Egresado de Codo a Codo curso Full Stack Python.</Text>
                        </View>

                        <View>
                            <Image
                                style={styles.perfil}
                                source={require('../assets/img/perfil4.jpg')}
                            />
                            <Text style={styles.nombre}>Nicolás Cartellone</Text>

                            <Text style={styles.descrip}>Topógrafo. Estudiante de Programación. Egresado de Codo
                                a Codo curso Full Stack Python y Plan 111 Mil.</Text>
                        </View>


                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

export default About

const styles = StyleSheet.create({
    containHerramientas: {
        backgroundColor: "#fff",
        borderRadius: 15,
        marginVertical: "5%",
        padding: 15
    },
    containAcerca: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 10
    },
    container: {
        flex: 1,
        backgroundColor: "#51608F",
        marginBottom: '6%',

    },
    contenido: {
        flex: 1,
        marginTop: '5%',
        marginBottom: "15%",
        marginHorizontal: '5%',
        borderRadius: 10,
        paddingVertical: '3%'
    },
    perfil: {
        width: 100,
        height: 100,
        marginVertical: '5%',
        borderRadius: 100,
        marginHorizontal: "35%"

    },
    nombre: {
        marginTop: 3,
        fontSize: 17,
        color: 'black',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginHorizontal: '5%'
    },
    descrip: {
        textAlign: 'justify',
        fontSize: 15,
        marginHorizontal: '5%'
    },
    texto: {
        textAlign: 'justify',
        marginTop: 5,
        fontSize: 15,
        marginHorizontal: '5%'

    },
    titulo: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowRadius: 10,

    },
    containerPerfil: {
        alignItems: "center",
        backgroundColor: "#ffff",
        borderRadius: 15,
        padding: 10
    }
})
