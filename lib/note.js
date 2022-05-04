const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
        return note;
}


function validateNotes(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
        return true;
}

function filterByQuery(query, notes) {
    let filteredResults = notes;

    if (query.text) {
        filteredResults = filteredResults.filter(note => note.age === query.age);
    }
    if (query.title) {
        filteredResults = filteredResults.filter(note => note.name === query.name);
    }
    return filteredResults;
}

module.exports = {
    createNewNote,
    validateNotes,
    filterByQuery
};
