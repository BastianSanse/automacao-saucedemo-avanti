

class LoginPage {
    visit() {
        cy.visit('/')
    }

    fillUsername(username) {
        cy.get("[data-test='username']").type(username)
    }

    fillPassword(password) {
        cy.get("[data-test='password']").type(password)
    }

    clickLogin() {
        cy.get("[data-test='login-button']").click()
    }

    userBlockedMessage() {
        cy.get('[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Sorry, this user has been locked out')
    }

    errorLoginMessage() {
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    }
}

export default new LoginPage()

