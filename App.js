import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { Cotizacion } from './components/Cotizacion';
import { Form } from './components/Form';
import { Header } from './components/Header';

const App: () => React$Node = () => {


  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [consultarApi, setConsultarApi] = useState(false);
  const [cotizacion, setCotizacion] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizacion = async () => {

      if (consultarApi) {

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url);
        const json = await respuesta.json();
        setLoading(true);

        setTimeout(() => {
          setCotizacion(json.DISPLAY[criptomoneda][moneda]);
          setConsultarApi(false);
          setLoading(false);
        }, 3000)

      }

    }
    cotizacion();
  }, [consultarApi]);

  const cargaSpinner = loading ? <ActivityIndicator size='large' color='#222831' /> : <Cotizacion cotizacion={cotizacion} />

  return (
    <ScrollView>
      <Header />

      <Image
        style={styles.cryptoImage}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.content}>
        <Form
          moneda={moneda}
          setMoneda={setMoneda}
          criptomoneda={criptomoneda}
          setCriptomoneda={setCriptomoneda}
          setConsultarApi={setConsultarApi}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        {cargaSpinner}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cryptoImage: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  content: {
    marginHorizontal: '2.5%'
  }
});

export default App;
