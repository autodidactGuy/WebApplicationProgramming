const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getNumber=()=>{
    readline.question('Enter number ', num => {
        if(num=="stop"){
            readline.close();
        }
        else{
            getNumber();
        }
    });
}

getNumber();