<<<<<<< HEAD
const stat = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3,
    4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];
    
export function stats() {
=======
import React from 'react'
var stat = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3,
    4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];

function stats() {
>>>>>>> 8572dc6438fd8392ec3f5adb1149a12ea6ecd323
    var myStr = stat[Math.floor(Math.random() * stat.length)];
    console.log("Strength " + myStr);
    var myDex = stat[Math.floor(Math.random() * stat.length)];
    console.log("Dexterity " + myDex);
    var myCon = stat[Math.floor(Math.random() * stat.length)];
    console.log("Constitution " + myCon);
    var myInt = stat[Math.floor(Math.random() * stat.length)];
    console.log("Intelligence " + myInt);
    var myWis = stat[Math.floor(Math.random() * stat.length)];
<<<<<<< HEAD
    console.log("Wisdom " + myWis);

    var myCha = stat[Math.floor(Math.random() * stat.length)];
    console.log("Charisma " + myCha);
    document.getElementById('#str-text')?.append("<p>" + myStr + "</p>");
      
    document.getElementById('#dex-text')?.append("<p>" + myDex + "</p>");
      
    document.getElementById('#con-text')?.append("<p>" + myCon + "</p>");
      
    document.getElementById('#int-text')?.append("<p>" + myInt + "</p>");
      
    document.getElementById('#wis-text')?.append("<p>" + myWis + "</p>");
      
    document.getElementById('#cha-text')?.append("<p>" + myCha + "</p>");
    }
=======
    console.log("Wisdom " + myWis);;
    var myCha = stat[Math.floor(Math.random() * stat.length)];
    console.log("Charisma " + myCha);
}

export default stats;
>>>>>>> 8572dc6438fd8392ec3f5adb1149a12ea6ecd323
