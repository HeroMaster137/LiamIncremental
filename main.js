var liams = 0;
var loams = 0;
var larrys = 0;
var jokes = 0;
var addAmount = 1;

var helis = 0;
var startHeliCost = 100;
var heliCost = 100;
var helisExpo = 1.5;
var heliWorth = 0.5;
var loamEquation = 0.75;
var larryEquation= 0.75;
var jokeEquation = 0.5;

var loamUnlocked = false;
var larryUnlocked = false;
var unResetLiams = false;

function getLoamEquation() {
    return (Math.pow((liams-1000)/100,loamEquation));
}

function getLarryEquation() {
    return (Math.pow((liams-100000)/500,larryEquation));
}

function getJokeEquation() {
    return (Math.pow((larrys/10),jokeEquation));
}

function convrt(numbe) {
    var number = numbe
    postfixes = ['', 'k', 'M', 'B', 'T', "Qd", "Qt", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc"]
    count = 0
    while (number >= 10) {
        number /= 10
        count++
    }
    //console.log(count)
    if(count>=postfixes.length) {
        return Math.trunc(number*100)/100 + "e" + count;
    }
    else {
        //console.log(numbe/(Math.pow(10,(count-(count%3)))))
        return Math.trunc((numbe/Math.pow(10,(count-(count%3))))*100)/100 + postfixes[(count-(count%3))/3];
    }
} 

function liamClick(number){
    liams = liams + number;
    document.getElementById('liamAmount').innerHTML = convrt(liams); 
}
function loamClick(number) {
    loams = loams + number;
    document.getElementById('loamAmount').innerHTML = convrt(loams);
}
function jokeClick(number) {
    jokes = jokes + number;
    document.getElementById('jokeAmount').innerHTML = convrt(jokes);
}

function save(){
    var save = {liams:liams, loams: loams, helis: helis, heliWorth: heliWorth, loamEquation: loamEquation, loamUnlocked: loamUnlocked, teams: teams, teamWorth: teamWorth, games: games, gameWorth: gameWorth, tuesdays: tuesdays, tuesdayWorth: tuesdayWorth, isBetterLoam: isBetterLoam, isMonday: isMonday, mondayAmount: mondayAmount, autoHeli: autoHeli, autoHeliUnlocked: autoHeliUnlocked, autoSaRTeam: autoSaRTeam, autoSaRTeamUnlocked: autoSaRTeamUnlocked, larryEquation: larryEquation, larryUnlocked: larryUnlocked, unResetLiams: unResetLiams, larrys:larrys, choirs: choirs, jokes: jokes, jokesUnlocked:jokesUnlocked, jortsUnlocked: jortsUnlocked, reeks: reeks, teamsExpo: teamsExpo, helisExpo: helisExpo, choirs: choirs};
    localStorage.setItem("save",JSON.stringify(save));
}

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.liams !== "undefined") liams = savegame.liams;
    if (typeof savegame.loams !== "undefined") loams = savegame.loams;
    if (typeof savegame.helisExpo !== "undefined") helisExpo = savegame.helisExpo;
    if (typeof savegame.teamsExpo !== "undefined") teamsExpo = savegame.teamsExpo;
    if (typeof savegame.helis !== "undefined") {helis = savegame.helis;
        document.getElementById('heliAmount').innerHTML = helis;
        document.getElementById('heliCost').innerHTML = Math.floor(100 * Math.pow(helisExpo,helis));
    }
    if (typeof savegame.heliWorth !== "undefined") heliWorth = savegame.heliWorth;
    if (typeof savegame.loamEquation !== "undefined") loamEquation = savegame.loamEquation;
    if (typeof savegame.loamUnlocked !== "undefined") loamUnlocked = savegame.loamUnlocked;
    if (typeof savegame.teams !== "undefined") {teams = savegame.teams;
        document.getElementById('teamAmount').innerHTML = teams;
        document.getElementById('teamCost').innerHTML = Math.floor(10 * Math.pow(teamsExpo,teams));
    }
    if (typeof savegame.teamWorth !== "undefined") teamWorth = savegame.teamWorth;
    if (typeof savegame.games !== "undefined") {games = savegame.games;
        document.getElementById('gameAmount').innerHTML = games;
        document.getElementById('gameCost').innerHTML = Math.floor(startGamesCost * Math.pow(gamesExpo,games));
    }
    if (typeof savegame.gameWorth !== "undefined") gameWorth = savegame.gameWorth;
    if (typeof savegame.tuesdays !== "undefined") {tuesdays = savegame.tuesdays;
        document.getElementById('tuesdayAmount').innerHTML = tuesdays;
        document.getElementById('tuesdayCost').innerHTML = Math.floor(startTuesdayCost * Math.pow(tuesdaysExpo,tuesdays));
    }
    if (typeof savegame.tuesdayWorth !== "undefined") tuesdayWorth = savegame.tuesdayWorth;
    if (typeof savegame.isBetterLoam !== "undefined") {isBetterLoam = savegame.isBetterLoam;
        if(isBetterLoam) {
            document.getElementById('loamUnlockCost').innerHTML = "Already Bought";
        }
    }
    if (typeof savegame.isMonday !== "undefined") {isMonday = savegame.isMonday;
        if(isMonday) {
            document.getElementById('mondayUnlockCost').innerHTML = "Already Bought";
        }
    }
    if (typeof savegame.mondayAmount !== "undefined") mondayAmount = savegame.mondayAmount;
    if (typeof savegame.autoHeli !== "undefined") {autoHeli = savegame.autoHeli;
        if(autoHeli) {
            document.getElementById('autoHeliStatus').innerHTML = 'Enabled';
        }
    }
    if (typeof savegame.autoHeliUnlocked !== "undefined") {autoHeliUnlocked = savegame.autoHeliUnlocked;
        if(autoHeliUnlocked) {
            document.getElementById('autoHeliUnlockCost').innerHTML = "Already Bought";
        }
    }
    if (typeof savegame.autoSaRTeam !== "undefined") {autoSaRTeam = savegame.autoSaRTeam;
        if(autoSaRTeam) {
            document.getElementById('autoSaRTeamStatus').innerHTML = 'Enabled';
        }
    }
    if (typeof savegame.autoSaRTeam !== "undefined") {autoSaRTeamUnlocked = savegame.autoSaRTeamUnlocked;
        if(autoSaRTeamUnlocked) {
            document.getElementById('autoSaRTeamUnlockCost').innerHTML = "Already Bought";
        }
    }
    if (typeof savegame.larryEquation !== "undefined") {larryEquation = savegame.larryEquation;}
    if (typeof savegame.larryUnlocked !== "undefined") {larryUnlocked = savegame.larryUnlocked;}
    if (typeof savegame.unResetLiams !== "undefined") {unResetLiams = savegame.unResetLiams;
        if(unResetLiams) {
            document.getElementById('yikesUnlockCost').innerHTML = "Already Bought";
        }
    }
    if (typeof savegame.larrys !== "undefined") {larrys = savegame.larrys;
        if(larryUnlocked) {
            document.getElementById("larryAmount").innerHTML = larrys;
        }
    }
    if (typeof savegame.jokes !== "undefined") {jokes = savegame.jokes;
        if(larryUnlocked) {
            document.getElementById("jokeAmount").innerHTML = jokes;
        }
    }
    if (typeof savegame.jokesUnlocked !== "undefined") {jokesUnlocked = savegame.jokesUnlocked;
        if(jokesUnlocked) {
            document.getElementById("jokeUnlockCost").innerHTML = "Already Bought";
        }
    }
    if (typeof savegame.choirs !== "undefined") {choirs = savegame.choirs;
        document.getElementById('choirAmount').innerHTML = choirs;
        document.getElementById('choirCost').innerHTML = Math.floor(100 * Math.pow(choirsExpo,choirs));
    }
    if (typeof savegame.reeks !== "undefined") {reeks = savegame.reeks;
        document.getElementById('reeksAmount').innerHTML = reeks;
        document.getElementById('reeksCost').innerHTML = Math.floor(100 * Math.pow(reeksExpo,reeks));
    }
    if (typeof savegame.jortsUnlocked !== "undefined") {jortsUnlocked = savegame.jortsUnlocked;
        if(jortsUnlocked) {
            document.getElementById("jortsUnlockCost").innerHTML = "Already Bought";
        }
    }
    document.getElementById('teamAdd').innerHTML = Math.round((teamWorth+((heliWorth+(games*gameWorth))*helis))*10*tuesdayWorth)/10;
    document.getElementById('heliAdd').innerHTML = Math.round((0.5+(gameWorth*games))*10)/10;
    openTab(event, 'Upgrades');
}

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function deleteSave(){
    localStorage.removeItem("save");
    location.reload();
}

