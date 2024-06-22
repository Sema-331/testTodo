import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IntArr, TodoListInt } from '../../Interfaces/Interface';

//Типы переменных
type TypeTodoState = {
  todoArr: IntArr[];
};

/****STORAGE****/

const initialState: TypeTodoState = {
  todoArr: [],
  //Переменные
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    handleAddItem(state, action) {
      state.todoArr.push(action.payload);
    },
  },
});

export const { handleAddItem } = todoSlice.actions;
export default todoSlice.reducer;
