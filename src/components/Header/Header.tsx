import { Flex, Text } from '@chakra-ui/react'

export const Header = () => {
  return(
    <Flex className='header' width='100%' alignItems='center' justifyContent='center' height='80px' bgColor='#319795'>
      <Text fontWeight='bold' color='#fefefe' fontSize={'1.5rem'}>Dio Bank</Text>
    </Flex>
  )
}
