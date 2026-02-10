from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        # Emulate a mobile device
        iphone_13 = p.devices['iPhone 13']
        context = browser.new_context(**iphone_13)
        page = context.new_page()

        # Verify Launch Page on Mobile
        path = f"file://{os.getcwd()}/AutoGen_Course/shared/launchpage.html"
        print(f"Navigating to {path}")
        page.goto(path)
        # Wait for iframe to load content
        page.wait_for_timeout(2000)
        page.screenshot(path="mobile_launch.png")
        print("Screenshot saved: mobile_launch.png")

        browser.close()

if __name__ == "__main__":
    run()
