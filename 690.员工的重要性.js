/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

// 先遍历构成员工的obj对象（减少运算）
// 然后递归即可

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  let obj = {}
  employees.forEach(item=>{
    obj[item.id]={
      data:item.importance,
      children:item.subordinates
    }
  })
  //console.log(obj)
  function _getImportance(id){
    let result = obj[id].data
    for(let item of obj[id].children){
      result += _getImportance(item)
    }
    return result
  }

  return _getImportance(id)
};

//console.log(GetImportance([[1,2,[2]], [2,3,[]]],2))

// @lc code=end

