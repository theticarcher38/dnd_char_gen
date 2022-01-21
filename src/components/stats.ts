import React from 'react'
var stat = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3,
    4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];

function stats() {
    var myStr = stat[Math.floor(Math.random() * stat.length)];
    console.log("Strength " + myStr);
    var myDex = stat[Math.floor(Math.random() * stat.length)];
    console.log("Dexterity " + myDex);
    var myCon = stat[Math.floor(Math.random() * stat.length)];
    console.log("Constitution " + myCon);
    var myInt = stat[Math.floor(Math.random() * stat.length)];
    console.log("Intelligence " + myInt);
    var myWis = stat[Math.floor(Math.random() * stat.length)];
    console.log("Wisdom " + myWis);;
    var myCha = stat[Math.floor(Math.random() * stat.length)];
    console.log("Charisma " + myCha);
}

export default stats;