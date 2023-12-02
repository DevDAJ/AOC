import { Part1, Part2 } from "./day_2";

console.log('\x1b[2J');


if (Bun.argv.includes('part1'))
    console.log(Part1());
if (Bun.argv.includes('part2'))
    console.log(Part2());

