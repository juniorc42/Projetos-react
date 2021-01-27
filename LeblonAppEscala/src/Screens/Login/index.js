import React, {useState} from 'react'; 
// import {Text, Alert} from 'react-native'; 
import { StackActions, NavigationActions } from 'react-navigation'; 
import { ContainerView, LogoArea, ImageArea, InputArea } from './style'; 
import BusLogo from '../../Assets/images/BusStop2.svg'; 
import LoginLogo from '../../Assets/images/loginLogo2.svg'; 
import InputId from '../../Components/InputId';
import InputPass from '../../Components/InputPass'; 
import Button from '../../Components/Button'; 


const Login = ( props ) => {

    const [id, setId] = useState(''); 
    const [passWord, setPassWord] = useState('');  
    const [isAuthenticated, setIsAuthenticated] = useState(''); 
    const handleLogin = () => {
       if(id != '' && passWord != ''){
        
        if(id === '22383' && passWord === '141019'){
               
            const resetAction = StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'HomeTab'})
                ]
            })
            props.navigation.dispatch(resetAction);

           } else {
            
           console.log('errou')

           }

       } else {
           
        console.log('errou')

       }; 
    }; 

    return(
       <ContainerView>
            <LogoArea>
                <LoginLogo/>
            </LogoArea>
            <InputArea>
                <InputId
                    value={id}
                    onChangeText={(t)=>{setId(t)}}
                />
                <InputPass
                    value={passWord}
                    onChangeText={(t)=>{setPassWord(t)}}
                />
                <Button
                    value="Login"
                    color="#003366"
                    textColor="#fff"
                    onPress={handleLogin}
                />
            </InputArea>
            <ImageArea>
                 <BusLogo style={{zIndex:-1}}/>
            </ImageArea> 
       </ContainerView>     
    ); 
}; 

export default Login; 


 