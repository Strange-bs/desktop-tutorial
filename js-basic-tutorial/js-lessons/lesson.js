// Data Type
// Data Structure

// let num = 10;
// num = 20;
// let nums = [10,20,30,50];

// let
// const

// const x = 10;
// x = 20;

// const pi = 3.14;
// let r = 10;
// console.log(2 * r * pi)

// let appleInfo = "Apple COM inc";
// let getUserFullName; // Camel Case >> Javascript
// let get_user_full_name; // Kebab case >> Python
// let getuserfullname; //

// Data Type

//1 number 
// let x = 5.2;
// console.log(x)
// console.log(typeof x) // number

// 2 NaN  Not a Number
// alert(1 * "olma") // NaN

// 3 string
// let str1 = "Apple";
// let str2 = 'Apple';
// let str3 = `Apple`;

// console.log(str1 + str2 + str3) //AppleAppleApple

// let s = "123456"
// console.log(typeof s) // string

// console.log("Qalesan " + " 'ÿaxshimisan' !")

// console.log("hello \n world")
// console.log("hello \t\t\t world")
// console.log("hello \" word \" world")
// console.log("hello \' word \' world")



// let age = 15;
// let name = "Abdulloh";
// console.log("Foydalanuvchini ismi :" + name)
// console.log("Foydalanuvchini yoshi :" + age)
// console.log(`Foydalanuvchini ismi : ${name}`)
// console.log(`Foydalanuvchini yoshi : ${age}`)
// let str = "Samsung\nApple\n\tXiaomi";
// console.log(str);

// function changeColor() {
//     let box = document.getElementById("box");
//     box.style.backgroundColor = "red";
//     box.style.width = `${width}px`;
// }

// 4 boolean

// true , false >> 1,0 >> Ha , Yo'q, 

// let b = true;
// let b2 = false;
// console.log(typeof b) // boolean

// let n = 0;
// console.log(Boolean(n))
// console.log(10 < 5)


// 10 < 5 // false
// 10 > 5 // true

// 5 null

// hech qaysi qiymat turiga tegishli emas

// 6 undefined 
// let x;
// console.log(x)

// alert("hello world")

// let age = prompt("Yoshingizni kiriting.. ") // userdan input kutadi
// console.log(age)

// let test = confirm("Python or Javascript ") // true yoki false
// console.log(test)

// lesson 2

// let value = 10;
// value = String(value) // to string
// console.log(typeof value)

// value = "10"; // string
// value = Number(value) // to number
// console.log(typeof value) // number

// ! >>  not  >> emas , (agar true bolsa , <<!>> true emas)
// console.log(Boolean(!value))

// value = Boolean(value) // true
// console.log(typeof value)

// let user1 = prompt("1-Sonni kiriting..."); // user dan string qiymatlarni qabil qilish
// let user2 = prompt("2-Sonni kiriting..."); // user dan string qiymatlarni qabil qilish
// user1 = Number(user1) // to number
// user2 = Number(user2) // to number
// alert(`Yigindi = ${user1 + user2}`)

// let x = Number(prompt("1-son"))
// let y = Number(prompt("2-son"))
// alert(`Result = ${x + y}`)


// Arifmetika
// console.log(10 + 10) // qoshish
// console.log(10 - 5) // ayirish
// console.log(10 * 5) // kopaytirish
// console.log(10 / 2) // bo'lish
// console.log(7 % 3) // bo'lganda qoldiqni olish
// console.log(10 ** 2) // darajaga kotarish

// let hieght = Number(prompt("Boyizni kirit"))
// alert(`Siz uchun idel vazn = ${hieght - 100}kg`)

// console.log((15 * 12) * 365)
// console.log(100 / (3 + 10) * 5)

// task 1 
// let userValue = Number(prompt("KV tomoni..."))
// alert(`Kvadratni perimetri = ${4 * userValue}sm`)
// task 2 
// let userValue = Number(prompt("KV tomoni..."))
// alert(`Kvadratni yuzasi  = ${userValue ** 2}sm`)

// task 5
// let a = parseInt(prompt("kubni Tomoni"))
// alert(`Hajmi = ${a**3}, Sirti = ${6* a **2}`)

//
// console.log(10 > 5) // true
// console.log(10 < 5) // false
// console.log(10 >= 5) // true
// console.log(10 <= 5) // false

// console.log(10 == 10) // true
// console.log(10 === 10) // true
// console.log(10 != 10) // false

// console.log("A" === "A")

// console.log(!true) // false

// if conditions 

// if (10 > 20) {
//     console.log("Block if")
// } else if (10 > 11) {
//     console.log("Block else if")
// } else {
//     console.log("Block else")
// }

// let age = Number(prompt("Your age ?"));
// // if(age > 18)alert("Welcome");
// if (age > 18) {
//     alert("Welcome")
// } else {
//     alert("False")
// }

// let num = Number(prompt("Your number ?"))

