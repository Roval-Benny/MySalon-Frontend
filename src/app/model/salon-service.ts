export class SalonService {
    constructor(
        public id:number,
        public name:string,
        public description:string,
        public price:number,
        public offer:number,
        public image:string,
        public category:Category,
        public serviceId:number,
        public salonId:number,
        public salonName:string
    ){}
}
enum Category{
    Men,
    Women,
    Boy,
    Girl
}
