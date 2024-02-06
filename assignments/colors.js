const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// Using the join() method to create a single string separated by commas
const joinedString = colors.join(', ');
console.log('Joined string:', joinedString);

// Applying the splice() method to remove the second and third elements and replace them with 'purple' and 'pink'
colors.splice(1, 2, 'purple', 'pink');
console.log('After splice():', colors);

// Utilizing the copyWithin() method to copy elements from index 1 to index 3 to index 0
colors.copyWithin(0, 1, 4);
console.log('After copyWithin():', colors);

// Transforming all elements to uppercase using the toUpperCase() method
const uppercaseColors = colors.map(color => color.toUpperCase());
console.log('Uppercase colors:', uppercaseColors);

// Applying the find() method to find the first element that starts with 'b'
const startsWithB = colors.find(color => color.startsWith('b'));
console.log('First element starting with "b":', startsWithB);

// Applying the slice() method to create a new array selectedColors
const selectedColors = colors.slice(1, 4);
console.log('Selected colors:', selectedColors);
