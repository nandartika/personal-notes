import React from "react";
import { getNote } from "../utils/local-data";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  return (
    <section>
      <h3>{note.title}</h3>
      <p>{showFormattedDate(note.createdAt)}</p>
      <div>{note.body}</div>
    </section>
  );
}

export default DetailPage;
