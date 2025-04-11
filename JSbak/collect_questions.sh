#!/bin/bash

# Create a new destination folder
mkdir -p collected_questions

# Find all question.md files and copy them to the destination folder
find . -type f -name "question.md" | while read -r file; do
  # Get parent directory name
  parent_dir=$(basename "$(dirname "$file")")

  # Copy the file with the parent directory name as prefix
  cp "$file" "collected_questions/${parent_dir}_question.md"

  echo "Copied $file to collected_questions/${parent_dir}_question.md"
done

echo "All question.md files have been collected in the 'collected_questions' folder"
