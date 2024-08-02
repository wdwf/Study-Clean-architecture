import GetParkingLot from "../core/usecase/GetParkingLot";
import ParkingLotRepositorySQL from "../infra/repository/ParkingLotRepositorySQL";

/*
  camada intermediária que lida com a comunicação entre a interface do usuário 
  (ou API) e a lógica de negócio (casos de uso). O principal papel do 
  controlador é receber entradas do usuário (como requisições HTTP), 
  processar essas entradas e invocar os casos de uso apropriados, além de 
  preparar as respostas para serem enviadas de volta ao usuário.
*/
export default class ParkingLotController {
  static async getParkingLot(params, body) {
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
    const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
    const parkingLot = await getParkingLot.execute(params.code);
    return parkingLot;
  }
}