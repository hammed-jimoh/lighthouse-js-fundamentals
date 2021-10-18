const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  //to define the origin(starting) position
  let position = [0, 0]

  //what to do when it see north (moves one step up Y axis +1) 
  //what to do when it see south (moves one step down Y axis -1)
  //what to do when it see west (moves one step left X axis -1) 
  //what to do when it see east (moves one step right X axis +1)
  
  for (let i = 0; i < moves.length; i++) {
    if(moves[i] === "north") {
      position[1] += 1;
    } else if (moves[i] === "west") {
      position[0] -= 1;
    } else if (moves[i] === "east") {
      position[0] += 1;
    } else if (moves[i] === "south") {
      position[1] -= 1;
    }
  }
  return position;
}

console.log(finalPosition(moves))

