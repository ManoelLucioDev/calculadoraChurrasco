import React from 'react';
import { Image, Text, TextInput, View, Button } from 'react-native';

import convidado from '../../assets/convidado.png';
import carne from '../../assets/carne.png';
import refrigerante from '../../assets/refrigerante.png';




import estilo from './estilo';
import { useState } from 'react';




export default function Cards () {


  const [convidados, setConvidados] = useState(0);
  const [consumoCarne, setConsumoCarne] = useState(0);
  const [consumoBebida, setConsumoBebida] = useState(0);
  
  
  const Total  = () => {
    const qntBebida = 1000;
    const qntCarne = 400;
    const totalCarne = convidados * qntCarne;
    const totalBebida = convidados * qntBebida;

    if(totalCarne >= 1000){
       const totalCarneKg = totalCarne / 1000;
       setConsumoCarne(totalCarneKg + " Kg");
    } else {
      setConsumoCarne(totalCarne + " g");
    }

    if(totalBebida >= 1000){
      const totalBebidaLt = totalBebida / 1000;
      setConsumoBebida(totalBebidaLt + " L");
   } else {
     setConsumoBedida(totalBebida + " ml");
    }
}

   
  return (
    <View style={estilo.boxDados}>
      
      <View style={estilo.boxCard} >
        <Image style={estilo.boxCardIcone} source={convidado} />

        <Text style={estilo.boxCardTexto}>Convidados</Text>

        <TextInput
              textAlign="center"
              onChangeText={ setConvidados }
              keyboardType="number-pad"
              
              value={convidados}
              autoFocus={true}
              maxLength={3}
              style = { estilo.input } />
      </View>

      <View style={estilo.boxCard} >
        <Image style={estilo.boxCardIcone} source={carne} />

        <Text style={estilo.boxCardTexto}>Carne</Text>

        <Text style={estilo.boxCardValor}>{ consumoCarne }</Text>
      </View>

      <View style={estilo.boxCard}>
        <Image style={estilo.boxCardIcone} source={refrigerante} />

        <Text style={estilo.boxCardTexto}>Bebida</Text>

        <Text style={estilo.boxCardValor}>{consumoBebida}</Text>
      </View>

      <View style={estilo.boxBotao}>
              <Button title="Calcular" onPress={Total}  color="#a0df52"/>
            </View>
    </View>
  );
}
