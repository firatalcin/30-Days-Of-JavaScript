console.log("Bölüm 2");

let nums = [1,2,3];
nums[0] = 10;
console.log(nums); 

nums = [1,2,3]; 
let numbers = [1,2,3];
console.log(nums == numbers); 

let userOne = {
    name:'Asabeneh',
    role:'teaching',
    counrty:'Finland'
}

let userTwo = {
    name:'Asabeneh',
    role:'teaching',
    counrty:'Finland'
}

console.log(userOne == userTwo);

numbers = nums;
console.log(numbers == nums);
userOne = userTwo;
console.log(userOne == userTwo);

