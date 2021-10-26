/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// 双指针

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let left = 0, right = 0;// left 为name的下标, right typed的下标
    while (left < name.length) {
        // 判断 left 与 right 指向的字符是否相同
        if (name[left] !== typed[right]) {
            return false;
        }
        // 判断name的下一个字符是否与当前字符相同
        if (name[left + 1] !== name[left]) {
            // 让 right 指针 指到连续重复字符中的最后一个字符
            while (typed[right] === typed[right + 1]) {
                right++;
            }
        }
        // 比对下一个字符
        left++;
        right++;
    }
    // 判断 right 指针是否遍历完了typed字符
    return right === typed.length
};
// @lc code=end

