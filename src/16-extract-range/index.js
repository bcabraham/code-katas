/*
URL: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

Instructions:
Range Extraction

A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 

!!! The range includes all integers in the interval including both endpoints. 
!!! It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")


Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

*/

/*
Notes:
- 
*/

/*
Top Result:
*/

// function solution(list) {
//   let data = {
//     rangeStart: null,
//     rangeEnd: null,
//     rangeCount: 0,
//     result: ""
//   };

//   let result = "";

//   list.reduce((prev, curr, i) => {
//     let diff = Math.abs(prev - parseInt(curr));
//     console.log(prev, curr, diff, i);

//     if (i === 1) {
//       result += prev;
//     }

//     if (diff === 1) {
//       if (data.rangeCount === 0) {
//         data.rangeStart = prev;
//       }
//       data.rangeEnd = curr;

//       data.rangeCount++;
//     } else if (data.rangeCount > 0) {

//     }
//     else {
//       result += "," + curr;
//     }

//     return curr;
//     // if (i === list.length - 1) {
//     //   if (prev.isRange) {
//     //     prev.result += "" + Math.abs(prev.curr);
//     //   } else {
//     //     prev.result += "," + curr;
//     //   }
//     // } else if (i > 0) {
//     //   let diff = Math.abs(prev.lastValue - parseInt(curr));

//     //   console.log(prev, curr, diff);

//     //   if (diff !== 1) {
//     //     if (prev.isRange) {
//     //       prev.result += "" + Math.abs(prev.lastValue);
//     //     }
//     //     prev.result += "," + curr;
//     //     prev.isRange = false;
//     //   } else if (!prev.isRange) {
//     //     prev.isRange = true;
//     //     prev.result += "-";
//     //   }
//     // } else {
//     //   // first value
//     //   prev.result += curr;
//     // }

//     // prev.lastValue = parseInt(curr);

//     // return prev;
//   });
//   // list.map((value, index, array) => {
//   //   let result = 0;
//   //   if (index > 0) {
//   //     result = parseInt(value) - parseInt(array[index - 1]);
//   //   }

//   //   return result;
//   // });

//   // [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
//   console.log(list, data, result, "-6,-3-1,3-5,7-11,14,15,17-20");

//   return data;
// }

function solution(list) {
  let result = "";
  let i = 1;

  let previous;
  let current;
  let stack = [];

  stack.push(list[0]);
  while (i <= list.length) {
    previous = list[i - 1];
    current = list[i] || 0;

    if ((Math.abs(previous - current) || 0) === 1) {
      stack.push(current);
    } else if (stack.length >= 3) {
      result += "," + stack.shift() + "-" + stack.pop();
      stack = [current];
    } else {
      result += "," + stack.join(",");
      stack = [current];
    }
    // console.log(previous, current, stack, result, i);

    i++;
  }

  return result.substring(1);
}

module.exports = {solution};
