/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare global {
    namespace Cypress {
        interface Chainable {
            goToHome: typeof goToHome
            apiInterceptUser: typeof apiInterceptUser
            apiInterceptOrg: typeof apiInterceptOrg

        }
    }
}

export function goToHome() {
    return cy.visit('http://localhost:3000');
}
Cypress.Commands.add('goToHome', goToHome)

export function apiInterceptUser() {
    return cy.intercept({
        method: 'GET',
        url: 'http://localhost:3000/api/users/?size=10',
    }, {statusCode: 200, fixture: 'users.json'});
}
Cypress.Commands.add('apiInterceptUser', apiInterceptUser)

export function apiInterceptOrg() {
    return cy.intercept({
        method: 'GET',
        url: 'http://localhost:3000/api/orgunits',
    }, {statusCode: 200, fixture: 'orgunits.json'});
}
Cypress.Commands.add('apiInterceptOrg', apiInterceptOrg)