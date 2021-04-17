import React from 'react';
import { ScrollView, View } from 'react-native';

import Topo from './componentes/Topo';
import Texto from './componentes/Texto';
import Cards from './componentes/Cards';

export default function App () { 
  return (
    <ScrollView>
      <Topo />
      <Texto />
      <Cards />
    </ScrollView>
      
  
  );
}