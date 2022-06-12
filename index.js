const names=["Charlie", "Samip", "Ali"];
function writeCards(names, event) {
    let messages=[]
    for (let i = 0; i < names.length; i++) {

        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;

        const message = `Thank you, ${names[i]} for the wonderful ${event} gift!`
        messages.push(message);
        console.log(i);
        
    }
    return messages;

}
writeCards(Guadalupe, surprise)
writeCards(Ollie, surprise)
writeCards(Aki, surprise)
writeCards(["Charlie", "Samip", "Ali"], "birthday");
function countDown(){

    let num = 10;
    
    while (num>=0){
    
    console.log(num)
    }
}       
