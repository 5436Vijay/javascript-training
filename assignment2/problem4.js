
const readline = require('readline');

let x= readline.createInterface(
	   process.stdin, process.stdout);

x.question('Enter the number', (number) => {
    console.log(`Square of ${number} is:`, + ( number*number));
    x.close();
});
                    

