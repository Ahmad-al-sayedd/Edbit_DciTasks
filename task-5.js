/*
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"
Notes
Check the Resources tab for helpful hints.

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter

*/

const Obj = [
  { generation: -3, male: "great grandfather", female: "great grandmother" },
  { generation: -2, male: "grandfather", female: "grandmother" },
  { generation: -1, male: "father", female: "mother" },
  { generation: 0, male: "me", female: "me" },
  { generation: 1, male: "son", female: "daughter" },
  { generation: 2, male: "grandson", female: "granddaughter" },
  { generation: 3, male: "great grandson", female: "great granddaughter" },
];

function generation(x, y) {
  for (let key in Obj) {
    const { generation, male, female } = Obj[key];

    if (generation === x) {
      return y === "f" ? female : male;
    }
  }
}
console.log(generation(2, "m"));
