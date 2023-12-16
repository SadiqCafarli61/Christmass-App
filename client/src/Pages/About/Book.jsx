import React from 'react'
import './Book.css'
import BookPage from './BookPage'
import BookEvent from './BookEvent'
import AttendBook from './AttendBook'

const Book = () => {
  return (
    <div>
        <BookPage />
        <BookEvent />
        <AttendBook />
    </div>
  )
}

export default Book