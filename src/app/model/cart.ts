export class Cart {
    constructor(
        public id:String,
        public userId: String,
        public serviceName:string,
        public salonName:string,
        public salonId:string,
        public price:string,
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