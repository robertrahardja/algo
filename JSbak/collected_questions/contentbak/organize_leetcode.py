#!/usr/bin/env python3
import os
import shutil
import re

def create_new_structure():
    # Create the parent newGroup directory
    os.makedirs("newGroup", exist_ok=True)
    
    # Store all the category directories we've found
    all_categories = set()
    
    # Process each major group (500, 900, 1300, etc.)
    main_groups = ["500", "900", "1300", "2100"]
    
    # First pass: discover all categories
    for group in main_groups:
        if not os.path.exists(group):
            print(f"Directory {group} does not exist, skipping...")
            continue
            
        # Get all subdirectories (categories) in this group
        for category in os.listdir(group):
            category_path = os.path.join(group, category)
            # Skip if not a directory or if it's our Python script
            if not os.path.isdir(category_path) or category == "organize_leetcode_files.py":
                continue
                
            # Clean the category name to handle special cases
            # For categories with quotes like 'Binary Search'
            clean_category = category.replace("'", "")
            
            # Add the category to our set
            all_categories.add(clean_category)
    
    # Create all category directories in newGroup
    for category in all_categories:
        os.makedirs(os.path.join("newGroup", category), exist_ok=True)
    
    # Second pass: copy all files to their new locations
    for group in main_groups:
        if not os.path.exists(group):
            continue
            
        for category in os.listdir(group):
            category_path = os.path.join(group, category)
            if not os.path.isdir(category_path) or category == "organize_leetcode_files.py":
                continue
                
            # Clean the category name again
            clean_category = category.replace("'", "")
            dest_category_path = os.path.join("newGroup", clean_category)
            
            # Copy all files from this category
            for file in os.listdir(category_path):
                if file.endswith("_question.md"):
                    src_file_path = os.path.join(category_path, file)
                    dest_file_path = os.path.join(dest_category_path, file)
                    try:
                        shutil.copy2(src_file_path, dest_file_path)
                        print(f"Copied {src_file_path} to {dest_file_path}")
                    except Exception as e:
                        print(f"Error copying {src_file_path}: {e}")

if __name__ == "__main__":
    print("Starting to organize LeetCode files...")
    create_new_structure()
    print("Organization complete!")