// if (num % 2 === 0) {
//     console.log(num ** 2)
// } else {
//     console.log(num / 2)
// }
// let accessAllowed = (20 < 18) ? "bor" : "yoq";
// console.log(accessAllowed)

// ? >> if(){}
// : >> else{}
// let letter = prompt()
// if(letter === "a")console.log("A")
// if(letter === "b")console.log("B")
// if(letter === "c")console.log("C")

// if (letter === "a") {
//     console.log("A")
// } else if (letter === "b") {
//     console.log("B")
// } else if (letter === "c") {
//     console.log("C")
// } else {
//     console.log("Harf emas")
// }

// if ("0") {
//     alert('Привет');
// }

// let user = prompt()
// if (user === "ES6") {
//     console.log("togri")
// } else {
//     console.log("notori")
// }

// task 1 
// input : login >> string
// output: login="gandi123" else if login="gandi986"  > alert("Welcome")
// else   > alert("Error!")

// Mantiqiy opearotorlar

// || >> yoki
// let a = 0 || 0 || null || undefined || false;
// console.log(a)

// if (10 > 11 || 10 > 5) {
//     console.log("Ishlaydi")
// }

// let age = +prompt("Age..")
// if (age > 18 || age < 20) {
//     alert("Welcome")
// }

// && >> VA 
// let x = 10 && 0;
// console.log(x)

// let age = +prompt("yosh")

// if ((age > 18 && age < 25) && (age > 19 && age < 21)) {
//     alert("welcome")
// }

// ! >> EMAS 
// let x = 10;
// console.log(!x)

// let age = +prompt()
// if (!age) {
//     alert("Iltimos yozing...")
// } else {
//     alert(age)
// }

// alert(null || 2 || undefined);
// alert(alert(1) || 2 || alert(3));

// alert(1 && null && 2);
// alert(null || 2 && 3 || 4);
// alert(null or 2 and 3 or 4)


// task 1 
// 14 va  90 ni orasida age qiymat qabul qilihsi mumkin bolgan if shartini yozing

// task 2
// let login = >> "user", "user12", "user123"

// task 3
// input:
//  day = "dushanba" , day = "chorshanba", day = "juma"
//  hour > 13 , 15 < hour
// output:
// alert("dars bor")
// let day = prompt("Kun")
// if (day === "dushanba" || day === "chorshanba" || day === "juma") {
//     let hour = prompt("soat")
//     if (hour >= 13 && hour <= 15) {
//         alert("dars bor")
//     } else {
//         alert("Kun togri soat notori")
//     }
// } else {
//     alert("Kun notori")
// }

// let i = 0;
// i++; // increment : i = i + 1;
// alert(i)

// let k = 10;
// k--; // decrement : k = k - 1
// alert(k)

// task 3
// let num = Number(prompt())
// if (num > 0) {
//     num++;
//     console.log(num)
// } else {
//     num = num + 2;
//     console.log(num)
// }
// let x, y, z;
// x = Number(prompt());
// y = Number(prompt());
// z = Number(prompt());
// let step = 0;
// if (x > 0) {
//     alert("OK")
// } else {
//     step++;
// }
// if (y > 0) {
//     alert("OK")
// } else {
//     step++;
// }
// if (z > 0) {
//     alert("OK")
// } else {
//     step++;
// }
// console.log(step)
// let a, b, c; // 5 9 12
// a = +prompt("A")
// b = +prompt("B")
// c = +prompt("C")
// if (b > a && b < c) {
//     console.log("rost")
// } else {
//     console.log("yolgon")
// }
// let a,b;
// a = +prompt("A")
// b = +prompt("B")


// While and For in Loops

// while loop >> infinite
// let i = 0; // 998200
// while (i < 10) {
//     i++ // plus 1
//     console.log(i)
// }


// let control = true;
// while (control) {
//     let food = prompt("Nima ovqat ?");
//     if (food === "palov") {
//         control = false;
//     }
// }

// while (condition) {
//     // код
//     // также называемый "телом цикла"
// }
// let count = 0;
// let control = true;
// do {
//     count++;
//     alert("Takrorlanishlar soni = " + count)
//     if (count === 15) {
//         control = false;
//     }
// } while (control)

// do{
//     // actions
// }while(condition)

// for (начало; условие; шаг) {
//     // ... тело цикла ...
//   }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
let str = "Hello world";
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])
// console.log(str.length) // 11 type  number
// console.log(str[0]) // H
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     i++;
// }
// let i = 0;
// for (i; i < 10; i++) {
//     console.log(i)
// }
// i , k , j , x

let a = 1;
let b = 7;
// task 1 
// for (let i = 0; i < n; i++) {
//     console.log(k)
// }
// task 2

// if (a < b) {
//     let counter = 0;
//     for (a; a <= b; a++) {
//         console.log(a)
//         counter++
//     }
//     console.log("Sonlar soni " + counter)
// }