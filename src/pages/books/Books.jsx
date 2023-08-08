import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../../components/BookCard';
import Style from './Books.module.css';
import BookForm from '../../Forms/book-form/BookForm';
import { removeBook, addBook, fetchBooks } from '../../redux/books/booksSlice';
import Loader from '../../components/Loader';

export default function Books() {
  const { books, work } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className={`${Style.BookPage}`}>
      <div className={`${Style.PageContainer}`}>
        {
         work !== 'FetchBook' && books.map((book) => (
           <BookCard
             key={book.item_id}
             category={book.category}
             title={book.title}
             author={book.author}
             removeBookHandler={() => dispatch(removeBook(book.item_id))}
           />
         ))
        }
        {
          work === 'FetchBook' && <Loader />
        }
      </div>
      <div className={`${Style.BookFormContainer}`}>
        <div className={`${Style.Spacer}`} />
        <BookForm addBookHandler={(data) => dispatch(addBook(data))} />
      </div>
    </div>
  );
}
