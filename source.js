// JavaScript source code

const getRandomInt = max => {
    return Math.floor(Math.random() * max)
};

let randomAdjective = ['clumsy', 'cowardly', 'rude', 'nutty', 'tense', 'dashing', 'cute', 'giddy', 'funny', 'glorious'];
let randomPeople = ['Nome', 'Uncle', 'Man', 'Woman', 'Elf', 'Postman', 'Worker', 'Sister', 'Brother', 'Writer'];
let randomVerb = ['Jump ropes', 'Stretchs', 'Swims', 'Falls', 'Screams', 'Writes', 'Skips', 'Claps their hands', 'Smiles', 'Shrugs'];

let randomNum1 = getRandomInt(10);
let randomNum2 = getRandomInt(10);
let randomNum3 = getRandomInt(10);

console.log('A ' + randomAdjective[randomNum1] + ' ' + randomPeople[randomNum2] + ' ' + randomVerb[randomNum3] + '.')