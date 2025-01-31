const friends = ['Michael', 'Steven', 'Peter'];

//Adds elements to the end of an array
friends.push('Jay');
console.log(friends);

//Adds elements to the beginning of an array
friends.unshift('John');
console.log(friends);

//Remove the last elements of an array
friends.pop();
console.log(friends);

//Remove the fast elements of an array
friends.shift();
console.log(friends);

//Position of an elements in an array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// includes (ES6) returns true if the element is in the array and false if it's not in the array, and uses strict equality.

friends.push(23);

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
console.log(friends.includes('23'));

if(friends.includes('Peter')) {
    console.log(`Peter is my friend`);
}




