function changeText(){
    var array = ["Text 1","Text 2", "Text 3", "Text 4", "Text 5"]
    var num = getRandomNumberBetween(0,array.length - 1)
    console.log("Index: ", num)
    document.getElementById("heading").innerHTML = array[num];
}
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}