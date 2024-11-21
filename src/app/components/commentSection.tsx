"use client";

import { useState } from "react";

import React from 'react'

const CommentSection = () => {

  const [input, setInput] = useState<string>('');
  const [allComments, setAllComments] = useState<string[]>([]);


  function addComment() {
    if (input.trim()) {
      setAllComments([input, ...allComments]);
      setInput('');
    }
  };

  function deleteComment(index: number) {
    const updateVal = allComments.filter((value, i: number) => i !== index)
    setAllComments(updateVal)
  }


  return (
    <div className="my-6">
      <h3 className="text-2xl font-bold text-center mb-4">Comments</h3>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-800 p-3 rounded-lg space-y-3 sm:space-y-0">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full sm:flex-grow bg-transparent text-gray-300 focus:outline-none p-2 rounded-md placeholder-gray-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="w-full sm:w-auto text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 sm:ml-3"
            onClick={addComment}
          >
            Send
          </button>
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {allComments.map((commentVal, i: number) => (
          <li
            key={i}
            className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-800 p-3 rounded-lg space-y-3 sm:space-y-0 sm:space-x-4"
          >

            <div className="flex-grow text-gray-300">
              <p>{commentVal}</p>
            </div>

            <button
              onClick={() => deleteComment(i)}
              className="text-red-500 hover:text-red-700 font-semibold self-start sm:self-center"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default CommentSection