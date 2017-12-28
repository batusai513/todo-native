import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Todo, { getHola } from "./components/Todo";
import { getTodos } from "./api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    getTodos().then(response => {
      this.setState({
        todos: response.data
      });
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {todos.map(todo => (
            <Todo key={todo.id} name={todo.title} completed={todo.completed} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
