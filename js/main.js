class Player
{
    constructor(name,symbol,gamesPlayed){
        this.name = name;
        this.symbol = symbol;
        this.points = 0;
        this.gamesPlayed = 0;
    }
    addPoints(nrOfPoints){
        this.points += nrOfPoints
    }
    addGames(){
        this.gamesPlayed += 1
    }
}
const playerOne = {
    name: 'gert',
    symbol: 'X',
    points: 0,
    games: 0
}
const pOne = new Player('henk','O');
const pTwo = new Player('Piet','Q');
pOne.addPoints(30)
console.log(pOne)
console.log(pOne.name);
console.log(pTwo.symbol);


