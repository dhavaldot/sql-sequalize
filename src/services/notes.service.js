import { NotesModel } from '../models';

const findAll = async () => {
	const result = await NotesModel.findAll();
	return result;
};

const insertOne = async (body) => {
	const result = await NotesModel.create(body);
	return result;
};

const findOne = async (filter) => {
	const result = await NotesModel.findOne({ where: filter });
	return result;
};

export default {
	findAll,
	findOne,
	insertOne,
};
