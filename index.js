const originalNumbers1 = [2, 4, 6, 8, 10];
console.log(originalNumbers1.map(number => number * 2));



const originalWords = ['apple', 'banana', 'cherry'];
console.log(originalWords.map(word => word.toUpperCase()));



const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
];
console.log(users.map(user => user.name));



const originalNumbers2 = [4, 9, 16, 25];
console.log(originalNumbers2.map(number => Math.sqrt(number)));



const temperaturesInCelsius = [25, 30, 15, 20];
console.log(temperaturesInCelsius.map(celcius => (celcius * 9/5) + 32));



const originalNumbers3 = [1, 2, 3, 4, 5];
console.log(originalNumbers3.map((number) => {
    if (number % 2 === 0){
        return Math.pow(number, 2)
    } else {
        return number;
    }
}));



const rectangles = [
    { width: 3, height: 5 },
    { width: 4, height: 8 },
    { width: 2, height: 6 }
];
console.log(rectangles.map(rectangle => rectangle.width * rectangle.height));


const names = ['John Doe', 'Alice Smith', 'Bob Johnson'];
console.log(names.map((initial) => {
    const [firstName, lastName] = initial.split(' ');
    return firstName.charAt(0) + lastName.charAt(0);
}))