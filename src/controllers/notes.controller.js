import { NotesModel } from '../models';
import { noteService } from '../services';

const findAll = async (req, res) => {
	try {
		const result = await noteService.findAll();
		res.status(200).send({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error || error.message,
		});
	}
};

const findOne = async (req, res) => {
	const { query } = req;
	try {
		const result = await noteService.findOne(query);
		res.status(200).send({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error || error.message,
		});
	}
};

const savenotes = async (req, res) => {
	const { body } = req;

	try {
		//pending - checkbody joi schema

		const saveNotes = await noteService.insertOne(body);
		if (!saveNotes) throw new Error('Error while creating notes.');

		res.status(200).send({
			success: true,
			message: 'Notes Saved Successfully',
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error || error.message,
		});
	}
};

export default {
	findAll,
	findOne,
	savenotes,
};
