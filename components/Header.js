import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Platform
  } from 'react-native';
export const Header = () => (
        <Text style={styles.header}>Criptomonedas</Text>
        
    );

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
        paddingBottom: 10,
        fontFamily: 'Lato-Black',
        fontSize: 20,
        backgroundColor: '#222831',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 30
        
    }
})

