import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40
    },
    banner: {
        width: '100%',
        resizeMode: 'contain' // garantindo que não fique distorcido
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },
    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    btn: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    btnPrimary: {
        backgroundColor: '#9871f5'
    },
    btnSecondary: {
        backgroundColor: '#04d361'
    },
    btnText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20
    },
    totalConnection: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    },
});

export default estilo;