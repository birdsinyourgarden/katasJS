const directions = ['N', 'E', 'S', 'W'];

const moves = {
  'N': (x, y) => [x, y + 1],
  'E': (x, y) => [x + 1, y],
  'S': (x, y) => [x, y - 1],
  'W': (x, y) => [x - 1, y],
};

function turnLeft(currentDirection) {
  const index = directions.indexOf(currentDirection);
  return directions[(index + 3) % 4]; 
}

function turnRight(currentDirection) {
  const index = directions.indexOf(currentDirection);
  return directions[(index + 1) % 4]; 
}

function processRover(position, instructions, plateauSize) {
  let [x, y, direction] = position.split(" ");
  x = parseInt(x);
  y = parseInt(y);

  for (let instruction of instructions) {
    if (instruction === 'L') {
      direction = turnLeft(direction);
    } else if (instruction === 'R') {
      direction = turnRight(direction);
    } else if (instruction === 'M') {
      const moveFunc = moves[direction];
      if (moveFunc) {
        const [newX, newY] = moveFunc(x, y);
        if (newX >= 0 && newX <= plateauSize[0] && newY >= 0 && newY <= plateauSize[1]) {
          x = newX;
          y = newY;
        }
      } else {
        console.error(`Dirección desconocida: ${direction}`);
      }
    }
  }
  return `${x} ${y} ${direction}`;
}

function runRovers(input) {
  const lines = input.trim().split("\n");
  const plateauSize = lines[0].split(" ").map(Number);
  const output = [];

  for (let i = 1; i < lines.length; i += 2) {
    const position = lines[i];
    const instructions = lines[i + 1];
    const finalPosition = processRover(position, instructions, plateauSize);
    output.push(finalPosition);
  }

  return output.join("\n");
}

// Ejemplo de uso
const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

console.log(runRovers(input));

document.getElementById("runButton").addEventListener("click", () => {
    const input = document.getElementById("input").value;
    const output = runRovers(input);
    document.getElementById("output").textContent = output;
  });