const dir = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
]

const simpleMaze = [
  //[0]
  "########E#",
  //[1]
  "#        #",
  //[2]
  "#S########",
]

const testMaze = [
  "########## #",
  "#        # #",
  "#        # #",
  "# ######## #",
  "#          #",
  "# ##########",
]


//returns a boolean
const recursive = (maze, wall, curr, end, seen, path) => {
  console.log(`------`)
  console.log(`curr: ${curr}`)
  console.log(`seen: ${seen}`)
  console.log(`path: ${path}`)
  console.log(`------`)

  console.log(`\n`)

  //base case

  //its out of bounds
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
    return false
  }

  //its a wall
  if (maze[curr.y][curr.x] === wall) {
    return false
  }

  //its the end
  if (curr.x === end.x && curr.y === end.y) {
    //because we are returning true, the last point was not pushed in
    path.push(end)
    return true
  }

  //its a path we've already taken
  if (seen[curr.y][curr.x]) {
    return false
  }

  // logic
  // check all four directionos
  // pre
  seen[curr.y][curr.x] = true
  path.push(curr)

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [dx, dy] = dir[i]

    if (recursive(maze, wall, { x: curr.x + dx, y: curr.y + dy }, end, seen, path)) {
      return true
    }
  }
  // post
  path.pop()
  return false
}

const main = (maze, wall, start, end) => {
  const path = []

  // initialize seen with false
  // seen is a copy of maze
  const seen = maze.map(pointedRow =>
    Array.from({ length: pointedRow.length }).fill(false)
  );

  recursive(maze, wall, start, end, seen, path)
  return path

}

// console.log(main(simpleMaze, "#", { x: 1, y: 2 }, { x: 8, y: 0 }))
console.log(main(testMaze, "#", { x: 10, y: 0 }, { x: 1, y: 5 }))
//answer
//[
//   { x: 10, y: 0 }, { x: 10, y: 1 },
//   { x: 10, y: 2 }, { x: 10, y: 3 },
//   { x: 10, y: 4 }, { x: 9, y: 4 },
//   { x: 8, y: 4 },  { x: 7, y: 4 },
//   { x: 6, y: 4 },  { x: 5, y: 4 },
//   { x: 4, y: 4 },  { x: 3, y: 4 },
//   { x: 2, y: 4 },  { x: 1, y: 4 },
//   { x: 1, y: 5 }
// ]

