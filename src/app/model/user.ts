export class User {
    constructor(
        public id:string,
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