import React  from "react";
import {render, fireEvent} from '@testing-library/react';
import Login from '../components/Login'
import { mount } from '@cypress/react';
import App from '../components/App';


// it ("renders",() =>{
//   const{queryByTestId} = render (<Login/>)

//   expect(queryByTestId("name")).toBeTruthy()
// })


it('Test app', () => {
  mount(<App />);
  cy.get('h1').contains('/learn react/i');
});

it('Wrong login', () => {
  mount(<Login />);

  cy.get('#username')
  .type('bad_username');

  cy.get('#password')
  .type('bad_password');

  cy.get('.MuiButtonBase-root').click();
  
  cy.get('#password-helper-text')
  .contains('Incorrect username or password');
  
});

it('Enfant', () => {
  mount(<Login />);

  cy.get('#username')
  .type('enfant0');

  cy.get('#password')
  .type('enfant0');

  cy.get('.MuiButtonBase-root').click();
});