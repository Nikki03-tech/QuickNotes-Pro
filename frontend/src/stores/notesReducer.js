import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

const initialState = {
	loading: false,
	error: null,
	notes: [],
	createForm: {
		title: "",
		description: "",
	},
	updateForm: {
		_id: null,
		title: "",
		description: "",
	},
};

// FETCH NOTES
export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
	const res = await axios.get("/api/notes");
	return res.data.notes;
});

// CREATE NOTE
export const createNote = createAsyncThunk(
	"notes/createNote",
	async (noteData) => {
		const res = await axios.post("/api/notes", noteData);
		return res.data.note;
	}
);

// UPDATE NOTE
export const editNote = createAsyncThunk(
	"notes/editNote",
	async ({ id, noteData }) => {
		const res = await axios.put(`/api/notes/${id}`, noteData);
		return res.data.note;
	}
);

// DELETE NOTE
export const removeNote = createAsyncThunk(
	"notes/removeNote",
	async (id) => {
		await axios.delete(`/api/notes/${id}`);
		return id;
	}
);

export const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		clearNotes: (state) => {
			state.notes = [];
		},
		setCreateForm: (state, action) => {
			state.createForm = action.payload;
		},
		resetCreateForm: (state) => {
			state.createForm = initialState.createForm;
		},
		setUpdateForm: (state, action) => {
			state.updateForm = action.payload;
		},
		resetUpdateForm: (state) => {
			state.updateForm = initialState.updateForm;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNotes.fulfilled, (state, action) => {
				state.notes = action.payload;
			})
			.addCase(createNote.fulfilled, (state, action) => {
				state.notes.push(action.payload);
			})
			.addCase(editNote.fulfilled, (state, action) => {
				state.notes = state.notes.map((note) =>
					note._id === action.payload._id ? action.payload : note
				);
			})
			.addCase(removeNote.fulfilled, (state, action) => {
				state.notes = state.notes.filter(
					(note) => note._id !== action.payload
				);
			});
	},
});

export const {
	clearNotes,
	setCreateForm,
	resetCreateForm,
	setUpdateForm,
	resetUpdateForm,
} = notesSlice.actions;

export default notesSlice.reducer;
