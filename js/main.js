//Global Variables
class Perk {
  constructor(name,description) {
    this.name = name;
    this.description = description;
  }

}
class Item {
  constructor(name, description, amount, cost) {
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.cost = cost;
  }

}
let skills = {
  barter:0,
  combat:0,
  medicine:0,
  speech:0,
  tinkering:0
}
let health = 150;
let currency = 50;
let parts = 0;
let damage = 10;
let perkOptions = {
  silverTongue: new Perk("Silver-Tongued","Increases Barter and speech skills"),
  outdoorsEnthusiast: new Perk("Outdoors Enthusiast", "Increases Combat skill and Medicine skills."),
  luckyBreak: new Perk("Lucky Break", "Start with 100 more currency and a flashlight (required for cave exploration)."),
  gameModder: new Perk("Game Modder", "Increases tinkering skill and start with parts (parts are required to craft items).")
}
let equipment = {
  flashlight: new Item("FlashLight", "Allows access to caves. COST 50", 0, 50),
  stoneAxe: new Item("Stone Axe", "Increases damage by 10. COST 150", 0, 150),
  medicalChip: new Item("Medical Chip", "Heal for 50% max HP.", 0, 75)
}
class Player{

  constructor(name,specialization,perks){
    this.name = name;
    this.specialization = specialization;
    this.perks = perks;
  }
  initializePlayer() {
    if (this.specialization == "Explorer"){
      skills = {
        barter:16,
        combat:6,
        medicine:5,
        speech:15,
        tinkering:4
      }
    }
    else if (this.specialization == "Orator"){
      skills = {
        barter:3,
        combat:15,
        medicine:16,
        speech:5,
        tinkering:8
      }
    }
    else{
      skills = {
        barter:3,
        combat:10,
        medicine:9,
        speech:7,
        tinkering:16
      }
    }
    switch(this.perks){
      case "Silver-Tongued":
        skills.barter += 7;
        skills.speech += 7;
        break;
      case "Outdoors Enthusiast":
        skills.combat += 7;
        skills.medicine += 7;
        break;
      case "Lucky Break":
        currency += 100;
        equipment.flashlight.amount += 1;
        break;
      case "Game Modder":
        skills.tinkering += 7;
        parts += 50;
        break;

      default: break;
    }
  }

}
let player;

// Body ("main method")

function main(){
  let gameHTML = "<h2>" + player.name + "</h2>";
  gameHTML += "<h3> Currency: " + currency + "</h3>";


  document.getElementById("start").innerHTML = gameHTML;
}


// Methods
function initialize(){
  const name = document.getElementById("player_name").value;
  const specialization = document.getElementById("player_specialization").value;
  const perk = document.getElementById("player_perk").value;
  player = new Player(name, specialization, perk);
  player.initializePlayer();
  main();
}
