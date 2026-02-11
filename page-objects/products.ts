import { Locator, Page } from '@playwright/test';

export class ProductsPage {

    readonly page: Page
    readonly productsMenuItem: Locator
    readonly addedToCartToaster: Locator
    readonly continueShoppingButton: Locator
    readonly viewCartButton: Locator
    readonly categorySection: Locator
    readonly womanCategoryExpand: Locator
    readonly womanCategoryItemFilter: Locator
    readonly productsHeadingCategory: Locator
    readonly brandCategory: Locator
    readonly brandMadame: Locator
    readonly brandPageHeading: Locator
    readonly breadcrumbs: Locator
    readonly searchProducts: Locator
    readonly searchButton: Locator
    readonly searchedProductsHeading: Locator
    readonly allProductsHeading: Locator

    constructor(page: Page) {
        this.page = page
        this.productsMenuItem = page.getByText('Products')
        this.addedToCartToaster = page.locator('#cartModal').getByText('Added!')
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' })
        this.viewCartButton = page.locator('.modal-content').getByRole('link', { name: 'View Cart' })
        this.categorySection = page.locator('#accordian')
        this.womanCategoryExpand = page.getByRole('link', { name: ' Women' })
        this.womanCategoryItemFilter = page.locator('#Women').getByRole('link', { name: 'Dress' })
        this.productsHeadingCategory = page.getByRole('heading').filter({ hasText: "Women - Dress Products" })
        this.brandMadame = page.locator('.brands-name').getByRole('link').filter({ hasText: "Madame" })
        this.brandPageHeading = page.getByRole('heading').filter({ hasText: "Brand - Madame Products" })
        this.breadcrumbs = page.locator('.breadcrumbs')
        this.searchProducts = page.getByPlaceholder("Search Product")
        this.searchButton = page.locator('#submit_search')
        this.searchedProductsHeading = page.getByRole('heading').filter({ hasText: "Searched Products" })
        this.allProductsHeading = page.getByRole('heading').filter({ hasText: "All Products" })
    }

    async navigateToProducts() {
        await this.page.goto('/')
        await this.productsMenuItem.click()
    }

    async selectCategory(Category: string) {
        await this.womanCategoryExpand.click()
        await this.womanCategoryItemFilter.filter({ hasText: Category }).click()
    }
    getProductsHeadingCategory(): Locator {
        return this.productsHeadingCategory
    }
    async addToCartFromDetailedProductView(ProductName: string, Quanity: string) {
        await this.productsMenuItem.click()
        await this.page.locator('.product-image-wrapper').filter({ hasText: ProductName }).getByRole('link', { name: 'View Product' }).click()
        await this.page.locator('#quantity').clear()
        await this.page.locator('#quantity').fill(Quanity)
        await this.page.getByRole('button', { name: 'Add to cart' }).click()
    }

    async addItemtoCartFromProductsPage(ProductName: string) {
        await this.productsMenuItem.click()
        await this.page.locator('.product-image-wrapper').filter({ hasText: ProductName }).getByText('Add to cart').first().click()
    }

    async selectBrand() {
        await this.brandMadame.click()
    }

    async searchProduct() {
        await this.searchProducts.click()
        await this.searchProducts.fill("POLO")
        await this.searchButton.click()
    }

    getBrandHeading(): Locator {
        return this.brandPageHeading
    }
    getBreadcrumbs(): Locator {
        return this.breadcrumbs
    }

    getsearchedProducts(): Locator {
        return this.searchedProductsHeading
    }
    getAllProductsHeading(): Locator {
        return this.allProductsHeading
    }
}