var liams = 0;
var loams = 0;
var addAmount = 1;

var helis = 0;
var startHeliCost = 100;
var heliCost = 100;
var helisExpo = 1.5;
var heliWorth = 0.5;
var loamEquation = 0.75;

var loamUnlocked = false;
function getLoamEquation() {
    return (Math.pow((liams-1000)/100,loamEquation));
}
function liamClick(number){
    liams = Math.trunc((liams + number)*10)/10;
    document.getElementById('liamAmount').innerHTML = liams;
    
}
function buyHeli(){
    var heliCost = Math.floor(100 * Math.pow(helisExpo,helis));
    if(liams >= heliCost){
        helis = helis + 1;
    	liams = liams - heliCost;
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
    	liams = liams - teamCost;
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
        helis=0;
        teams=mondayAmount;
        liams=0;
        document.getElementById('teamAmount').innerHTML = teams;
        document.getElementById('liamAmount').innerHTML = liams;
        document.getElementById('loamAmount').innerHTML = loams;
        document.getElementById('heliAmount').innerHTML = helis;
        document.getElementById('heliCost').innerHTML = startHeliCost;
        document.getElementById('teamCost').innerHTML = startTeamCost;
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
    	loams = loams - gameCost;
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
    	loams = loams - tuesdayCost;
        loams = Math.trunc(loams*10)/10;
        document.getElementById('tuesdayAmount').innerHTML = tuesdays;
        document.getElementById('loamAmount').innerHTML = loams;
        document.getElementById('teamAdd').innerHTML = Math.round((teamWorth+((heliWorth+(games*gameWorth))*helis))*10*tuesdayWorth)/10;
    };
    var nextCost = Math.floor(startTuesdayCost * Math.pow(tuesdaysExpo,tuesdays));
    document.getElementById('tuesdayCost').innerHTML = nextCost;
}
var isBetterLoam = false;
function buyBetterLoam(){
    if(loams >= 100 && !isBetterLoam){
        isBetterLoam = true;
        loamEquation = 0.8;
        loams = loams-100;
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
        loams = loams-50;
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
        loams = loams-250;
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
        loams = loams-250;
        loams = Math.trunc(loams*10)/10;
        document.getElementById('autoHeliUnlockCost').innerHTML = "Already Bought";
        document.getElementById('loamAmount').innerHTML = loams;
    }
}

window.setInterval(function(){
    //console.log((Math.pow((liams-1000)/100,0.9)));
        if((getLoamEquation())>=0) {
            document.getElementById('loamPotention').innerHTML = Math.round(getLoamEquation()*10)/10;
        } else {
            document.getElementById('loamPotention').innerHTML = 0;
        }
        document.getElementById('loamAmount').innerHTML = Math.round(loams*10)/10;
        if (loamUnlocked == true) {
            document.getElementById('loam').style.opacity = 1;
        }
        if (autoSaRTeam) {
            buySearchAndRescue();
        }
        if (autoHeli) {
            buyHeli();
        }
}, 10);

window.setInterval(function(){
    liamClick(teams*((teamWorth+((heliWorth+(games*gameWorth))*helis))*tuesdayWorth));
}, 1000);