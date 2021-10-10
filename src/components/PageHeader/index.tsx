import React, {Component} from 'react';
import { View, Image, Text} from 'react-native';

import estilo from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {

    const {navigate} = useNavigation();

    function goBackPage(){
        navigate('Landing');
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.topBar}>
                <BorderlessButton onPress={goBackPage}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logImg} resizeMode="contain" />
            </View>

            <Text style={estilo.title}>{title}</Text>
        </View>
    )
}

export default PageHeader;