function buyHeli(){
    var heliCost = Math.floor(100 * Math.pow(helisExpo,helis));
    if(liams >= heliCost){
        helis = helis + 1;
        if(!jortsUnlocked) {
    	liams = liams - heliCost; }
        document.getElementById('heliAmount').innerHTML = helis;
        document.getElementById('liamAmount').innerHTML = Math.round(liams*10)/10;
        document.getElementById('teamAdd').innerHTML = Math.round((teamWorth+((heliWorth+(games*gameWorth))*helis))*10*tuesdayWorth)/10;
    };
    var nextCost = Math.floor(100 * Math.pow(helisExpo,helis));
    document.getElementById('heliCost').innerHTML = nextCost;
}

var teams = 0;
var teamWorth = 1;
var startTeamCost = 10;
var teamCost = 10;
var teamsExpo = 1.6;
function buySearchAndRescue(){
    var teamCost = Math.floor(10 * Math.pow(teamsExpo,teams));
    if(liams >= teamCost){
        teams = teams + 1;
        if (!jortsUnlocked) {
    	liams = liams - teamCost; }
        document.getElementById('teamAmount').innerHTML = teams;
        document.getElementById('liamAmount').innerHTML = Math.round(liams*10)/10;
    };
    var nextCost = Math.floor(10 * Math.pow(teamsExpo,teams));
    document.getElementById('teamCost').innerHTML = nextCost;
}
function resetLiam(){
    if(liams >= 1000){
        loamUnlocked = true;
        loams = Math.trunc((loams+getLoamEquation())*10)/10;
        liams=0;
        if(!unResetLiams) {
        helis=0;
        teams=mondayAmount;
        }
        document.getElementById('teamAmount').innerHTML = teams;
        document.getElementById('liamAmount').innerHTML = liams;
        document.getElementById('loamAmount').innerHTML = loams;
        document.getElementById('heliAmount').innerHTML = helis;
        document.getElementById('heliCost').innerHTML = Math.floor(100 * Math.pow(helisExpo,helis));
        document.getElementById('teamCost').innerHTML = Math.floor(10 * Math.pow(teamsExpo,teams));
        document.getElementById('teamAdd').innerHTML = Math.round((teamWorth+((heliWorth+(games*gameWorth))*helis))*10*tuesdayWorth)/10;
        document.getElementById('loamPotention').innerHTML = 0;
    };
}
var games = 0;
var startGamesCost = 5;
var gameWorth = 0.1;
var gameCost = 5;
var gamesExpo = 1.4;
function buyGame(){
    var gameCost = Math.floor(startGamesCost * Math.pow(gamesExpo,games));
    if(loams >= gameCost){
        games = games + 1;
        if (!jortsUnlocked) {
    	loams = loams - gameCost; }
        loams = Math.trunc(loams*10)/10;
        document.getElementById('gameAmount').innerHTML = games;
        document.getElementById('loamAmount').innerHTML = loams;
        document.getElementById('teamAdd').innerHTML = Math.round((teamWorth+((heliWorth+(games*gameWorth))*helis))*10*tuesdayWorth)/10;
        document.getElementById('heliAdd').innerHTML = Math.round((0.5+(gameWorth*games))*10)/10;
    };
    var nextCost = Math.floor(startGamesCost * Math.pow(gamesExpo,games));
    document.getElementById('gameCost').innerHTML = nextCost;
}
var tuesdays = 0;
var startTuesdayCost = 15;
var tuesdayWorth = 1;
var tuesdayCost = 15;
var tuesdaysExpo = 3;
function buyTuesday(){
    var tuesdayCost = Math.floor(startTuesdayCost * Math.pow(tuesdaysExpo,tuesdays));
    if(loams >= tuesdayCost){
        tuesdays = tuesdays + 1;
        tuesdayWorth = tuesdayWorth*1.7;
        if (!jortsUnlocked) {
    	loams = loams - tuesdayCost; }
        loams = Math.trunc(loams*10)/10;
        document.getElementById('tuesdayAmount').innerHTML = tuesdays;
        document.getElementById('loamAmount').innerHTML = loams;
        document.getElementById('teamAdd').innerHTML = Math.round((teamWorth+((heliWorth+(games*gameWorth))*helis))*10*tuesdayWorth)/10;
    };
    var nextCost = Math.floor(startTuesdayCost * Math.pow(tuesdaysExpo,tuesdays));
    document.getElementById('tuesdayCost').innerHTML = nextCost;
}
var reeks = 0;
var startReeksCost = 100;
var reeksWorth = 1;
var reeksCost = 100;
var reeksExpo = 3;
function buyReeks(){
    var reeksCost = Math.floor(startReeksCost * Math.pow(reeksExpo,reeks));
    if(loams >= reeksCost && reeks < 10){
        reeks = reeks + 1;
        teamsExpo = teamsExpo - 0.03;
        if (!jortsUnlocked) {
    	loams = loams - reeksCost; }
        loams = Math.trunc(loams*10)/10;
        document.getElementById('reeksAmount').innerHTML = reeks;
        document.getElementById('heliCost').innerHTML = Math.floor(100 * Math.pow(helisExpo,helis));
        document.getElementById('teamCost').innerHTML = Math.floor(10 * Math.pow(teamsExpo,teams));
    };
    var nextCost = Math.floor(startReeksCost * Math.pow(reeksExpo,reeks));
    document.getElementById('reeksCost').innerHTML = nextCost;
}
var isBetterLoam = false;
function buyBetterLoam(){
    if(loams >= 100 && !isBetterLoam){
        isBetterLoam = true;
        loamEquation = 0.8;
        if(!jortsUnlocked) {
        loams = loams-100; }
        loams = Math.trunc(loams*10)/10;
        document.getElementById('loamUnlockCost').innerHTML = "Already Bought";
        document.getElementById('loamAmount').innerHTML = loams;
    };
}
var isMonday = false;
var mondayAmount = 0;
function buyMonday(){
    if(loams >= 50 && !isMonday){
        isMonday = true;
        if(!jortsUnlocked) {
        loams = loams-50; }
        mondayAmount = 1;
        loams = Math.trunc(loams*10)/10;
        document.getElementById('mondayUnlockCost').innerHTML = "Already Bought";
        document.getElementById('loamAmount').innerHTML = loams;
    };
}
var autoSaRTeamUnlocked = false;
var autoSaRTeam = false;
function buyAutoSaRTeam(){
    if(autoSaRTeamUnlocked) {
        autoSaRTeam = !autoSaRTeam;
        if (document.getElementById('autoSaRTeamStatus').innerHTML == 'Disabled') {
            document.getElementById('autoSaRTeamStatus').innerHTML = 'Enabled';
        } else {
            document.getElementById('autoSaRTeamStatus').innerHTML = 'Disabled';
        }
    }
    if(loams >= 250 && !autoSaRTeamUnlocked){
        autoSaRTeamUnlocked = true;
        if (!jortsUnlocked) {
        loams = loams-250; }
        loams = Math.trunc(loams*10)/10;
        document.getElementById('autoSaRTeamUnlockCost').innerHTML = "Already Bought";
        document.getElementById('loamAmount').innerHTML = loams;
    };
}
var autoHeliUnlocked = false;
var autoHeli = false;
function buyAutoHeli(){
    if(autoHeliUnlocked) {
        autoHeli = !autoHeli;
        if (document.getElementById('autoHeliStatus').innerHTML == 'Disabled') {
            document.getElementById('autoHeliStatus').innerHTML = 'Enabled';
        } else {
            document.getElementById('autoHeliStatus').innerHTML = 'Disabled';
        }
    }
    if(loams >= 250 && !autoHeliUnlocked){
        autoHeliUnlocked = true;
        if (!jortsUnlocked) {
        loams = loams-250; }
        loams = Math.trunc(loams*10)/10;
        document.getElementById('autoHeliUnlockCost').innerHTML = "Already Bought";
        document.getElementById('loamAmount').innerHTML = loams;
    }
}

