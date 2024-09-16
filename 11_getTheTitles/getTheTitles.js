const getTheTitles = function(bookArray) {

    let titleArray = [];

    bookArray.forEach((book) => {
        titleArray.push(book.title);
    })

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
