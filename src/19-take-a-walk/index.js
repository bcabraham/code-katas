/*
URL: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

Instructions:
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Examples
  toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
  toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

/*
Notes:
- 
*/

/*
Top Result:
*/

function isValidWalk(walk) {
  console.log(walk);

  let result = false;

  if (walk.length === 10) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < walk.length; i++) {
      const direction = walk[i];

      switch (direction) {
        case "n":
          y += 1;
          break;
        case "s":
          y -= 1;
          break;
        case "e":
          x += 1;
          break;
        case "w":
          x -= 1;
          break;
        default:
          break;
      }
    }

    console.log(x, y);

    result = x === 0 && y === 0;
  }

  return result;
}

module.exports = { isValidWalk };
