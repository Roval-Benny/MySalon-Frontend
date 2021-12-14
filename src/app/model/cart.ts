export class Cart {
    public id?:number;
        public userId?: String;
        public serviceName?:string;
        public salonName?:string;
        public salonId?:number;
        public price?:number;
        public category?:Category;
        public name?:string;
        public description?:string;
        public offer?:number;
        public image?:string;
        public serviceId?:number;
        public date?:string;
        public time?:string;
    constructor(){}
}
enum Category{
    Men,
    Women,
    Boy,
    Girl
}