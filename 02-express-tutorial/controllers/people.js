const { people } = require ('../data')

// Function to ADD a new person
const addPerson = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
 };

// Function to GET all people
const getPeople  = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

// Function to GET BY ID
const getPersonById = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const person = people.find((person) => person.id === idToFind);
    if (!person) {
        return res.status(404).json({ message: `No person with ID ${idToFind}`});
    }
    res.status(200).json({ success: true, data: person });
};

// Function to UPDATE a person
const updatePerson = (req, res) => {
    const personId = parseInt(req.params.id);
    const { name } = req.body;
    const person = people.find((person) => person.id === personId)
    if (!person) {
        res.status(404).json({ success: false, message: `Person with id ${req.params.id} not found` });
    } else {
        person.name = name;
        res.status(200).json({ success: true, data: person });
    }
};

// Function to DELETE a person by ID
const deletePerson = (req, res) => {
    const personId = parseInt(req.params.id, 10);
    const personIndex = people.findIndex(p => p.id === personId);
    if (personIndex < 0) {
        return res.status(404).json({ message: "Person not found" });
    }
    people.splice(personIndex, 1); 
    return res.status(200).json({ success: true, data: people });
};

module.exports = {
    addPerson,
    getPeople,
    getPersonById,
    updatePerson,
    deletePerson,
}