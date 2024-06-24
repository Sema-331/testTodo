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
  test('test mdoal', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const btn = screen.getByText(/UPDATE/i);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText(/this is modal/i)).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText(/this is modal/i)).not.toBeInTheDocument();
  });
  test('add and delete operations', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const btnAdd = screen.getByText('Submit');
    const input1 = screen.getByPlaceholderText('text1');
    const input2 = screen.getByPlaceholderText('text2');
    const btnDelete = screen.getByRole('button', { name: /moms/i });
    expect(btnDelete).toBeInTheDocument();

    expect(btnAdd).toBeInTheDocument();
    expect(screen.queryByText('lol')).not.toBeInTheDocument();
    expect(screen.queryByText('kek')).not.toBeInTheDocument();

    fireEvent.change(input1, { target: { value: 'lol' } });
    fireEvent.change(input2, { target: { value: 'kek' } });
    fireEvent.click(btnAdd);

    expect(await screen.findByText('lol')).toBeInTheDocument();
    expect(await screen.findByText('kek')).toBeInTheDocument();
    // expect(await screen.findByText(/moms/i)).toBeInTheDocument();
    expect(await screen.findByText(/dog/i)).toBeInTheDocument();

    // fireEvent.click(btnDelete);

    // expect(screen.queryByText('lol')).not.toBeInTheDocument();
    // expect(screen.queryByText('kek')).not.toBeInTheDocument();
  });
  test('gjfdks', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const elem = screen.queryByText(/delectus aut autem/i);
    const btn = screen.getByText(/ADD ASYNC FN/i);
    const btn2 = screen.getByText(/ADD MODAL OPEN/i);
    expect(elem).not.toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(await screen.findByText(/delectus aut autem/i)).toBeInTheDocument();
    expect(
      await screen.findByRole('button', { name: 'dodo' })
    ).toBeInTheDocument();
    fireEvent.click(btn2);
    const btn3 = screen.getByRole('button', { name: /koko/i });
    expect(btn3).toBeInTheDocument();
    fireEvent.click(btn2);
    expect(
      screen.queryByRole('button', { name: /koko/i })
    ).not.toBeInTheDocument();
  });
});
