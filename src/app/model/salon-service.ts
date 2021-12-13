export class SalonService {
    constructor(
        public id:number,
        public name:string,
        public description:string,
        public price:number,
        public offer:number,
        public image:string,
        public category:Category,
        public serviceId:number
    ){}
}
enum Category{
    Men,
    Women,
    Boy,
    Girl
}
