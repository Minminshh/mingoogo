var longestConsecutive = function(nums){
  let numsToMemory = new Set(nums)
  let longestStreak = 0;
  for (let currentNum of numsToMemory) {
  if (numsToMemory.has(currentNum-1)) continue;
  let currentStreak = 1;
  while (numsToMemory.has(currentNum+1)) {
  currentNum++;
  currentStreak++;
  }
  longestStreak = Math.max (longestStreak, currentStreak);
}
return longestStreak;
};
