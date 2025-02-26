const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

/*
//works but leaves undefined where it doesn't find an even number
const evenNums = nums.map((nums) => {
    if(nums % 2 == 0){
        return nums
    }
})
*/

const evenNums = nums.filter((nums) => nums % 2 == 0)
console.log(evenNums);
