//JSON - javascript object notation

//Set

//number
var num = 123456;
localStorage.setItem("number", num);

//string
var str = "Devendra";
localStorage.setItem("string", str);

//boolean
var bool = true;
localStorage.setItem("boolean", bool);

//object
var obj1 = {
  name: "Devendra",
  age: 30,
};
localStorage.setItem("object1", obj1);

var obj2 = {
  name: "SRK",
  age: 60,
};
var modifiedObj = JSON.stringify(obj2);
localStorage.setItem("object2", modifiedObj);

//array
var arr1 = [1, 2, 3, 4, 5];
localStorage.setItem("array1", arr1);

var arr2 = [6, 7, 8, 9, 0];
var modifiedArray = JSON.stringify(arr2);
localStorage.setItem("array2", modifiedArray);
