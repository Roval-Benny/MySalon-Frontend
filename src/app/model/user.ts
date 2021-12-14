export class User {
    public id?:string;
    public name?:string;
    public phoneNo?:string;
    public ageCategory?:Category;
    public userId?:string;
    public token?:string;
    constructor(){}
}
enum Category{
    Men,
    Women,
    Boy,
    Girl
}