function writeCards(names) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
       messages.push(message); 
    }
    return messages;
}
console.log(writeCards(['Guadalupe', 'Ollie', 'Aki']));

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--
    }
    return i;
}
console.log(countDown(10));