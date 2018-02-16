import {urls, user, apiUrls, monthName} from '../../index';
import {signin, signout, apiCall} from '../../helper';
import {urlVisited, visitIndexRoute} from '../../visitRoutes';

describe('Test roles page', () => {
  xit('roles list are on left panel', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_roles').should('be.visible');
    cy.get('.nav > #manage_roles').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('#accordion').should('be.visible');
  });
  xit('users list on right panel', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_roles').should('be.visible');
    cy.get('.nav > #manage_roles').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('#user_list').should('be.visible');
  });
  xit('click on Add New Role will open form to add new role, on submit of add role form will list newly added role on left panel', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_roles').should('be.visible');
    cy.get('.nav > #manage_roles').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('#role_button').should('be.visible');
    cy.get('#add_role').should('be.visible');
    cy.get('#add_role').click();
    cy.get('.dialog-add-role').should('be.visible');
    cy.get('#role_selector').should('be.visible');
    cy.get('#role_name').should('be.visible');
    cy.get('#role_desc').should('be.visible');
    cy.get('#role_submit_button').should('be.visible');
    cy.get('#role_name').type('Test_Role');
    cy.get('#role_desc').type('Test_Role description');
    cy.get('#role_submit_button').click();
    cy.get('#accordion #Test_Role_body').should('be.visible');
    cy.get('#accordion #Test_Role_body ##Test_Role_delete').should('be.visible');
    cy.get('#accordion #Test_Role_body ##Test_Role_delete').click();
    cy.get('#showSweetAlert').should('be.visible');
    cy.get('#sa-button-container').should('be.visible');
    cy.get('#sa-confirm-button-container').should('be.visible');
    cy.get('#sa-confirm-button-container').click();
    cy.get('#showSweetAlert').should('be.visible');
    cy.get('#sa-button-container').should('be.visible');
    cy.get('#sa-confirm-button-container').should('be.visible');
    cy.get('#sa-confirm-button-container').click();
  });
  it('on left panel, selecting new role from select box will change the role of the selected employee ', () => {
    visitIndexRoute();
    signin(user.admin);
    urlVisited(urls.baseUrl + urls.home);
    cy.get('.nav > #manage_roles').should('be.visible');
    cy.get('.nav > #manage_roles').click();
    cy.get('.app-body').should('be.visible');
    cy.get('.app-body .padding').should('be.visible');
    cy.get('#role_button').should('be.visible');
    cy.get('#add_role').should('be.visible');
    cy.get('#add_role').click();
    cy.get('.dialog-add-role').should('be.visible');
    cy.get('#role_selector').should('be.visible');
    cy.get('#role_name').should('be.visible');
    cy.get('#role_desc').should('be.visible');
    cy.get('#role_submit_button').should('be.visible');
    cy.get('#role_name').type('Test_Role');
    cy.get('#role_desc').type('Test_Role description');
    cy.get('#role_submit_button').click();
    cy.get('#accordion #Test_Role_body').should('be.visible');
    cy.get('#user_list').should('be.visible');
    cy.get('#deepak_list').should('be.visible');
    cy.get('#deepak_list #288_change').should('be.visible');
    cy.get('#288_change').click();
    cy.get('#Test_Role_val').should('be.visible');
    cy.get('#Test_Role_val').click();
    cy.get('#abhishek_span').should('be.visible').contains('Test_Role');
  });
});
