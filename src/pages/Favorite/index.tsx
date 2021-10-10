import React  from 'react';
import { View } from 'react-native';

import estilo from './styles';
import PageHeader from '../../components/PageHeader';

export default function Favorite(){
    return (
        <View style={estilo.container}>
            <PageHeader title="Meu proffys favoritos"/>
        </View>
    )
}