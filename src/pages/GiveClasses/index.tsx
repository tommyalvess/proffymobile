import React  from 'react';
import { View, ImageBackground, Text } from 'react-native';

import estilo from './styles';
import giveClassesBgImg from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function GiveClasses(){

    const {goBack} = useNavigation();

    function goBackPage() {
        goBack();
    }

    return (
        <View style={estilo.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesBgImg}
                style={estilo.content}>

                <Text style={estilo.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={estilo.description}>
                    Para começar, você precisa
                    se cadastrar como professor
                    na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={goBackPage} style={estilo.okBtn}>
                <Text style={estilo.okBtnText}>
                    Tudo bem
                </Text>
            </RectButton>
        </View>
    )
}
