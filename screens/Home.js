import React, {useState} from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
import { TextInput } from 'react-native-paper'


const Home = ({ navigation }) => {

    //Defino el estate de las ciudades:
    const [ciudades, setCiudades] = useState([
        { id:'1', ciudad: "Buenos Aires", temperatura: "15" },
        { id:'2', ciudad: "Mendoza", temperatura: "20"},
        { id:'3', ciudad: "Santiago del Estero", temperatura: "20"},
    ])

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#51608F"
                barStyle="light-content"
            />

            <View style={styles.barraBusqueda}>
                <TextInput style={styles.textoBusqueda} placeholder='Busca entre tus ciudades' />
            </View>
      
            <View>
                <FlatList
                    data={ciudades}
                    renderItem={ ({item}) => (
                    <View style={styles.elementos}>
                        <Text style={styles.textoElementos}>{item.ciudad}  </Text>
                    </View>   
                    )}
                    keyExtractor= {ciudades => ciudades.id}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#51608F"
    },
    barraBusqueda: {
        backgroundColor: 'white',
        height: 40,
        width: 250,
        marginTop: 150,
        marginBottom: 40,
        marginHorizontal: 0,
        borderRadius:20,
        justifyContent: 'center',
    },
    textoBusqueda: {
        textAlign: 'center',
    },
    elementos: {
        backgroundColor: 'white',
        height: 50,
        marginTop: 30,
        width: 300,
        marginHorizontal: 30,
        borderRadius:20,
        justifyContent: 'center',
    },
    textoElementos: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});