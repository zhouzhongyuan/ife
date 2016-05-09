# 数组的迭代方法还是不少的
## every
```javascript
var arr = [1,2,3,4];
var everyResult = arr.every(function(item,index,array){
    return (item>2);
});
everyResult     //false
```

## filter 执行函数后，返回true的项组成的数组
```javascript
var arr = [1,2,3,4];
var everyResult = arr.filter(function(item,index,array){
    return (item>2);
});
everyResult     //[3,4]
```
## forEach 无返回值
## map 返回 执行函数结果
## some 返回true/false