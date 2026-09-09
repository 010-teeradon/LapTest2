class Book{
    title:string;
    pages:number;
    constructor(title:string,pages:number){this.title=title; this.pages=pages;}
    displayInfo(){
        console.log(`ชื่อหนังสือ: ${this.title}`);
        console.log(`จำนวน: ${this.pages}`);
    }
}
const book=new Book("การเขียนโปแกรมเชิงวัตถุ",200);
book.displayInfo();