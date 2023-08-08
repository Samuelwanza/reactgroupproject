import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Style from './BookForm.module.css';
import Loader from '../../components/Loader';

function BookForm({ addBookHandler }) {
  const [form, setForm] = useState({ title: '', author: '', category: '' });
  const { work } = useSelector((state) => state.book);

  const handleInput = ($e) => {
    setForm((pState) => ({ ...pState, [$e.target.name]: $e.target.value }));
  };
  const addNewBook = ($e) => {
    $e.preventDefault();
    addBookHandler(form);
  };

  return (
    <div className={`${Style.FormContainer}`}>
      <h1 className={`${Style.FormTitle}`}>add new book</h1>
      <form action="" method="post" onSubmit={addNewBook} className={`${Style.Form}`}>
        <input type="text" name="title" placeholder="Book Title" onInput={handleInput} className={`${Style.FormInput}`} />
        <input type="text" name="author" placeholder="Book Author" onInput={handleInput} className={`${Style.FormInputAuthor}`} />
        <select className={`${Style.FormCategory}`} onChange={handleInput} value={form.category} name="category" placeholder="Category" id="">
          <option value="catagory 1">Cat 1</option>
          <option value="catagory 2">Cat 2</option>
          <option value="catagory 3">Cat 3</option>
          <option value="catagory 4">Cat 4</option>
        </select>
        <button className={`${Style.FormBtn}`} disabled={work === 'AddBook'} type="submit">
          {
            work !== 'AddBook' && (
              <p>Add Book</p>
            )
          }
          {
            work === 'AddBook' && <Loader />
          }
        </button>
      </form>
    </div>
  );
}

BookForm.propTypes = {
  addBookHandler: PropTypes.func.isRequired,
};

export default BookForm;
