# From "Book" table in testautomationpractice.com website:
# Retrieve all book names whose author is 'Mukesh' and find the total price
from playwright.sync_api import Page,expect

def test_Static_WebTable(page:Page):
    page.goto("https://testautomationpractice.blogspot.com/")
    # Locator for webtable
    Books = page.locator("div.widget-content table[name='BookTable']")
    #Retrieving rows
    Rows = Books.locator('tr')
    All_Row_data = Rows.all_inner_texts()
    #Rettieving row count and column count
    NumOfRows = Rows.count()
    NumOfCols = Rows.locator('th').count()
    TotPrice =0
    #Retrieving data from each row and column
    print("\n")
    for i in range(1,NumOfRows):
        AuthorName = Rows.nth(i).locator('td').nth(1).inner_text()
        if AuthorName=="Mukesh":
            BookName = Rows.nth(i).locator('td').nth(0).inner_text()
            Price= Rows.nth(i).locator('td').nth(3).inner_text()
            Price1=int(Price)
            print(f"Price of {BookName} is {Price1}")
            TotPrice =TotPrice+Price1
    print ("Total Price of all {AuthorName} books is", TotPrice)

    
