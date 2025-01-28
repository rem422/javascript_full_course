// switch statements use strict equality

const day = 'Monday';
switch (day) {
    case 'Monday': // day === "Monday"
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'Tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log(`Write code examples`);
        break;
    case 'Friday':
        console.log(`Record videos`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`No such day!`);
}

//same logic in if else statements
if(day === 'Monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'Tuesday') {
    console.log(`Prepare theory videos`);
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log(`Write code examples`);
} else if (day === 'Friday') {
    console.log(`Record videos`);
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`No such day!`);
}

