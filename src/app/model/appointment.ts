export class Appointment {
    constructor(
        public id:number,
        public status:Status,
        public userId: number,
        public serviceId:number,
        public salonServiceId:number,
        public salonId:number,
        public category:Category,
        public image:string
    ){}
}
enum Status{
    NotStarted,
    Completed
}
enum Category{
    Men,
    Women,
    Boy,
    Girl
}

