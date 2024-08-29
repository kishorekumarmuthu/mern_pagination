import express from 'express';
import { Doctors } from '../models/doctorModel.js';

const router = express.Router();

// Route for Get All Doctors from database
router.get('/', async (request, response) => {
  try {
    const data = await Doctors.find({});
    return response.status(200).json({
      count: data.length,
      data: data,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Save a new Doctor
// router.post('/', async (request, response) => {
//   console.log(request.body)
//   try {
//     if (
//       !request.body.firstName ||
//       !request.body.lastName
//     ) {
//       return response.status(400).send({
//         message: 'Send all required fields: First Name and Last Name',
//       });
//     }
//     const newDoctor = {
//       firstName: request.body.firstName,
//       lastName: request.body.lastName,
//     };

//     const newDoctor = await Doctors.create(newDoctor);

//     return response.status(201).send(newDoctor);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// Route for Get One Doctors from database by id
// router.get('/:id', async (request, response) => {
//   try {
//     const { id } = request.params;

//     const Doctors = await Doctors.findById(id);

//     return response.status(200).json(Doctors);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// Route for Update a Doctors
// router.put('/:id', async (request, response) => {
//   try {
//     if (
//       !request.body.firstName ||
//       !request.body.lastName
//     ) {
//       return response.status(400).send({
//         message: 'Send all required fields: firstName, lastName',
//       });
//     }

//     const { id } = request.params;

//     const result = await Doctors.findByIdAndUpdate(id, request.body);

//     if (!result) {
//       return response.status(404).json({ message: 'Doctor not found' });
//     }

//     return response.status(200).send({ message: 'Doctor updated successfully' });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// Route for Delete a Doctor
// router.delete('/:id', async (request, response) => {
//   try {
//     const { id } = request.params;
//     const result = await Doctors.findByIdAndDelete(id);
//     if (!result) {
//       return response.status(404).json({ message: 'Doctor not found' });
//     }
//     return response.status(200).send({ message: 'Doctor deleted successfully' });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

export default router;