function resetLoam() {
    if(liams>=100000) {
        larrys = Math.trunc((larrys+getLarryEquation())*10)/10;
        helis=0;
        heliWorth = 0.5
        teams=0;
        teamWorth = 1;
        tuesdayWorth = 1;
        liams=0;
        document.getElementById('teamAmount').innerHTML = teams;
        document.getElementById('liamAmount').innerHTML = liams;
        document.getElementById('larryAmount').innerHTML = larrys;
        document.getElementById('heliAmount').innerHTML = helis;
        document.getElementById('heliCost').innerHTML = Math.floor(100 * Math.pow(helisExpo,helis));
        document.getElementById('teamCost').innerHTML = Math.floor(10 * Math.pow(teamsExpo,teams));
        document.getElementById('teamAdd').innerHTML = Math.round((teamWorth+((heliWorth+(games*gameWorth))*helis))*10*tuesdayWorth)/10;
        document.getElementById('loamPotention').innerHTML = 0;
        larryUnlocked = true;
        loams = 0;
        autoHeli = false;
        autoHeliUnlocked = false;
        autoSaRTeam = false;
        autoSaRTeamUnlocked = false;
        isBetterLoam = false;
        mondayAmount = 0;
        isMonday = false;
        games = 0;
        tuesdays = 0;
        document.getElementById('loamAmount').innerHTML = loams;
        document.getElementById('autoHeliStatus').innerHTML = autoHeli ? 'Enabled' : 'Disabled';
        document.getElementById('autoHeliStatus').innerHTML = autoSaRTeam ? 'Enabled' : 'Disabled';
        document.getElementById('autoHeliUnlockCost').innerHTML = autoHeliUnlocked ? "Already Bought" : '250';
        document.getElementById('autoSaRTeamUnlockCost').innerHTML = autoSaRTeamUnlocked ? "Already Bought" : '250';
        document.getElementById('mondayUnlockCost').innerHTML = isMonday ? "Already Bought" : '50';
        document.getElementById('loamUnlockCost').innerHTML = isBetterLoam ? "Already Bought" : '100';
        document.getElementById('gameCost').innerHTML = Math.floor(startGamesCost * Math.pow(gamesExpo,games));
        document.getElementById('tuesdayCost').innerHTML = Math.floor(startTuesdayCost * Math.pow(tuesdaysExpo,tuesdays));
        document.getElementById('teamAdd').innerHTML = Math.round((teamWorth+((heliWorth+(games*gameWorth))*helis))*10*tuesdayWorth)/10;
        document.getElementById('gameAmount').innerHTML = games;
        document.getElementById('tuesdayAmount').innerHTML = tuesdays;
        document.getElementById('yikesUnlockCost').innerHTML = unResetLiams ? "Already Bought" : '5';
    }
}
function buyYikes(){
    if(larrys >= 5 && !unResetLiams){
        unResetLiams = true;
        larrys = larrys-5;
        larrys = Math.trunc(larrys*10)/10;
        document.getElementById('yikesUnlockCost').innerHTML = "Already Bought";
        document.getElementById('larryAmount').innerHTML = larrys;
    };
}
var jokesUnlocked = false;
function buyJokes(){
    if(larrys >= 20 && !jokesUnlocked){
        jokesUnlocked = true;
        larrys = larrys-20;
        larrys = Math.trunc(larrys*10)/10;
        document.getElementById('jokeUnlockCost').innerHTML = "Already Bought";
        document.getElementById('larryAmount').innerHTML = larrys;
    };
}
var jortsUnlocked = false;
function buyJorts(){
    if(larrys >= 20 && !jortsUnlocked){
        jortsUnlocked = true;
        larrys = larrys-100;
        larrys = Math.trunc(larrys*10)/10;
        document.getElementById('jortsUnlockCost').innerHTML = "Already Bought";
        document.getElementById('larryAmount').innerHTML = larrys;
    };
}
var choirs = 0;
var startChoirCost = 25;
var choirCost = 25;
var choirsExpo = 1.3;
function buyChoir(){
    var choirCost = Math.floor(startChoirCost * Math.pow(choirsExpo,choirs));
    if(larrys >= choirCost && choirs<25){
        choirs = choirs + 1;
    	larrys = larrys - choirCost;
        larrys = Math.trunc(larrys*10)/10;
        document.getElementById('choirAmount').innerHTML = choirs;
        document.getElementById('larryAmount').innerHTML = larrys;
    };
    var nextCost = Math.floor(startChoirCost * Math.pow(choirsExpo,choirs));
    document.getElementById('choirCost').innerHTML = nextCost;
}

