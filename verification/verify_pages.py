from playwright.sync_api import sync_playwright
import os

def verify_pages():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        base_path = os.path.abspath("Anthropic_API_DeepDive_Course")

        # List of pages to verify
        pages = [
            "Introduction/Introduction.html",
            "Introduction/ProsAndCons.html",
            "APIFundamentals/MessagesAPI.html",
            "APIFundamentals/StreamingBatching.html",
            "APIFundamentals/ErrorHandling.html",
            "ToolUseStructured/DefiningTools.html",
            "ToolUseStructured/StructuredOutput.html",
            "ToolUseStructured/AdvancedPatterns.html"
        ]

        for page_file in pages:
            file_url = f"file://{base_path}/{page_file}"
            print(f"Navigating to {file_url}")
            page.goto(file_url)

            # Wait for content to load
            page.wait_for_load_state("networkidle")

            # Take screenshot
            screenshot_path = f"verification/{page_file.replace('/', '_').replace('.html', '.png')}"
            page.screenshot(path=screenshot_path, full_page=True)
            print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_pages()