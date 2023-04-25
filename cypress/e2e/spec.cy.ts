describe('Check the user page with no backend', () => {
    const searchText = 'TEST';
    const userType = 'STUDENT';

    beforeEach(() => {
        const baseUrl = "http://localhost:3000/api";
        cy.interceptAndReturnFile("GET", `${baseUrl}/orgunits`, "orgunits.json");
        cy.interceptAndReturnFile("GET", `${baseUrl}/orgunits/orgTree`, "orgunits.json");
        cy.interceptAndReturnFile("GET", `${baseUrl}/users/?size=5`, "users.json");
        cy.interceptAndReturnFile("GET", `${baseUrl}/users/?search=${searchText}&orgUnits=36`, "users.json");
        cy.interceptAndReturnFile("GET", `${baseUrl}/users/?userType=${userType}`, "users.json");
        cy.interceptAndReturnFile("GET", `${baseUrl}/users`, "users.json");
        /* cy.interceptAndReturnFile("GET", `${baseUrl}/users/?$filter=aggregatedRole eq 'true'&size=5`, "rolesAggregated.json");
         cy.interceptAndReturnFile("GET", `${baseUrl}/users/?$filter=aggregatedRole%20eq%20%27true%27&size=10`, "rolesMoreLines.json");*/
    });


    it('Connect to localhost', () => {
        cy.visit('http://localhost:3000')
    })

    it('Check type in searchField, and clear input', () => {
        cy.goToHome();
        cy.get('#outlined-search').should('exist')
        cy.get('#outlined-search').should('have.value', '')
        cy.get('#showClearIcon').should('not.be.visible')
        cy.get('#outlined-search').type(searchText).should('have.value', searchText)
        cy.wait(1000)
        cy.get('#showClearIcon').should('be.visible')
        cy.get('#outlined-search').should('be.visible')
        cy.wait(1000)
        cy.get('#showClearIcon').click();
        cy.wait(1000)
        cy.get('#outlined-search').should('have.value', '')
    })

    it('Should display filter type with default label', () => {
        cy.goToHome();
        cy.get('#brukertype').should('exist')
        cy.get('#brukertype').should('have.value', '')
        //  cy.get('#brukertype').should('have.text', 'Alle')
        cy.get('#valg-brukertype').should('have.text', 'Brukertype')
    })

    it('Check select usertype (options, clickable)', () => {
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

        cy.get('#brukertype').click();
        cy.wait(500)
        //cy.get('[data-value=""]').click()
        //cy.get('#brukertype').should('have.text', 'Alle')
    })

    it('Check table (exists, has 5 rows)', () => {
        cy.goToHome();
        cy.get('#userTable')
            .should('be.visible')
            .find('tbody tr')
            .should('have.length', 5);
    });


    it('Check Select Units (tooltip, dialog, dialog check)', () => {
        cy.goToHome();
        cy.get('#selectUnitsIcon').trigger('mouseover')
        cy.get('.MuiTooltip-popper').should('be.visible').contains('Select Units')
        cy.wait(500)
        cy.get('#selectUnitsIcon').click()
        cy.get('#unitsSelectDialog').should('be.visible')
        cy.wait(500)
        cy.get('#expandIcon').should('be.visible')
        cy.wait(500)
        cy.get('#expandIcon').click()
        cy.get('#expandIcon').click()
        cy.wait(1000)
        cy.get('#expandIcon').click()
        cy.get('#expandMoreIcon').should('be.visible')
        cy.get('.MuiTreeItem-root').first().click();
        cy.get('#node-1').click()
        cy.wait(1000)
        cy.get('#closeDialog').click();
        cy.wait(1000)
        cy.get('.MuiTooltip-popper').invoke('hide')
        // cy.get('.MuiTooltip-popper').should('not.be.visible')
    })


    it('Pagination (select number of rows in table)', () => {
        cy.goToHome();
        cy.get('#pagination').should('be.visible')
        cy.get('.MuiTablePagination-select').should('exist').select('10')
        cy.wait(2000)
    });

    it('Pagination (iconButton go to "Next page")', () => {
        cy.goToHome();
        cy.get('#iconNextPage').should('exist')
        cy.wait(2000)
        const goToNextPage = () => {
            cy.get('#iconNextPage').invoke('attr', 'disabled').then(disabled => {
                if (disabled === 'disabled') {
                    cy.get('#iconNextPage').should('have.attr', 'disabled')
                } else {
                    cy.get('#iconNextPage').click().then(goToNextPage)
                }
            })
        }
        goToNextPage()
        cy.wait(2000)
    });

    it('Pagination (iconButton go to "Last page" and then "previous page")', () => {
        cy.goToHome();
        cy.get('#iconLastPage').should('exist')
        cy.wait(2000)
        const goToLastPage = () => {
            cy.get('#iconLastPage').invoke('attr', 'disabled').then(disabled => {
                if (disabled === 'disabled') {
                    cy.get('#iconLastPage').should('have.attr', 'disabled')
                } else {
                    cy.get('#iconLastPage').click()
                }
            })
        }
        goToLastPage()
        cy.wait(2000)

        const goToPreviousPage = () => {
            cy.get('#iconPreviousPage').invoke('attr', 'disabled').then(disabled => {
                if (disabled === 'disabled') {
                    cy.get('#iconPreviousPage').should('have.attr', 'disabled')
                } else {
                    cy.get('#iconPreviousPage').click().then(goToPreviousPage)
                }
            })
        }
        goToPreviousPage()
        cy.wait(2000)
    });

    it('Pagination (icon go to "First page", after clicking forward)', () => {
        cy.goToHome();
        cy.get('#iconNextPage').should('exist')
        cy.wait(2000)
        const goToNextPage = () => {
            cy.get('#iconNextPage').invoke('attr', 'disabled').then(disabled => {
                if (disabled === 'disabled') {
                    cy.get('#iconNextPage').should('have.attr', 'disabled')
                } else {
                    cy.get('#iconNextPage').click().then(goToNextPage)
                }
            })
        }
        goToNextPage()
        cy.wait(2000)

        cy.get('#iconFirstPage').should('exist')
        const goToFirstPage = () => {
            cy.get('#iconFirstPage').invoke('attr', 'disabled').then(disabled => {
                if (disabled === 'disabled') {
                    cy.get('#iconFirstPage').should('have.attr', 'disabled')
                } else {
                    cy.get('#iconFirstPage').click().then(goToFirstPage)
                }
            })
        }
        goToFirstPage()
    });
})