var petTypes = ['cat', 'dog', 'rat']
var petTypesLength = petTypes.length;
for (var i = 0; i < petTypesLength; i++){
    petTypes[i] = petTypes[i] + 's';
}
console.log(petTypes);