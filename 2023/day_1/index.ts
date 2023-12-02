
const input = await Bun.file('./2023/day_1/input.txt').text()

const sample1 = 
`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

const sample2 = 
`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

var numberPattern = /\d+/g;

var str = /(?:one|two|three|four|five|six|seven|eight|nine|zero|\d)/g;
export  function Part1(){
    let total = 0;
    input.split('\n').map((line)=>{
        line.match(str);
        const numArr = line.match(numberPattern)?.join("").split("") ?? []
        total = total + parseInt(`${numArr?.[0] ?? '0'}${numArr[numArr.length-1]}`)
    })
    return total
}

const numStr = {
    one:"1",
    two:"2",
    three:"3",
    four:"4",
    five:"5",
    six:"6",
    seven:"7",
    eight:"8",
    nine:"9",
    zero:"0"
}
export function Part2(){
    let total = 0;
    input.split('\n').map((line)=>{
        // Replace all merged numbers with comma
        line =line.replace(/oneight/g, 'one, eight')
        line =line.replace(/fiveight/g, 'five, eight')
        line =line.replace(/twone/g, 'two, one')
        line = line.replace(/eightwo/g, 'eight, two')
        line =line.replace(/eighthree/g, 'eight, three')
        line =line.replace(/threeight/g, 'three, eight')
        line =line.replace(/sevenine/g, 'seven, nine')

        // Replace all number strings with numbers
        const numArr = line.match(str)?.map((num)=> numStr[num as keyof typeof numStr] ?? num) ?? []
        total = total + parseInt(`${numArr?.[0] ?? '0'}${numArr[numArr.length-1]}`)
    })
    return total
}
