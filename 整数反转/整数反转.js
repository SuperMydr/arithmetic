//给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
//
// 如果反转后整数超过 32 位的有符号整数的范围 [−231, 231 − 1] ，就返回 0。
//假设环境不允许存储 64 位整数（有符号或无符号）。
//
//
//
// 示例 1：
//
//
//输入：x = 123
//输出：321
//
//
// 示例 2：
//
//
//输入：x = -123
//输出：-321
//
//
// 示例 3：
//
//
//输入：x = 120
//输出：21
//
//
// 示例 4：
//
//
//输入：x = 0
//输出：0
//
//
//
//
// 提示：
//
//
// -231 <= x <= 231 - 1
//
// Related Topics 数学
// 👍 2956 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 1、边界的校验
    // 2、正负数处理
    // 3、可以通过对x的/10 来进行遍历
    let isNegative = false;
    if(x<0){
        isNegative = true;
        x = Math.abs(x)
    }else{
        isNegative = false;
    }
    let result='';
    let a = x%10
    let b = parseInt(x/10)
    while(b>0){
        result = result+a;
        x = parseInt(x/10)
        a = x%10
        b = parseInt(x/10)
    }
    result = result+a;
    if(Math.pow(-2,31)<result&&result<Math.pow(2,31)){
        return isNegative==true?-parseInt(result):parseInt(result)
    }else{
        return 0;
    }
    // 将x 转换成字符串再进行反转处理
    if(x<0){
        isNegative = true;
        x = Math.abs(x)
    }else{
        isNegative = false;
    }
    let c='';
    x = ''+Math.abs(x)
    // 利用String split() 与Array[].reverse()方法来达成字符串的反转x = x.split('').reverse().join('') //即完成字符串的反转
    for(let i=x.length-1;i>=0;i--){
        c = c+x[i]
    }
    if(Math.pow(-2,31)<parseInt(c)&&parseInt(c)<Math.pow(2,31)){
        return isNegative==true?-parseInt(c):parseInt(c)
    }else{
        return 0;
    }
    //可能还有存在的问题，就是关于int类型数据边界的问题
};
//leetcode submit region end(Prohibit modification and deletion)
