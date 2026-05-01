import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const Notes = () => {
	const notes = useSelector((state) => state.notes.notes);

	return (
		<div className="mt-6">
			<h2 className="mb-6 text-2xl font-bold text-indigo-300">
				📝 Your Notes
			</h2>

			<div className="grid grid-cols-1 gap-4">
				{notes &&
					notes.map((note, index) => {
						return <Note note={note} key={index} />;
					})}
			</div>
		</div>
	);
};

export default Notes;