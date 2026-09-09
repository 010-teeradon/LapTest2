class PrepaidSIM{
    public phoneNumber:string;
    private credit:number;
    constructor(phoneNumber:string,credit:number){this.phoneNumber=phoneNumber; this.credit=credit;};
    get(){
        console.log(`เครดิตอยู่: ${this.credit}`);
    }
    set(){
        if (this.credit>=0) {
            console.log(`มีเครดิตอยู่ ${this.credit}`);
        }else{
            console.error("ยอดเงินคงเหลือไม่สามารถเป็นค่าติดลบ");
        }
    }
    TopUp(amount:number){
        if (amount>0){
            this.credit=amount+this.credit;
            console.log(`เติมเงิน: ${amount}`);
        }
    }
    makeCall(amount:number){
        if (amount>0){
            this.credit=this.credit-amount;
            console.log(`โทรออกหักค่าบริการ: ${amount}`);
        }else{
            console.log("ไม่สามารถโทรได้หากยอดเงินไม่เพียงพอ");
        }
    }
    displayPoints(){
        console.log(`เบอร์โทร: ${this.phoneNumber}`);
        console.log(`เครดิตคงเหลือ: ${this.credit}`);
    }
}
const sim=new PrepaidSIM("0696398547",100);
sim.displayPoints();
sim.TopUp(50);
sim.get();
sim.makeCall(30);
sim.get();
sim.makeCall(-200);
sim.set();