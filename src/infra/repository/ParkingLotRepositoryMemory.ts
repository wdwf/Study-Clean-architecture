import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";


/*
  // Papel do repositório se faz um acumulador de dados
  //A ideia fica em poder ter uma Query que faz um count vai da modelagem.
*/

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

  parkingLots = [
    { code: "shopping", capacity: 5, open_hour: 8, close_hour: 22 }
  ];
  parkedCars = [];

  getParkingLot(code: string): Promise<ParkingLot> {
    // Pode ser qualquer armazenamento de dados (arquivo, mongo, sql)
    const parkingLotData = this.parkingLots.find(parkingLot => parkingLot.code === code);

    const occupiedSpaces = this.parkedCars.length;

    //conversão 
    const parkingLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, occupiedSpaces);

    parkingLot.occupiedSpaces = this.parkedCars.length;

    return Promise.resolve(parkingLot);
  }

  saveParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({ code, plate, date });
  }

}