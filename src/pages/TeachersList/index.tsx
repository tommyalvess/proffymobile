import React, {Component} from 'react';

import { View } from 'react-native';
import estilo from './styles';
import PageHeader from '../../components/PageHeader';

export default function TeacherList(){
    return (
        <View style={estilo.container}>
            <PageHeader title="Proffys disponíves"/>
        </View>
    )
}