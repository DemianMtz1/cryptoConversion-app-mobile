import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export const Cotizacion = ({ cotizacion }) => {
    if (Object.keys(cotizacion).length === 0) {
        return null;
    }
    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{cotizacion.PRICE}</Text>
            </Text>

            <Text style={styles.texto}>Precio más alto del dia: {' '}
                <Text style={styles.span}>{cotizacion.HIGHDAY}</Text>
            </Text>

            <Text style={styles.texto}>Precio más bajo del dia: {' '}
                <Text style={styles.span}>{cotizacion.LOWDAY}</Text>
            </Text>

            <Text style={styles.texto}>Variacion ultimas 24 horas: {' '}
                <Text style={styles.span}>{cotizacion.PRICE}</Text>
            </Text>

            <Text style={styles.texto}>Ultima Actualizacion: {' '}
                <Text style={styles.span}>{cotizacion.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#222831',
    },
    texto: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        marginBottom: 10
    },
    precio: {
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black'
    }
});

