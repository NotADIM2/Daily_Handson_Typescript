let num:number=12345;
let reversed:number=0;
while(num!=0){
    let digit:number=num%10;
    reversed=reversed*10+digit;
    num=Math.floor(num/10);
}
console.log("Reversed number: " + reversed);