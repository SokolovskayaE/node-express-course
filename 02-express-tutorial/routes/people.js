const express = require('express');
const router = express.Router();
const { addPerson, getPeople, getPersonById, updatePerson, deletePerson, } = require("../controllers/people.js");

// POST /api/v1/people
router.post('/', addPerson);

// GET /api/v1/people
router.get('/', getPeople);

// GET /api/v1/people/:id
router.get("/:id", getPersonById);

// PUT /api/v1/people/:id
router.put("/:id", updatePerson);

// DELETE /api/v1/people/:id
router.delete("/:id", deletePerson);

module.exports = router