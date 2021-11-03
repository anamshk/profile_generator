const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames acceptable", (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question("List the activities you like doing?", (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    rl.question("What type of music you like to listen to?", (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      rl.question("What's your favourite meal?", (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);
        let para = `Name is ${answer1} \n Activites are ${answer2} \n Music is ${answer3} \n Favourite meal is ${answer4}`;
        console.log(para);
        rl.close();
      });
    });
  });
});