import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { Button, Heading, VStack, Box, Divider } from '@chakra-ui/react'

function Main() {
    const [adv, setAdv] = useState([])
    const [newAdv, setNewAdv] = useState(false)

    useEffect(() => {
        api
        .get('/')
        .then((response) => setAdv(response.data))
        .catch((err) => {
        console.error('Opa, deu algo errado ' + err)
        alert('Opa, algo deu errado! ' + err)
        })
       
    },[newAdv])

  return (
    <VStack border='1px, solid' fontSize='20px'>    
     <Heading>Advice: </Heading>
     <Divider maxW={'960px'}></Divider>
      <Box>
        <Heading>{adv.value}</Heading>
      </Box>  
      <Box>
        <Button onClick={setNewAdv} bg='blue.400'>New Advice</Button>
      </Box>   
    </VStack>
  )
}

export default Main