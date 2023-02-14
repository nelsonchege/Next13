import Link from "next/link";
import styles from "./Notes.module.css";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records"
  );
  const data = await res.json();
  return data?.items;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className={styles.grid}>
      {notes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

function Note({ note }) {
  return (
    <Link href={`/notes/${note.id}`}>
      <div className={styles.note}>
        <h2>{note.title}</h2>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </Link>
  );
}
