const input = await Bun.file('./2023/day_2/input.txt').text()

const sample1 =
`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`


const rgb = /(\d?\d blue|\d?\d red|\d?\d green)/g

export  function Part1(){
    const allId = input.split('\n').map((line)=> line.split(':')[0].split(' ')[1]);
    const failedId: string[] = []
    let acc = 0;
    input.split('\n').map((line)=>{
        line.split(";").map((cube)=> cube.match(rgb)?.map((color)=>{
            const total = {
                red: 12,
                green: 13,
                blue: 14
            };
            const [num, c] = color.split(" ")
            if (total[c as keyof typeof total] - parseInt(num) < 0){
                failedId.push(line.split(':')[0].split(' ')[1])
            }
        }
        ))
    })
    return allId.filter((id)=> !failedId.includes(id)).reduce((acc, id)=> acc + parseInt(id), 0)
}
export function Part2(){
    const acc: number[] = []
    input.split('\n').map((line)=>{
        const total = {
            red: 0,
            green: 0,
            blue: 0
        };
        line.split(";").map((cube)=> cube.match(rgb)?.map((color)=>{
            const [num, c] = color.split(" ")
            total[c as keyof typeof total] = Math.max(total[c as keyof typeof total], parseInt(num))
        }
        ))
        acc.push(Object.values(total).reduce((acc, num)=> acc * num, 1))
    })
    return acc.reduce((acc, num)=> acc + num, 0)    
}
