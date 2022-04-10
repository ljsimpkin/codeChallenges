const nums = [3, 5, 2, 7, 9, 8]
let target = 7
const memo = {}

for (i = 0; i < nums.length; i++) {
  if (nums[i] in memo) {
    console.log(nums[memo[nums[i]]], nums[i])
  } else {
    const valB = target - nums[i]
    memo[valB] = i
  }
}
console.log(memo)
