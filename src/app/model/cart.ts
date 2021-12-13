export class Cart {
    constructor(
        public id:number,
        public userId: number,
        public serviceName:string,
        public salonName:string,
        public salonId:number,
        public price:number,
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