const longestOddLength = (words) => {
    let longest = ""; // start with an empty string
    
    for (let word of words) {
        if (word.length % 2 !== 0 && word.length > longest.length) { // check for odd length and if the current word is longer than the previously found longest word
            longest = word;
        }
    }

    return longest;
}

module.exports = longestOddLength;