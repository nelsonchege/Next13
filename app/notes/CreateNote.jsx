"use client";

import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent("");
    setTitle("");
  };
  return (
    <form onSubmit={createNote}>
      <h3>create a new note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button> Create Note</button>
    </form>
  );
}
