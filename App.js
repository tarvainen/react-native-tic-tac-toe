import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cell from './Cell';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Array(9).fill('')
    };
  }

  render() {
    const { board } = this.state;

    const rows = this.chunk(board, 3);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>TicTacToe</Text>

        <View style={styles.table}>
          {rows.map((r, i) =>
            <View style={styles.row} key={i}>
              {r.map((c, i) => <Cell onPress={() => console.log('TODO')} key={i} />)}
            </View>
          )}
        </View>
      </View>
    );
  }

  chunk(arr, len) {
    const chunks = [];
    let i = 0;
    let n = arr.length;

    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }

    return chunks;
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'monospace',
    fontSize: 42,
    marginBottom: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  table: {
    display: 'flex',
  }
});
