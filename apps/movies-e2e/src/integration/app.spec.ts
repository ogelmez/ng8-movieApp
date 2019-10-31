import { getGreeting } from '../support/app.po';

describe('movies', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to movies!');
  });
});
