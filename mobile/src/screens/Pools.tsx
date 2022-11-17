import { VStack } from "native-base";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { MagnifyingGlass } from "phosphor-react-native";

export function Pools(){
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus Boloes" />
      <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
        <Button 
          title="Buscar bolao por codigo" 
          leftIcon={<MagnifyingGlass size={20} color="#000" weight="bold" />}
          />
      </VStack>
    </VStack>
  )
}