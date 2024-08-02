import ParkedCar from "../entity/ParkedCar";
import ParkingLot from "../entity/ParkingLot";

/*
  Um repositório é um padrão de design que atua como uma camada 
  intermediária entre a aplicação e a fonte de dados (como um 
  banco de dados, um serviço externo, etc.). Ele abstrai os 
  detalhes de como os dados são armazenados e recuperados, 
  oferecendo uma interface consistente e isolada para a 
  lógica de negócio.
*/

export default interface ParkingLotRepository {
  getParkingLot(code: string): Promise<ParkingLot>;
  /* Não desejável que se envie para a camada de  
     persistência a sua entidade de negocio pois 
     ela pode mudar por motivos diferentes 
  */
  saveParkedCar(code: string, plate: string, date: Date): void;
}