/**
 * This is used to play around with the JS call stack
 * Use in debug mode
 */

function takeShower() {
    return "Showering!";
}

function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood() {
    let items = ["Bread", "Eggs", "Banana", "Sausages"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ready for Work!");
}

wakeUp();