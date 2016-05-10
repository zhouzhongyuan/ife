function $(id){
    return document.getElementById(id);
};
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
var city = $('aqi-city-input').value;
var aqi = $('aqi-value-input').value;
    aqiData[city] = aqi;
}

function renderTd(trEl,type,text){
    var el = document.createElement(type);
    var textEl = document.createTextNode(text);
    el.appendChild(textEl);
    trEl.appendChild(el);
};

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    $('aqi-table').innerHTML = '';
    var el;
    for(var i in aqiData){
        var trEl =  document.createElement('tr');
        renderTd(trEl, 'td',i);
        renderTd(trEl, 'td',aqiData[i]);
        renderTd(trEl, 'td','删除');
        $('aqi-table').appendChild(trEl)
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
    // do sth.
    if(e.target.innerText === '删除'){
        //find the city name
        var city = e.target.parentNode.childNodes[0].innerText;
        console.log(city);
        delete aqiData[city];
        // delete this line
    }
    renderAqiList();
}

function init() {
        $('add-btn').addEventListener('click',function(){
            "use strict";
            addBtnHandle();
        });
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    $('aqi-table').addEventListener('click',delBtnHandle)

}

//init();
document.addEventListener('DOMContentLoaded',init);
