from playwright.sync_api import Page, expect
from playwright.sync_api import TimeoutError as PlaywrightTimeoutError

def test_CssSelector(page: Page):
    # Navigate to the website
    page.goto("https://demowebshop.tricentis.com/")

    # A1-Locate the search input by ID , tag with attribute and value, child selector
    page.locator("#small-searchterms").fill("laptop")
    page.locator("form[action='/search']>[value='Search']").click()
    Search_Keyword_txtbx = page.get_by_label("Search keyword:")
    expect(Search_Keyword_txtbx).to_have_value("laptop")

      # A1-Locate the register link by tag+class
    Register_lk = page.locator("a.ico-register")
    expect(Register_lk).to_be_visible()

     # A3 - Count all product items on the homepage
    page.wait_for_timeout
    page.goto("https://demowebshop.tricentis.com/")
    Product_items_Ct = page.locator(".item-box").count()
    print(f"Number of product items: {Product_items_Ct}")
    assert Product_items_Ct == 6, f"Expected 6  product items, but found {Product_items_Ct}"
    
    # F1 - Dynamic product selection using f-string
    # Write a reusable helper function that takes a product name and returns its "Add to cart" button locator.
    #  Test it with at least two product names.
    
def Add_To_Cart_button(Product_name:str, page:Page):
    page.goto("https://demowebshop.tricentis.com/")
    page.locator("#small-searchterms").fill(Product_name)
    page.locator("form[action='/search']>[value='Search']").click()
   # page.wait_for_timeout(5000)
    Product_locator = page.locator("div.product-grid input[value='Add to cart']")
    return Product_locator

def test_AddtoCart(page: Page):
    Prod_Add_to_cart_btn= Add_To_Cart_button("laptop", page)
    print(Prod_Add_to_cart_btn.count())
    if (Prod_Add_to_cart_btn.count() >1):
        PAddToCart_Btns = Prod_Add_to_cart_btn.all()
        for PAddToCartitem in PAddToCart_Btns:
            PAddToCartitem.click()
            print(PAddToCartitem)
        #page.wait_for_timeout(5000)
    else:
        Prod_Add_to_cart_btn.click()
        page.wait_for_timeout(5000)
    expect(page.locator("div#bar-notification a[href='/cart']")).to_be_visible
    
# Filter and CSS chaining
# On the Books page, use a CSS locator to find all product items, then chain a Playwright filter to find ones whose price
# is under $30. 
# Click the "Add to cart" on the first match.

from playwright.sync_api import Page

def test_CSS_Chain(page: Page):
    page.goto("https://demowebshop.tricentis.com/")
    page.locator("a[href='/books']").nth(0).click() 
    Countofitems = page.locator("div.product-grid div.item-box").count() 
    for Ct in range(1, Countofitems + 1): 
        locatorString = f"div.product-grid div.item-box:nth-child({Ct}) span.actual-price"
        ProductNameocator = f"div.product-grid div.item-box:nth-child({Ct}) h2>a"
        ProductName = page.locator(ProductNameocator).text_content()
        ProductAddToCartlocator = f"div.product-grid div.item-box:nth-child({Ct}) input"
        if float(page.locator(locatorString).text_content()) < float(30.00):
            print (ProductName,  page.locator(locatorString).text_content())
            try:
                page.locator(ProductAddToCartlocator).click()
            except PlaywrightTimeoutError:
                print("Element not found")
            

        



