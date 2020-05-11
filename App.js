import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nomeLivro: '',
      numPag: 0,
      numPos: 0,
      resu: null,
    }
    
    this.calcula = this.calcula.bind(this);
  }
  
  calcula(){
    const total = this.state.numPos / this.state.numPag;
    const pagTotal = this.state.numPag / 7;
    const pegaTudo = pagTotal * total;

    this.setState({
      resu: pegaTudo.toFixed(0)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Digite o nome do livro'
          onChangeText={
            (valor)=> this.setState({nomeLivro: valor})
          }
        />
        
        <TextInput
          placeholder='Digite o número de páginas do livro'
          onChangeText={
            (valor)=> this.setState({numPag: valor})
          }
        />

        <TextInput
          placeholder='Digite o número de posições do livro'
          onChangeText={
            (valor)=> this.setState({numPos: valor})
          }
        />

        <Button
          title='Calular'
          onPress={this.calcula}
        />

        <View>
          <Text>O total de posições para ler por dia é: {this.state.resu}</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  
});
