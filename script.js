"use strict";

// № 1
let a = 3;
if(a === '1'){
    console.log('Верно');
}
else{
console.log('Неверно');
}


// № 2
let item = false; 
if (item != true) { 
    console.log('Верно'); 
}
 else { 
    console.log('Неверно'); 
} 
    
//Короткая
!item ? console.log('Верно') : console.log('Неверно');


// № 3 
let b = -1; 
if (b > 0 && b < 4) { 
    console.log('Верно'); 
}
else { 
    console.log('Неверно'); 
} 


// № 4
let c = 4; 
let d = 20; 
if (c > 3 && c < 12 || d >= 7 && d < 15) { 
    console.log('Верно'); 
}
else { 
    console.log('Неверно'); 
}



// № 5
let month = 13;
if (month == 1 || month == 2 || month == 12){
    console.log('Зима');
}		
else if (month >= 6 && month < 9){
    console.log('Лето');
}
else if (month >= 3 && month < 6){
    console.log('Весна');
}
else if (month >= 9 && month < 12){
    console.log('Осень');
}
else{
    console.log('Неверная дата');
}
    

// № 6
let i = 0; 
while (i <= 100){
    console.log(i);
    i +=2; 
}
