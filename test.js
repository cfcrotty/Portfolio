stringToReplace = "shsdfhsh'sdasda.eqweqwe\"32423";
var desired = stringToReplace.replace(/[^\w\s]/gi, '');
console.log(desired);