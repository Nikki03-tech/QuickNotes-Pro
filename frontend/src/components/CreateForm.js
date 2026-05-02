import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addNote,
	resetCreateForm,
	setCreateForm,
} from "../stores/notesReducer";

axios.defaults.withCredentials = true;

const CreateForm = () => {
	const createForm = useSelector((state) => state.notes.createForm);
	const updateForm = useSelector((state) => state.notes.updateForm);
	const dispatch = useDispatch();

	const createNote = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post("/api/notes", createForm, {
				withCredentials: true,
			});

			dispatch(addNote(res.data.note));
			dispatch(resetCreateForm());
		} catch (error) {
			console.log(error.response?.data || error.message);
			alert("Failed to create note");
		}
	};

	const updateCreateFormField = (e) => {
		const { name, value } = e.target;
		dispatch(
			setCreateForm({
				...createForm,
				[name]: value,
			})
		);
	};

	return (
		<div>
			{!updateForm._id && (
				<div className="p-4 bg-white rounded shadow-md">
					<h2 className="mb-4 text-lg font-bold">Create Note</h2>

					<form onSubmit={createNote}>
						<input
							type="text"
							name="title"
							placeholder="Title"
							value={createForm.title}
							onChange={updateCreateFormField}
							className="w-full px-3 py-2 mb-4 border rounded"
							required
						/>

						<textarea
							name="description"
							placeholder="Description"
							value={createForm.description}
							onChange={updateCreateFormField}
							className="w-full px-3 py-2 mb-4 border rounded"
							required
						/>

						<button
							type="submit"
							className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
						>
							Create Note
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default CreateForm;
