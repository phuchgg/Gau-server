import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Header, Button, Input} from 'react-native-elements'
import styled from 'styled-components'; 
import { Heading, Page } from './components/index';
import { getToken, sendPushNotification } from './services/api';

const token = "ExponentPushToken[tD60ORKQ4wqyoGsZ2uuiMs]"

const ButtonContainer = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
`

const SummonButton = styled(TouchableOpacity)<{color?: string}>`
    backgroundColor: ${p => p.color || 'red'};
    flex: 48% 0 0;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    color: white;
`

const SummonButtonText = styled(Text)`
    color: white;
    font-size: 18px;
`


const GirlScreen: React.FC = () => {

    const [token, setToken] = React.useState<Token | undefined>()
    const [tokenInput, setTokenInput] = React.useState('')
    return(
        <SafeAreaView>
            <Header centerComponent={{text: "cho bạn nữ", style:{color: "#fff"}} }/>
            <Page>
                {token ? (<View>
                    <Heading>Mã số của gấu đực là {token.id}</Heading>
                    <Heading>Có thể triệu hồi gấu</Heading>
                </View>) : (<View>
                    <Input value={tokenInput} onChangeText={setTokenInput} label="Mã số gấu" placeholder="Nhập mã số gấu đực vào đây!"/>
                    <Button title="Xác nhận mã số" onPress ={async () => {
                        const storedToken = await getToken(tokenInput)
                        setToken(storedToken);
                    }} />
                </View>) }
                
                {token && 
                <View style={{marginTop: 30}}>
                <Heading>Triệu hồi gấu đực</Heading>
                <ButtonContainer>
                    <SummonButton color="#e74c3c" onPress={() => sendPushNotification(token.token, 'Im so hungry bro', 'Take me somewhere to eat')}>
                        <SummonButtonText>I'm hungry</SummonButtonText>
                    </SummonButton>
                    <SummonButton color="#2980b9"onPress={() => sendPushNotification(token.token, 'Milk tea please', 'Buy me a milk tea')}>
                        <SummonButtonText>Milk tea please</SummonButtonText>
                    </SummonButton>
                    <SummonButton color="#2ecc71"onPress={() => sendPushNotification(token.token, 'Missing you', 'I\'m missing you so much')}>
                        <SummonButtonText>Missing you</SummonButtonText>
                    </SummonButton>
                    <SummonButton color="#f1c40f"onPress={() => sendPushNotification(token.token, 'Call me now', 'I need to talk to you right now')}>
                        <SummonButtonText>Call me maybe</SummonButtonText>
                    </SummonButton>
                    
                </ButtonContainer>
                </View>}
                
            </Page>
        </SafeAreaView>
    )
}

export default GirlScreen;