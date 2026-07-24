
Var twoSum = function (nums, target) {
  let numToMemory = new Map();
  for (let i=0; i<nums.length; i++) {
    let complement = target - nums[i];
    if (numToMemory.has(complement)) {
      return [numToMemory.get(complement), i)];
              }
    numToMemory.set(nums[i], i)
  }
};
  
