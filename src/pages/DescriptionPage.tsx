import {
    Avatar,
    Box,
    Button,
    Container, Flex,
    Heading,
    Text
} from "@chakra-ui/react";
import {changeKey} from "../hooks/changeKey";

interface DescriptionPageProps {
    checkKey: () => Promise<void>
}

export default function DescriptionPage(props: DescriptionPageProps) {
    return(
        <Container alignItems={'center'}>
            <Box maxW={'240px'} marginTop={'40px'}>
                <Flex mb={'20px'} alignItems={'center'}>
                    <Avatar src={'../images/144.png'}/>
                    <Heading textColor={'white'}>CodeTracer</Heading>
                </Flex>
                <Text bg={'whiteAlpha.300'}
                      p={'5px'}
                      textColor={'white'}
                      fontSize={'medium'}
                      rounded={'md'}
                      mb={'20px'}
                      minHeight={'250px'}>
                    <p id={'select-code'}>Select a block of code to see its description.</p>
                    <p id={'description'}></p>
                </Text>
                <Button
                    onClick={()=>{
                        changeKey();
                        props.checkKey();
                    }}
                    type={'reset'}
                    bg={'orange.500'}
                    textColor={'whiteAlpha.900'}
                    mb={'20px'}
                    minW={'240px'}>
                    Change key
                </Button>
            </Box>
        </Container>
    )
}