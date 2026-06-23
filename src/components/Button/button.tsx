import { Button } from "@chakra-ui/react";

interface props{
    text:string;
    onClick: () => void;
}

export const CustomButton = (props: props) =>{
    return(
        <Button onClick={props.onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            {props.text}
        </Button>
    )
}