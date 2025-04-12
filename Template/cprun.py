import os
import shutil
import subprocess

def copy_and_run_organize():
    # Get the current directory
    current_dir = os.getcwd()
    
    # Path to the organize.py file
    organize_script = os.path.join(current_dir, "organize.py")
    
    # Check if organize.py exists in the current directory
    if not os.path.isfile(organize_script):
        print(f"Error: organize.py not found in {current_dir}")
        return
    
    # Get all subdirectories except 'Array'
    subdirs = [d for d in os.listdir(current_dir) 
               if os.path.isdir(os.path.join(current_dir, d)) and d != "Array"]
    
    print(f"Found {len(subdirs)} subdirectories to process")
    
    # Copy organize.py to each subdirectory and run it
    for subdir in subdirs:
        subdir_path = os.path.join(current_dir, subdir)
        target_script = os.path.join(subdir_path, "organize.py")
        
        # Copy the script
        try:
            shutil.copy2(organize_script, target_script)
            print(f"Copied organize.py to {subdir}")
        except Exception as e:
            print(f"Failed to copy to {subdir}: {e}")
            continue
        
        # Run the script in the subdirectory
        try:
            print(f"Running organize.py in {subdir}...")
            # Change to the subdirectory
            os.chdir(subdir_path)
            
            # Run the script
            result = subprocess.run(["python", "organize.py"], 
                                   capture_output=True, text=True)
            
            # Print output
            if result.stdout:
                print(f"Output from {subdir}:\n{result.stdout}")
            if result.stderr:
                print(f"Errors from {subdir}:\n{result.stderr}")
                
            # Change back to the main directory
            os.chdir(current_dir)
            
        except Exception as e:
            print(f"Failed to run script in {subdir}: {e}")
            # Make sure we return to the main directory
            os.chdir(current_dir)

if __name__ == "__main__":
    print("Starting to copy and run organize.py in all subdirectories except 'Array'")
    copy_and_run_organize()
    print("Process completed")
