import ParkingLot from "../core/entity/ParkingLot";


/*
  camada de código que traduz ou adapta uma interface para que diferentes 
  partes de um sistema possam se comunicar de maneira coesa e independente. 
  Essa camada é crucial para manter a separação de preocupações e garantir 
  que a lógica de negócio (casos de uso) seja independente dos detalhes de 
  implementação de infraestrutura, como bancos de dados, APIs externas, 
  interfaces de usuário, etc.
*/
export default class ParkingLotAdapter {
  static create(code: string, capacity: number, openHour: number, closeHour: number, occupiedSpaces: number) {
    return new ParkingLot(code, capacity, openHour, closeHour, occupiedSpaces);
  }
}