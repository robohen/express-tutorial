const express = require('express');
const { update } = require('tar');
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman )
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router





// //access to people 
// router.put('/:id', (req, res) =>{
//     const {id} = req.params
//     const{name} = req.body

//     const person = people.find((person)=> person.id === Number(id))
//     if(!person){
//         return res
//         .status(404)
//         .json({success: false,msg: `no person with id ${id}`})
//     }
//     const newPeople = people.map((person) =>{
//         if(person.id === Number(id)){
//             person.name = name
//         }
//         return person
//     })
//     res.status(200).json({ success: true, data: newPeople})
// })
// router.delete('/:id')

// module.exports = router