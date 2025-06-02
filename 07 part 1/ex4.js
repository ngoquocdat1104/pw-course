const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Your height? \n', height => {
    let height_decimal = height - 100
    console.log(`Your optimum weight: ${height_decimal*9/10}kg`);
    console.log(`Your maximum weight: ${height_decimal}kg`);
    console.log(`Your minimum weight: ${height_decimal*8/10}kg`);
    readline.close();
});
