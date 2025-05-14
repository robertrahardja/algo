import os
import shutil
from pathlib import Path

def organize_md_files(root_dir):
    # Walk through all directories in the root
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Skip directories that appear to be already processed
        if os.path.basename(dirpath).endswith('_question'):
            continue
            
        # Process each markdown file
        for filename in filenames:
            if filename.endswith('_question.md'):
                # Get full path of the original file
                original_file_path = os.path.join(dirpath, filename)
                
                # Create folder name (same as the file without .md extension)
                folder_name = filename[:-3]  # Remove .md extension
                folder_path = os.path.join(dirpath, folder_name)
                
                # Create the folder if it doesn't exist
                if not os.path.exists(folder_path):
                    os.makedirs(folder_path)
                    print(f"Created folder: {folder_path}")
                
                # Define destination path
                destination_path = os.path.join(folder_path, filename)
                
                # Move the file into the new folder
                shutil.copy2(original_file_path, destination_path)
                os.remove(original_file_path)
                print(f"Moved {filename} to {folder_path}")

if __name__ == "__main__":
    # Set the root directory where your files are located
    root_directory = "."  # Current directory, change this to your actual directory
    
    print(f"Starting organization of .md files in {root_directory}")
    organize_md_files(root_directory)
    print("Organization complete!")