window.setInterval(function(){
        if((getLoamEquation())>=0) {
            document.getElementById('loamPotention').innerHTML = convrt(getLoamEquation());
        } else {
            document.getElementById('loamPotention').innerHTML = 0;
        }
        if((getLarryEquation())>=0) {
            document.getElementById('larryPotention').innerHTML = convrt(getLarryEquation());
        } else {
            document.getElementById('larryPotention').innerHTML = 0;
        }
        document.getElementById('loamAmount').innerHTML = convrt(loams);
        if (loamUnlocked == true) {
            document.getElementById('loam1').style.opacity = 1;
            document.getElementById('loam2').style.opacity = 1;
            document.getElementById('loam3').style.opacity = 1;
            document.getElementById('loam4').style.opacity = 1;
            document.querySelectorAll(".loamButton").forEach(e => e.disabled = false)
        }
        if (larryUnlocked == true) {
            document.getElementById('larry1').style.opacity = 1;
            document.getElementById('larry2').style.opacity = 1;
            document.getElementById('larry3').style.opacity = 1;
            document.getElementById('larry4').style.opacity = 1;
            document.querySelectorAll(".larryButton").forEach(e => e.disabled = false)
        }
        if (jokesUnlocked == true) {
            document.getElementById('joke1').style.opacity = 1;
            document.getElementById('joke2').style.opacity = 1;
            document.querySelectorAll(".jokeButton").forEach(e => e.disabled = false)
        }
        if (autoSaRTeam) {
            buySearchAndRescue();
        }
        if (autoHeli) {
            buyHeli();
        }
        document.getElementById('liamAmount').innerHTML = convrt(liams);
        document.getElementById('loamAmount').innerHTML = convrt(loams);
        document.getElementById('larryAmount').innerHTML = convrt(larrys);
        document.getElementById('jokeAmount').innerHTML = convrt(jokes);
}, 10);

window.setInterval(function(){
    liamClick(teams*((teamWorth+((heliWorth+(games*gameWorth))*helis))*tuesdayWorth));
    if(getLoamEquation()>=0) {
        loamClick(getLoamEquation()*((choirs*4)/100));
    }
    if(jokesUnlocked) {
        jokeClick(getJokeEquation());
    }
}, 1000);

window.setInterval(function(){
    save();
}, 10000)