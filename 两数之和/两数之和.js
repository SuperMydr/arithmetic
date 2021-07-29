//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
//
// 你可以按任意顺序返回答案。
//
//
//
// 示例 1：
//
//
//输入：nums = [2,7,11,15], target = 9
//输出：[0,1]
//解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
//
//
// 示例 2：
//
//
//输入：nums = [3,2,4], target = 6
//输出：[1,2]
//
//
// 示例 3：
//
//
//输入：nums = [3,3], target = 6
//输出：[0,1]
//
//
//
//
// 提示：
//
//
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// 只会存在一个有效答案
//
//
// 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
// Related Topics 数组 哈希表
// 👍 11677 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 最直观的方法，循环遍历数组，直到找出符合题目要求的答案。
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
    return [];
    // 首先上诉执行错误，题干里存在一个关键问题，同一个元素不会出现两次，但是按照上诉的的写法如果nums[i]==target/2 则会出现return[i,i]的情况，不符合题意。
    // 更改如下

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
    return [];
    // O(1)常数阶 < O(logn)对数阶 < O(n)线性阶 < O(n2)平方阶 < O(n3)(立方阶) < O(2n) (指数阶)
    // 上诉算法的时间复杂度为O(n²)
    // 时间复杂度小于O(n²) 最直白的想法就是一次循环完成题目要求
    // 一次循环完成要求的话，意味着在我们每次循环的时候，都需去进行比较，并且记录下数组下标。
    let t=[],k=[];
    for(let i=0;i<nums.length;i++){
        if(t.indexOf(target-nums[i])!=-1){
            return [i,k[t.indexOf(target-nums[i])]]
        }else{
            t.push(nums[i])
            k.push(i)
        }
    }
    // 利用map 数据结构完成简化
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i]
        }else{
            map.set(nums[i],i) // 遍历一遍将数据里面的数据全部存入到map 中
        }
        // 每次存的时候进行判断 当前要存的数 + map里面已经存的任意一个数，是否==target 等于的话，则满足题目要求
    }
};
//leetcode submit region end(Prohibit modification and deletion)
