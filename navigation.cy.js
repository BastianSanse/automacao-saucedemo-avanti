import NavigationPage from "../../page-objects/NavigationPage";
import LoginPage from "../../page-objects/LoginPage";

describe('Teste de navegação da loja', () => {

    beforeEach(() => {
        NavigationPage.visit('/')
    })

    it.only('CT001 - Verificar se a página inicial exibe pelo menos 6 produtos ao carregar.', () => {
        LoginPage.fillUsername('standard_user')
        LoginPage.fillPassword('secret_sauce')
        LoginPage.clickLogin()
        cy.url().should('include', '/inventory')

        NavigationPage.countItems()
    
    });

    it.only('CT002 - Aplicar o filtro de produtos “Low to High” e verificar se os produtos são exibidos em ordem de preço crescente', () => {
        LoginPage.fillUsername('standard_user')
        LoginPage.fillPassword('secret_sauce')
        LoginPage.clickLogin()
        cy.url().should('include', '/inventory')

        NavigationPage.productSortContainer()
        NavigationPage.inventoryItemPrice()
      
    });

    it.only('CT003 - Clicar em um produto e verificar se o produto correspondente aparece no resultado.', () => {
        LoginPage.fillUsername('standard_user')
        LoginPage.fillPassword('secret_sauce')
        LoginPage.clickLogin()
        cy.url().should('include', '/inventory')

        NavigationPage.productClick()
        
    });
});