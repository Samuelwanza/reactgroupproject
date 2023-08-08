import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteRequest, getRequest, postRequest } from '../../services/apiService';

let AppId = localStorage.getItem('AppId');
if (!AppId) {
  const getId = async () => {
    AppId = await postRequest('');
    localStorage.setItem('AppId', AppId);
  };
  getId();
}

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await getRequest(`${AppId}/books`);
    return response || {};
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId, { rejectWithValue }) => {
    try {
      await deleteRequest(`${AppId}/books/${bookId}`);
      return bookId;
    } catch (err) {
      return rejectWithValue('failed to remove book.');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (data, { rejectWithValue }) => {
    try {
      data.item_id = (Math.random() * 100000).toFixed(0);
      await postRequest(`${AppId}/books`, data);
      return data;
    } catch (err) {
      return rejectWithValue('failed to add book.');
    }
  },
);

const initialState = {
  books: [],
  work: null,
  bookInProcess: null,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.work = 'FetchBook';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const parsedBooks = Object.keys(action.payload).reduce((acc, key) => (
          [...acc, { ...action.payload[key][0], item_id: key }]
        ), []);
        state.books = parsedBooks;
        state.work = null;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.work = false;
        state.error = 'Failed to fetch books from the API.';
      })
      .addCase(addBook.pending, (state) => {
        state.work = 'AddBook';
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
        state.work = null;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.work = null;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state, action) => {
        state.work = 'RemoveBook';
        state.bookInProcess = action.payload;
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
        state.work = null;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.work = null;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
