
Var twoSum = function (nums, target) {
  let numToMemory = new Map();
  for (let i=0; i<nums.length; i++) {
    let complement = target - nums[i];
    if (complement.has(numToMemory(complement)) {
      return [complement.get(numToMemory(complement), i)];
              }
    numToMemory.set(nums[i], i)
  }
};
  
