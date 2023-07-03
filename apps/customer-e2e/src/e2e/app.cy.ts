describe('customer', () => {
  beforeEach(() => cy.visit('/'));

  const path = {
    // enter
    nameInput: '[data-cy="name-input"]',
    userNameInput: '[data-cy="username-input"]',
    countrySelect: '[data-cy="country-select"]',
    selectOption: '.ant-select-item-option',
    postCodeInput: '[data-cy="postcode-input"]',
    movieAutocomplete: '[data-cy="movie-autocomplete"]',
    submitButton: '[data-cy="submit-button"]',
    formErrors: '.ant-form-item-explain-error',
    // thankyou
    customerDataCard: '[data-cy="customer-data-card"]',
  };

  it('should not redirect if the form is invalid and show error messages', () => {
    cy.get(path.submitButton).click();

    cy.get(path.formErrors)
      .eq(0)
      .then((nameValidation) =>
        expect(nameValidation.text()).to.eq('Please type your name!')
      );

    cy.location().then((location) => {
      expect(location.pathname).to.eq('/enter');
    });
  });

  it('should fill the form with minimum requirements (name and country=Ireland)', () => {
    cy.get(path.nameInput).type('John');
    cy.get(path.countrySelect).click();
    cy.get(path.selectOption).eq(0).click();
    cy.get(path.submitButton).click();

    expect(cy.get(path.customerDataCard)).to.exist;
    cy.location().then((location) => {
      expect(location.pathname).to.eq('/thankyou');
    });
  });

  it('should fill all form inputs with data', () => {
    cy.get(path.nameInput).type('John');
    cy.get(path.userNameInput).type('john@gmail.com');
    cy.get(path.countrySelect).click();
    cy.get(path.selectOption).eq(1).click();
    cy.get(path.postCodeInput).type('WRONG POST CODE');

    cy.get(path.submitButton).click();

    cy.get(path.postCodeInput).clear();
    cy.get(path.postCodeInput).type('SW1W 0NY');

    cy.get(path.movieAutocomplete).type('NICE', { delay: 100 });
    cy.get(path.selectOption).eq(0).click();

    cy.get(path.submitButton).click();

    expect(cy.get(path.customerDataCard)).to.exist;
    cy.location().then((location) => {
      expect(location.pathname).to.eq('/thankyou');
    });
  });
});
