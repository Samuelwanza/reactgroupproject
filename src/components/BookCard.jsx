import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import Style from './BookCard.module.css';
import 'react-circular-progressbar/dist/styles.css';

function BookCard({
  title, category, author, removeBookHandler,
}) {
  const removeBook = ($e) => {
    $e.preventDefault();
    removeBookHandler();
  };

  return (
    <div className={`${Style.CardContainer}`}>
      <div className={`${Style.BookInfoContainer}`}>
        <h3 className={`${Style.BookCategory}`}>{category}</h3>
        <h2 className={`${Style.BookTitle}`}>{title}</h2>
        <p className={`${Style.BookAuthor}`}>{author}</p>
        <ul className={`${Style.ActionsContainer}`}>
          <li className={`${Style.Action}`}><a href="/" className={`${Style.ActionTag}`}>Comments</a></li>
          <li className={`${Style.Action}`}><a href="/" onClick={removeBook} className={`${Style.ActionTag}`}>Remove</a></li>
          <li className={`${Style.Action}`}><a href="/" className={`${Style.ActionTag}`}>Edit</a></li>
        </ul>
      </div>
      <div className={`${Style.ChapterProgressContainer}`}>
        <div className={`${Style.ProgressContainer}`}>
          <div className={`${Style.OvalProgress}`}>
            <CircularProgressbar value={60} />
          </div>
          <div className={`${Style.ProgressCountContainer}`}>
            <h3 className={`${Style.ProgressCount}`}>8%</h3>
            <p className={`${Style.ProgressStatus}`}>Completed</p>
          </div>
        </div>
        <div className={`${Style.ChapterContainer}`}>
          <p className={`${Style.ChapterInfo}`}>Current Chapter</p>
          <p className={`${Style.Chapter}`}>Current Chapter</p>
          <button type="button" className={`${Style.ProgressBtn}`}> Update Progress</button>
        </div>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeBookHandler: PropTypes.func.isRequired,
};
export default BookCard;
