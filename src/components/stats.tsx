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
        console.log("Wisdom " + myWis);
    
        var myCha = stat[Math.floor(Math.random() * stat.length)];
        console.log("Charisma " + myCha);
        
        document.getElementById('#str-text')?.append("<p>" + myStr + "</p>");
          
        document.getElementById('#dex-text')?.append("<p>" + myDex + "</p>");
          
        document.getElementById('#con-text')?.append("<p>" + myCon + "</p>");
          
        document.getElementById('#int-text')?.append("<p>" + myInt + "</p>");
          
        document.getElementById('#wis-text')?.append("<p>" + myWis + "</p>");
          
        document.getElementById('#cha-text')?.append("<p>" + myCha + "</p>");

        return (
            <div>
                <h1>Strength</h1>
                <div id="str-text" className="stat-def">
                <p id="str-p" className='stat-def'></p>
                </div>
                <h1>Dexterity</h1>
                <div id="dex-text" className="stat-def"></div>
                <h1>Constitution</h1>
                <div id="con-text" className="stat-def"></div>
                <h1>Intelligence</h1>
                <div id="int-text" className="stat-def"></div>
                <h1>Wisdom</h1>
                <div id="wis-text" className="stat-def"></div>
                <h1>Charisma</h1>
                <div id="cha-text" className="stat-def"></div>
            </div>
        );
    }

export default stats();