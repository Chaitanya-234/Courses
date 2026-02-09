from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # 1. Load the launch page (at root now)
        print("Loading launch page...")
        page.goto("http://localhost:8000/Amazon_Q_Troubleshooting_Course/launchpage.html")

        # 2. Wait for the iframe to load Introduction
        print("Waiting for Introduction...")
        # Access the frame
        frame = page.frame_locator("#contentFrame")

        # Check for Intro title
        intro_heading = frame.locator("h1")
        intro_heading.wait_for()
        print(f"Intro heading found: {intro_heading.text_content()}")

        # Screenshot Introduction
        page.screenshot(path="verification/intro.png")
        print("Screenshot saved: verification/intro.png")

        # 3. Navigate to Module 1
        print("Clicking Next...")
        next_button = page.locator("#butNext")
        next_button.click()

        # 4. Wait for Module 1 to load
        print("Waiting for Module 1...")
        # The new h1 is "Module 1: Amazon Q Fundamentals"

        mod1_heading = frame.locator("h1")
        mod1_heading.filter(has_text="Module 1: Amazon Q Fundamentals").wait_for()

        print(f"Module 1 heading found: {mod1_heading.text_content()}")

        # Screenshot Module 1
        page.screenshot(path="verification/module1.png")
        print("Screenshot saved: verification/module1.png")

        browser.close()

if __name__ == "__main__":
    run()
