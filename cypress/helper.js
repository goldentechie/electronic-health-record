import { user, visitIndexRoute, urlVisited, urls } from './index';

export const signin = ( user )=>{
  visitIndexRoute();
  cy.get('#openLogin').click();
  urlVisited(urls.baseUrl+urls.login);
  cy.get('#usernameInput').type(user.username);
  cy.get('#passwordInput').type(user.password);
  cy.get('#loginButton').click();
}
export const signout = () =>{
  cy.get('#Logout').click();
  urlVisited(urls.baseUrl);
}