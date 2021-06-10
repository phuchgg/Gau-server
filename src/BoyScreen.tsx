import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Heading, Page } from './components';
import * as Notifications from 'expo-notifications';
import { submitToken } from './services/api';

async function getNotificationToken(){
    const {status} = await Notifications.getPermissionsAsync()
    if (status !== 'granted'){
        const {status} = await Notifications.requestPermissionsAsync();
        if(status !== 'granted'){
            alert('Failed to get push token for notification!')
            return;
        }
    }

    const tokenData = await Notifications.getExpoPushTokenAsync();
    const token = tokenData.data;
    console.log(token);
    return token;
}


const BoyScreen: React.FC = () => {
    const [token, setToken] = React.useState<Token | undefined>()

    return(
        <SafeAreaView>
                <Header centerComponent={{text: 'Cho bạn nam', style:{color:'#fff'}}}/>
            <Page>
                <Heading>{token? `Mã số của bạn là ${token.id}.` : "Nhấn vào đây để nhập"}</Heading>
                <Button title="Bấm để lấy mã số" onPress={async () => {
                    const token = await getNotificationToken()
                        if (token){
                            const storedToken = await submitToken(token)
                        }
                    }
                }></Button>
            </Page>
        </SafeAreaView>
    )
}

export default BoyScreen;