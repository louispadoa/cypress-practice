const expectedLength = 24

const listWin = [[0, 2], [1, 4], [3, 5], [6, 8], [7, 10], [9, 11], [12, 16], [13, 14], [15, 17], [18, 19], [20, 23], [21, 22]]

describe('Basic init tests', () => {
  it('should display 24 cards', () => {
    cy.visit('http://localhost:8080')
    cy.get('body')
        .find('.card')
        .should('have.length', expectedLength)
  });
});

describe('Basic game functionality', () => {
  it('should allow the player to select a single card', () => {
    cy.visit('http://localhost:8080')
    for (let e = 0; e < 1; e++) {
      cy.get('body')
          .find('.card')
          .eq(e)
          .click()
          .should('have.class', 'card is-selected')
      cy.wait(3100)
    }
  });

  it('should allow matching pairs to remain face-up', () => {

    cy.get('body')
        .find('.card')
        .filter((index) => index === 0 || index === 2)
        .click({multiple: true})
        .should('have.class', 'card is-matched')

  });

  it('should flip non-matching pairs face-down', () => {
    cy.get('body')
        .find('.card')
        .filter((index) => index === 1 || index === 3)
        .click({multiple: true})
        .should('have.class', 'card')
  });
});

describe('Countdown functionality', () => {
  it('should start the countdown when the user selects the first card', () => {
    cy.get('body')
        .find('.card')
        .eq(0)
        .click()
        .get('body')
        .find('.timer')
        .should('have.text', '3')
  });

  it('should flip the cards face-down when the countdown runs out', () => {
    cy.get('body')
        .find('.card')
        .eq(17)
        .click()
        .wait(3100)
        .should('have.class', 'card')
  });

  it('should reset the countdown when it runs out', () => {
    cy.get('body')
        .find('.card')
        .eq(18)
        .click()
        .get('body')
        .find('.timer')
        .wait(3100)
        .should('have.text', '?')
  });

  it('should reset the countdown when the user selects a second card', () => {
    cy.get('body')
        .find('.card')
        .filter((index) => index === 1 || index === 3)
        .click({multiple: true})
        .get('body')
        .find('.timer')
        .should('have.text', '?')
  });
});

describe('Endgame functionality', () => {
  it('should display a congratulatory message when the player successfully matches all of the cards', () => {
    for (let e of listWin) {
      cy.get('body')
          .find('.card')
          .filter((index) => index === e[0] || index === e[1])
          .click({multiple: true})
    }
    cy.get('body').find('.endgame').should('have.class', 'endgame is-active')
  });
});
