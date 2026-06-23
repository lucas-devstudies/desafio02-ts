import { Box, Center, Input } from "@chakra-ui/react"
import { CustomButton } from "./Button/button"
import { login } from "../services/login"

export const Card = () => {
  return(
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
      <CustomButton text="Entrar" onClick={login}></CustomButton>
      </Center>
    </Box>
  )
}