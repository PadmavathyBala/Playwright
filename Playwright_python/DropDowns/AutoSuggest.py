from playwright.sync_api import Page, expect

def test_autoSuggestDropDown (page:Page):
    page.goto("https://www.flipkart.com/")
    page.locator("span.b3wTlE").click()
    SearchBar = page.get_by_title("Search for Products, Brands and More").nth(1)
    SearchBar.click()
    page.wait_for_selector("ul>li",state="visible")
    TrendingPanel_autosuggest=page.locator("ul>li")
    Number_of_items_in_TP = TrendingPanel_autosuggest.count()
    # NAvigate to sources->pause browser rendering and capture the trending panel elements selector
    #1. Printing all items in the Trendinglist Panel
    for i in range(Number_of_items_in_TP):
        page.wait_for_selector("ul>li",state="visible")
        item = TrendingPanel_autosuggest.nth(i).inner_text()
        print(item)
    #2. Verifying the correct page is displayed on clicking one of the items in the trending panel
    for i in range(Number_of_items_in_TP):
        page.wait_for_selector("ul>li",state="visible")
        item = TrendingPanel_autosuggest.nth(i).inner_text()
        if item=="watches":
            TrendingPanel_autosuggest.nth(i).click()
            Watch_text=page.locator("span._Omnvo>span")
            expect(Watch_text).to_have_text("watches")
            print(f"The page displays list of {Watch_text.inner_text()}")
            page.go_back(wait_until="load")
            SearchBar.click()

