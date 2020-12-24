import React, { useEffect, useState } from 'react'
import {
    Alert,
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const Form = ({ moneda, criptomoneda, setMoneda, setCriptomoneda, setConsultarApi}) => {

    const [criptomonedas, setCriptomonedas] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            const response = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
            const json = await response.json();
            setCriptomonedas(json.Data)
        }
        consultarApi()
    }, []);

    const handleChangeMoneda = (moneda) => {
        setMoneda(moneda);
    }

    const handleChangeCripto = (cripto) => {
        setCriptomoneda(cripto);
    }

    const handleClickCotizar = () => {
        if (moneda.trim() === '' || criptomoneda.trim() === '') {
            showAlert();
            return;
        }
        setConsultarApi(true);
    }

    const showAlert = () => {
        Alert.alert('Error', 'Ambos campos son obligatorios', [{ text: 'Ok' }])
    }
    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={(monedaValue) => handleChangeMoneda(monedaValue)}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label='Seleccione:' value='' />
                <Picker.Item label='Dolar USD' value='USD' />
                <Picker.Item label='Peso Mexicano' value='MXN' />
                <Picker.Item label='Euro' value='GBP' />
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>

            <Picker
                selectedValue={criptomoneda}
                onValueChange={criptomonedaValue => handleChangeCripto(criptomonedaValue)}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label='Seleccione:' value='' />
                {
                    criptomonedas.map((criptomonedaElement, i) => (
                        <Picker.Item
                            key={criptomonedaElement.CoinInfo.Id}
                            label={criptomonedaElement.CoinInfo.FullName}
                            value={criptomonedaElement.CoinInfo.Name}
                        />
                    ))
                }
            </Picker>

            <View style={styles.contentBtn}>
                <TouchableHighlight
                    style={styles.cotizarBtn}
                    onPress={() => handleClickCotizar()}
                >
                    <Text
                        style={styles.textBtn}
                    >Cotizar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color:'#30475e',
        textTransform: 'uppercase',
        fontSize: 25,
        fontFamily: 'Lato-Black',
        marginVertical: 20
    },
    contentBtn: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cotizarBtn: {
        paddingVertical: 10,
        backgroundColor: '#f05454',
        borderRadius: 10,
        width: '50%',
    },
    textBtn: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: 'white',
        textAlign: 'center'
    }
});

