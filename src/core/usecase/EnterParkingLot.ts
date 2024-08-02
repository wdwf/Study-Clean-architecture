import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../repository/ParkingLotRepository";


/*
  Definição do  caso de uso para entrar no estacionamento
  temos 2 regras implementadas
*/
export default class EnterParkingLot {
  parkingLotRepository: ParkingLotRepository;

  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository;
  }

  async execute(code: string, plate: string, date: Date) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code);
    const parkedCar = new ParkedCar(code, plate, date);

    //Regra 1
    if (!parkingLot.isOpen(parkedCar.date)) throw new Error("The parking lot is close");

    //Regra 2
    if (parkingLot.isFull()) throw new Error("The parking lot is full");

    await this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date);

    return parkingLot;
  }

}