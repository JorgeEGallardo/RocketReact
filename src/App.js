import "./App.css";
import Form from "./components/Form";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Form title="Título del formulario"></Form>
      </div>
    </ApolloProvider>
  );
}

export default App;
