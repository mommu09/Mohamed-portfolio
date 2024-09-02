/*let a = 6;
let b = 9;
let c = 7;
let d = 4;
console.log(a, b, c, d);
let name = "Priya";
let designation = "Senior Software Engineer";
let experiance = 4;
let salary = 100000;
console.log("Name : " + name);
console.log("Designation : " + designation);
console.log("Experiance : ", experiance, "Years");
console.log("Salary : ", salary, "INR per Month");*/

/* a=101
b=103
c=105
a=a+a+a+a
b=4*b-3*b
c=c**2
console.log(a+b+c) */

/*let A = 5;
let B = 4;
let C = 6;
let A_and_B_and_C = (A&B)&C;
let A_xor_B = A^B;
let lft_shift = A<<1;
console.log("(A AND B) AND C : ",A_and_B_and_C);
console.log("A XOR B : ",A_xor_B);
console.log("A << 1 : ",lft_shift);*/

/*let a = 6;
let b = 3;
let c = 5;
let d = 2;
console.log(a|b);
console.log(a^b);
console.log(c^d);
console.log(~(a|b));*/
/*let a = 96;
let b = 69;
let c = a;
a = b;
b = c;
console.log(a,b);

let d = 10;
let e = 6;
d=d+e;
e=d-e;
d=d-e;
console.log(d,e);

let f=10;
let g=5;
f=f^g;
g=f^g;
f=f^g;
console.log(f,g);*/

/*let name = "Mohamed";
let engMark = 77;
let mathsMark = 85;
if (mathsMark > engMark) {
    console.log("Maths mark is higher");
}
else if(mathsMark==engMark){
    console.log("Both marks are equal");
}
else {
    console.log("English mark is higher");
}*/
console.log("-----Number----")
let number = 8;
if (number > 0) {
    console.log(number,"is a positive number")
}
else if(number==0){
    console.log(number,"is zero")
} else {
    console.log(number,"is a negative number")   
}
console.log("-----vowel----")
let char = 'a';
let vowels = ['a','e','i','o','u','A','E','I','O','U'];
// if(char in vowels){
//     console.log(char,"is a vowel");
// }
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
    console.log(char,"is a vowel");
}
else{
    console.log(char,"is a consonant");
}
console.log("-----Reward----");
let member = true;
let spent = 122;
let reward = 0;
let points = spent/10;
if(member==true){
    reward=reward+(points);
}
console.log("Reward Points : ",reward);


