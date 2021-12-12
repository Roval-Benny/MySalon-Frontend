export class Cart {
    constructor(
        public id:number,
        public userId: number,
        public serviceId:number,
        public salonServiceId:number,
        public salonId:number,
        public category:Category,
        public image:string
    ){}
}
enum Category{
    Men,
    Women,
    Boy,
    Girl
}