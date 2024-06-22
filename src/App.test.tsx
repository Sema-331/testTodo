import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Form from './components/Form';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

describe('all tests', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/form/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('test input change', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input1 = screen.getByPlaceholderText('text1');
    const input2 = screen.getByPlaceholderText('text2');
    const btn = screen.getByRole('button', { name: 'Submit' });
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    fireEvent.change(input1, { target: { value: 'pidor' } });
    fireEvent.change(input2, { target: { value: 'dima' } });
    fireEvent.click(btn);
    expect(await screen.findByText('pidor')).toBeInTheDocument();
    expect(await screen.findByText('dima')).toBeInTheDocument();
  });
});
