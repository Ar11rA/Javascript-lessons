var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredNumbers = numberArray.filter(function(numberArray){
    return numberArray % 2 == 0;
})
console.log(filteredNumbers);