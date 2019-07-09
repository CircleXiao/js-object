/**
 *  编程程序，完成下列需求：
  - 创建一个空对象，变量名为user；
  - 添加一个name属性，并设置值为John；
  - 添加一个surname属性，并设置其值为Mike；
  - 将name属性的值改为Peter;
  - 删除user的name属性
 */
var user = {};
console.log(user);

user.name = 'John';
console.log(user);

user.surname = 'Mike';
console.log(user);

user.name = 'Peter';
console.log(user);

delete user.name;
console.log(user);



