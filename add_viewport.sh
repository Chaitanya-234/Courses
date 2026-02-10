#!/bin/bash

# Find all HTML files in AutoGen_Course
find AutoGen_Course -name "*.html" | while read -r file; do
    # Skip launchpage.html as it's already updated
    if [[ "$file" == *"launchpage.html"* ]]; then
        continue
    fi

    # Check if viewport meta tag already exists
    if ! grep -q "viewport" "$file"; then
        echo "Updating $file"
        # Insert viewport meta tag after <head> or <title>
        # We'll use sed to insert it after the opening <head> tag
        sed -i '/<head>/a \    <meta name="viewport" content="width=device-width, initial-scale=1.0">' "$file"
    else
        echo "Skipping $file (viewport tag exists)"
    fi
done
