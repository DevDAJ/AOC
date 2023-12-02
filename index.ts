import { Part1, Part2 } from "./2023/day_2";

console.clear();


if (Bun.argv.includes('part1')){
    console.log(Part1());    
}
if (Bun.argv.includes('part2'))
    console.log(Part2());

