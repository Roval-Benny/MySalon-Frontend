export class User {
    constructor(
        public id:number,
        public name:string,
        public phoneNo:string,
        public ageCategory:Category
    ){}
}
enum Category{
    Men,
    Women,
    Boy,
    Girl
}