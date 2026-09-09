class Appliance{
    public brand:string;
    public power:number
    constructor(brand:string,power:number){this.brand=brand; this.power=power;}
    displayInfo(){
        console.log(`ยี่ห้อ: ${this.brand}`);
        console.log(`กำลังไฟฟ้า: ${this.power}`);
    }
}
class WashingMachine extends Appliance{
    constructor(brand:string,power:number,public capacity:number){super(brand,power);}
    displayInfo(){
        console.log(`ยี่ห้อ: ${this.brand}`);
        console.log(`กำลังไฟฟ้า: ${this.power}`);
        console.log(`ความจุถังซัพ: ${this.capacity}`);
    }
}
const car=new WashingMachine("Samsung",1500,10);
car.displayInfo();