import { 
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Card } from './components/Card';

function App() {
  return (

    <ChakraProvider>
      <Header></Header>
      <Box minHeight='100vh' backgroundColor='#fefefe' padding='25px'>
        <Card></Card>
      </Box>
    </ChakraProvider>  
  );
}

export default App;
