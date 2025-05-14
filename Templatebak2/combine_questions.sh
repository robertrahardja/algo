#!/bin/bash

# Create or overwrite the output file
>questions.md

# Find all question.md files specifically to avoid trying to open too many files at once
find . -type f -name "question.md" | while read -r file; do
  # Skip the output file if it exists already
  if [ "$file" != "./questions.md" ]; then
    echo "Processing: $file"

    # Append folder name as header
    folder_name=$(dirname "$file")
    echo "# ${folder_name#./}" >>questions.md

    # Append file content to questions.md
    cat "$file" >>questions.md

    # Add separator
    echo -e "\n-----------------\n" >>questions.md
  fi
done

echo "All question.md files have been combined into questions.md"
