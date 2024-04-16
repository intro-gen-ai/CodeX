import {Box, Button, Container, FormControl, FormHelperText, FormLabel, Image, Input} from "@chakra-ui/react";
import {submitKey} from "../hooks/submitKey";
interface KeyPageProps {
    checkKey: () => Promise<void>
}

export default function KeyPage(props: KeyPageProps) {
    return(
        <Container alignItems={'center'}>
            <Box maxW={'240px'} marginTop={'40px'}>
                <Image src={'../images/500.png'}/>
                    <Box>
                    <FormControl isRequired mb={'20px'}>
                        <FormLabel textColor={'white'}>OpenAI API Key</FormLabel>
                        <Input id={'key'} type={'text'} textColor={'whiteAlpha.900'}/>
                        <FormHelperText textColor={'whiteAlpha.900'}>Please input your OpenAI API key here.</FormHelperText>
                    </FormControl>
                    <Button
                        onClick={()=>{
                            submitKey();
                            props.checkKey();
                        }}
                            id={'submit_button'}
                            bg={'#561496'}
                            textColor={'whiteAlpha.900'}>Submit</Button>
                </Box>
            </Box>
        </Container>
    )
}
