describe('Check the user page with no backend', () => {
  const searchText = 'TEST';
  const userType = 'STUDENT';

  beforeEach(() => {
    const baseUrl = "http://localhost:3000/api";
   // http://localhost:3000/api/users/?size=10
    cy.interceptAndReturnFile("GET", `${baseUrl}/orgunits/`, "orgunits.json");
    //cy.interceptAndReturnFile("GET", `${baseUrl}/users/?size=5`, "users.json");
    cy.interceptAndReturnFile("GET", `${baseUrl}/users?size=10`, "users.json");
    cy.interceptAndReturnFile("GET", `${baseUrl}/users/?search=${searchText}`, "users.json");
    cy.interceptAndReturnFile("GET", `${baseUrl}/users/?userType=${userType}`, "users.json");
   /* &userType=&orgUnits=204&size=10
    /?$filter=roleName%20contains%20%27${searchText}%27&size=5`, "rolesSearch.json");

    cy.interceptAndReturnFile("GET", `${baseUrl}/users/?$filter=aggregatedRole eq 'true'&size=5`, "rolesAggregated.json");
    cy.interceptAndReturnFile("GET", `${baseUrl}/users/?$filter=aggregatedRole%20eq%20%27true%27&size=10`, "rolesMoreLines.json");*/
  });


  it('passes', () => {
    cy.visit('http://localhost:3000')
  })

  it('can type in search and clear input', () => {
    cy.goToHome();
    cy.get('#outlined-search').should('exist')
    cy.get('#outlined-search').should('have.value', '')
    cy.get('#showClearIcon').should('not.be.visible')
    cy.get('#outlined-search').type(searchText).should('have.value', searchText)
    cy.wait(1000)
    cy.get('#showClearIcon').should('be.visible')
    cy.get('#outlined-search').should('be.visible')
    cy.wait(500)
    cy.get('#showClearIcon').click();
    cy.wait(500)
    cy.get('#outlined-search').should('have.value', '')
  })

  it('should display filter type with default', () => {
    cy.goToHome();
    cy.get('#brukertype').should('exist')
    cy.get('#brukertype').should('have.value', '')
  //  cy.get('#brukertype').should('have.text', 'Alle')
    cy.get('#valg-brukertype').should('have.text', 'Brukertype')
  })

  it('Check select type (options, clickable)', () => {
    cy.goToHome();
    cy.get('#brukertype').should('exist')
    cy.get('#valg-brukertype').should('have.text', 'Brukertype')
    cy.wait(500)
    cy.get('#brukertype').click();
    cy.wait(500)
    cy.get('[data-value="STUDENT"]').click()
    cy.get('#brukertype').should('have.text', 'Elev')

    cy.get('#brukertype').click();
    cy.wait(500)
    cy.get('[data-value="EMPLOYEE"]').click()
    cy.get('#brukertype').should('have.text', 'Ansatt')

   // cy.get('#brukertype').click();
    cy.wait(500)
   // cy.get('[data-value=""]').click()
   // cy.get('#brukertype').should('have.text', 'Alle')
  })

  it('Check table (exists, has 5 rows)', () => {
    cy.goToHome();
    cy.get('#userTable')
        .should('be.visible')
        .find('tbody tr')
        .should('have.length', 5);
  });
/*

  it('Check Select Units (tooltip, dialog, dialog check)', () => {
    cy.get('#selectUnitsIcon').trigger('mouseover')
    cy.get('.MuiTooltip-popper').should('be.visible').contains('Select Units')
    cy.wait(500)
    cy.get('#selectUnitsIcon').click()
    cy.get('#unitsSelectDialog').should('be.visible')
    cy.wait(500)
    //TODO: check dialog has values, check off values, and return values
    cy.get('#unitDialogCancel').click();
    cy.get('.MuiTooltip-popper').invoke('hide')
    cy.get('.MuiTooltip-popper').should('not.be.visible')
  })


  it('Check aggregated (tooltip, icon change, new list)', () => {
    cy.get('#aggregatedTrue').trigger('mouseover')
    cy.get('.MuiTooltip-popper').should('be.visible').contains('Aggregated')
    cy.wait(1000)
    cy.get('.MuiTooltip-popper').invoke('hide')
    cy.get('.MuiTooltip-popper').should('not.be.visible')
    cy.get('#aggregatedTrue').should('be.visible').click()
    //TODO: check that list changes
    cy.get('#aggregatedFalse').should('be.visible')

  })

  it('Check table (exists, has 5 rows)', () => {
    cy.get('#rolesDataTable')
        .should('be.visible')
        .find('tbody tr')
        .should('have.length', 5);
  });

  //TODO: Check change page with all buttons
  it('Pagination (change count, change page, new lists)', () => {
    cy.get('#pagination')
        .should('be.visible')
    cy.get('.MuiTablePagination-select').should('exist').select('10')
  });


*/
})