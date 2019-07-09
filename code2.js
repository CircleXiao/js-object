// 计算下面fruit对象共有多少个水果
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

function count (obj) {
    var sum = 0;
    sum += obj.apple + obj.pear + obj.peach;
    return sum;
}

console.log(count(fruit));