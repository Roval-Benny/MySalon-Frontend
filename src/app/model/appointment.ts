import { Time } from "@angular/common";

export class Appointment {
    constructor(
        public id:number,
        public status:Status,
        public userId: number,
        public salonId:number,
        public salonName:string,
        public price:number,
        public salonAddress:string,
        public category:Category,
        public image:string,
        public date:string,
        public time:string,
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

