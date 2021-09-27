const messages = require('./messages.js');
console.log(" ");

allMessages = messages.allMessages;

//get a random element from an array
const getRandomElement = quotes => {
    
    const nElements = quotes.length;
    
    return quotes[Math.floor(Math.random()*nElements)];   
}

//Extracts a random element from an array and return it
const extractMovie = allMessages => {
   
    const nMovies = allMessages.length;
    //console.log(`There are ${nMovies} sets of quotes.`);

    if (allMessages.length === 1) return allMessages[0];
    
    //selecting the index that will be extracted
    const index = Math.floor(Math.random()*nMovies);
    //console.log(`Deciding to extract element number ${index +1}.`);
    
    const singleMovieQuotes = allMessages.splice(index,1);

    //console.log(singleMovieQuotes);
    //console.log(allMessages);

    return singleMovieQuotes[0];   
}

const main = () => {

    // putting in a random order the different movies
    const firstMovieQuotes = extractMovie(allMessages);
    const secondMovieQuotes = extractMovie(allMessages);
    const thirdMovieQuotes = extractMovie(allMessages);

    // Extracting a quote from each movie
    const firstQuote = getRandomElement(firstMovieQuotes);
    const secondQuote = getRandomElement(secondMovieQuotes);
    const thirdQuote = getRandomElement(thirdMovieQuotes);

    console.log(`Welcome to Jeff's Mixed Message project. Here is your random message : \n\n ${firstQuote} \n\n ${secondQuote} \n\n ${thirdQuote}`);
}

main();
