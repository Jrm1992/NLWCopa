import { Center, Text } from "native-base";
import { GoogleLogo } from "phosphor-react-native";

import Logo from '../assets/logo.svg'
import { Button } from "../components/button";
import { useAuth } from "../hooks/useAuth";

export function SignIn(){

  const { signIn, isUserLoading } = useAuth();
  
  return (
      <Center flex={1} bgColor="gray.900" p={7}>
        <Logo width={212} height={40} />

        <Button 
          title="ENTRAR COM GOOGLE"
          leftIcon={<GoogleLogo size={20} color="#fff" weight="bold" />}
          type='SECONDARY'
          mt={12}
          onPress={signIn}
        />

        <Text color="white" textAlign="center" mt={4}>
          Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
        </Text>
      </Center>
  )
}