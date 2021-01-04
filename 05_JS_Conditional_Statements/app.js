//if-else

let time = -10;
let wishMessage = '';
if (time >= 0 && time <= 12) {
    wishMessage = 'Good Morning';
}
else if (time > 12 && time <= 17) {
    wishMessage = 'Good Afternoon';
}
else if (time > 17 && time <= 23) {
    wishMessage = 'Good Evening';
}
else {
    wishMessage = 'Enter a Proper Time';
}
console.log(`${wishMessage} Friend`)



//Switch Statement

let day = new Date().getDay();
let today = '';
day = 5;
switch (day) {
    case 0:
        today = 'Sunday';
        break;

    case 1:
        today = 'Monday';
        break;

    case 2:
        today = 'Tuesday';
        break;

    case 3:
        today = 'Wednesday';
        break;

    case 4:
        today = 'Thursday';
        break;

    case 5:
        today = 'Friday';
        break;

    case 6:
        today = 'Saturday';
        break;


    default:
        today = 'Enter a Proper Day';
        break;

}

console.log(`Today is ${today}`);


//Animal
let animal = 'Cow';
switch (animal) {
    case 'Dog':
    case 'Cow':
    case 'Goat':
        console.log('This Animal will Go Into Noah\'s Ark');
        break;

    case 'spoon':
        console.log('This is not an Animal');

    default:
        console.log('This Animal Will Not Be In The Ark')

}