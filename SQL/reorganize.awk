#!/usr/bin/awk -f

BEGIN {
    # Initialize counters for each difficulty level
    easy_count = 1
    medium_count = 1
    hard_count = 1
}

# Process lines containing .sql
/.sql/ {
    # Extract the full path
    file = $0
    
    # Remove leading ./ if present
    sub(/^\.\//, "", file)
    
    # Extract directory (Easy, Medium, Hard)
    split(file, parts, "/")
    dir = parts[1]
    
    # Extract filename
    filename = parts[2]
    
    # Create folder name by replacing spaces with underscores and removing .sql
    folder = filename
    gsub(/ /, "_", folder)
    sub(/\.sql$/, "", folder)
    
    # Determine counter based on directory
    counter = 1
    if (dir == "Easy") 
        counter = easy_count++
    else if (dir == "Medium") 
        counter = medium_count++
    else if (dir == "Hard") 
        counter = hard_count++
    
    # Print mkdir command
    print "mkdir -p \"" dir "/" counter "_" folder "\""
    
    # Print mv command
    print "mv \"" file "\" \"" dir "/" counter "_" folder "/" filename "\""
}
