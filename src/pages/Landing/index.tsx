import React  from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';


import estilos from './styles';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'


//Não esqueça de criar @types nos projetus futuros com typescript e png
import landingImg from '../../assets/images/landing.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Landing(){

    const { navigate } = useNavigation();

    function goToClassesPage(){
        navigate('GiveClasses');
    }

    function goToStudyPages(){
        navigate('Study');
    }

    return (
        <View style={estilos.container}>
            <Image source={landingImg} style={estilos.banner}/>

            <Text style={estilos.title}>
                Seja bem-vindo, {'\n'}
                <Text style={estilos.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={estilos.btnContainer}>
                <RectButton onPress={goToStudyPages} style={[estilos.btn, estilos.btnPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={estilos.btnText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={goToClassesPage} style={[estilos.btn, estilos.btnSecondary]}>
                    <Image source={giveClassIcon}/>
                    <Text style={estilos.btnText}>Dar aulas</Text>
                </RectButton>
            </View>
        
            <Text style={estilos.totalConnection}>
                Total de 285 conexões ja realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;