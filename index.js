
function writeCards(namesArray, eventName) {
    
    const thankYouMessages = [];
  
    
    for (let i = 0; i < namesArray.length; i++) {
      
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      
      thankYouMessages.push(message);
    }

    return thankYouMessages;
  }
  
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
   