const express = require("express")
const router = express.Router()
const {
    getContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} = require("../controllers/contactController")

router.route('/').get(getContacts)

router.route('/:id').get(getContactById)

router.route('/').post(createContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)

module.exports = router