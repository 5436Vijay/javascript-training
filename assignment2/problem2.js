const readline = require('readline');

let rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('What is your age? ', (age) => {                                       
    rl.question('What is your name? ', (name) => {       
        rl.question('What is your number? ', (number) => {                    
            console.log('Your age is: ', age);
            console.log('Your name is: ' , name);
            console.log('Your number is: ' , number);
            rl.close();  

              })
         })
});

          
                
                    

