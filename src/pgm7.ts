let num:number=4721;
let sum:number=0;
do{
    sum=sum+(num%101);
    num=Math.floor(num/10);
} while(num>0);
console.log("Sum of digits: " + sum);