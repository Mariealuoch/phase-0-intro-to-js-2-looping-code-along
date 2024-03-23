// Code your solutions in this file
const people=["Charlie","Sanip","Ali"];
function writeCards(people,suprise){
    const message = [];
    for(let i=0; i<people.length;i++){
        message.push(`Thank you, ${people[i]}, for the wonderful ${suprise} gift!`)
    }

    return message;
}
function countDown(){
    let i=0;
    while(i<11){
        console.log(i++)

    }
    return countDown;
}
