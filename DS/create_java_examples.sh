#!/bin/bash

# Array Example
cat >Java/Array/Main_Example.java <<'EOL'
public class Main {
    public static void main(String[] args) {
        // Declaring and initializing an array
        int[] numbers = new int[5];
        
        // Adding elements
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = i * 2;
        }
        
        // Accessing elements
        System.out.println("Array elements:");
        for (int number : numbers) {
            System.out.println(number);
        }
    }
}
EOL

# ArrayDeque Example
cat >Java/ArrayDeque/Main_Example.java <<'EOL'
import java.util.ArrayDeque;

public class Main {
    public static void main(String[] args) {
        ArrayDeque<String> deque = new ArrayDeque<>();
        
        // Adding elements
        deque.addFirst("First");
        deque.addLast("Last");
        deque.add("End");
        
        System.out.println("ArrayDeque elements: " + deque);
        
        // Using as a stack
        System.out.println("Pop: " + deque.pop());
        
        // Using as a queue
        System.out.println("Poll last: " + deque.pollLast());
    }
}
EOL

# ArrayList Example
cat >Java/ArrayList/Main_Example.java <<'EOL'
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        
        // Adding elements
        list.add("Apple");
        list.add("Banana");
        list.add("Orange");
        
        // Accessing elements
        System.out.println("Second fruit: " + list.get(1));
        
        // Modifying elements
        list.set(1, "Grape");
        
        // Removing elements
        list.remove("Orange");
        
        System.out.println("ArrayList: " + list);
    }
}
EOL

# HashMap Example
cat >Java/HashMap/Main_Example.java <<'EOL'
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        
        // Adding key-value pairs
        map.put("One", 1);
        map.put("Two", 2);
        map.put("Three", 3);
        
        // Accessing values
        System.out.println("Value of Two: " + map.get("Two"));
        
        // Checking if key exists
        System.out.println("Contains 'Four'? " + map.containsKey("Four"));
        
        // Iterating over entries
        for (var entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
EOL

# HashSet Example
cat >Java/HashSet/Main_Example.java <<'EOL'
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        
        // Adding elements
        set.add("Red");
        set.add("Green");
        set.add("Blue");
        set.add("Red"); // Duplicate won't be added
        
        System.out.println("HashSet: " + set);
        
        // Checking if element exists
        System.out.println("Contains 'Green'? " + set.contains("Green"));
        
        // Removing element
        set.remove("Blue");
        System.out.println("After removal: " + set);
    }
}
EOL

# Hashtable Example
cat >Java/Hashtable/Main_Example.java <<'EOL'
import java.util.Hashtable;

public class Main {
    public static void main(String[] args) {
        Hashtable<Integer, String> table = new Hashtable<>();
        
        // Adding elements
        table.put(1, "One");
        table.put(2, "Two");
        table.put(3, "Three");
        
        // Accessing elements
        System.out.println("Value at key 2: " + table.get(2));
        
        // Removing elements
        table.remove(1);
        
        // Checking if empty
        System.out.println("Is table empty? " + table.isEmpty());
        
        // Size of table
        System.out.println("Size: " + table.size());
    }
}
EOL

# LinkedHashMap Example
cat >Java/LinkedHashMap/Main_Example.java <<'EOL'
import java.util.LinkedHashMap;

public class Main {
    public static void main(String[] args) {
        LinkedHashMap<String, Integer> linkedMap = new LinkedHashMap<>();
        
        // Adding elements (maintains insertion order)
        linkedMap.put("First", 1);
        linkedMap.put("Second", 2);
        linkedMap.put("Third", 3);
        
        // Iterating in insertion order
        System.out.println("Insertion Order:");
        for (var entry : linkedMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Accessing and modifying
        linkedMap.put("Second", 22); // Updates value
        System.out.println("\nAfter modification: " + linkedMap);
    }
}
EOL

# LinkedHashSet Example
cat >Java/LinkedHashSet/Main_Example.java <<'EOL'
import java.util.LinkedHashSet;

public class Main {
    public static void main(String[] args) {
        LinkedHashSet<String> linkedSet = new LinkedHashSet<>();
        
        // Adding elements (maintains insertion order)
        linkedSet.add("First");
        linkedSet.add("Second");
        linkedSet.add("Third");
        linkedSet.add("First"); // Duplicate won't be added
        
        // Displaying elements in insertion order
        System.out.println("LinkedHashSet: " + linkedSet);
        
        // Removing element
        linkedSet.remove("Second");
        System.out.println("After removal: " + linkedSet);
    }
}
EOL

# LinkedList Example
cat >Java/LinkedList/Main_Example.java <<'EOL'
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        
        // Adding elements
        list.add("First");
        list.addFirst("Start");
        list.addLast("End");
        
        // Accessing elements
        System.out.println("First element: " + list.getFirst());
        System.out.println("Last element: " + list.getLast());
        
        // Removing elements
        list.removeFirst();
        list.removeLast();
        
        System.out.println("After removal: " + list);
    }
}
EOL

# Primitive Types Example
cat >Java/Primitive-Types/Main_Example.java <<'EOL'
public class Main {
    public static void main(String[] args) {
        // Integer types
        byte byteVar = 127;
        short shortVar = 32767;
        int intVar = 2147483647;
        long longVar = 9223372036854775807L;
        
        // Floating point types
        float floatVar = 3.14f;
        double doubleVar = 3.14159265359;
        
        // Character type
        char charVar = 'A';
        
        // Boolean type
        boolean boolVar = true;
        
        // Printing all variables
        System.out.println("byte: " + byteVar);
        System.out.println("short: " + shortVar);
        System.out.println("int: " + intVar);
        System.out.println("long: " + longVar);
        System.out.println("float: " + floatVar);
        System.out.println("double: " + doubleVar);
        System.out.println("char: " + charVar);
        System.out.println("boolean: " + boolVar);
    }
}
EOL

# PriorityQueue Example
cat >Java/PriorityQueue/Main_Example.java <<'EOL'
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        // Min heap by default
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        // Adding elements
        pq.add(5);
        pq.add(1);
        pq.add(3);
        pq.add(2);
        pq.add(4);
        
        System.out.println("Priority Queue: " + pq);
        
        // Removing elements (in priority order)
        while (!pq.isEmpty()) {
            System.out.println("Polling: " + pq.poll());
        }
    }
}
EOL

# TreeMap Example
cat >Java/TreeMap/Main_Example.java <<'EOL'
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        TreeMap<String, Integer> treeMap = new TreeMap<>();
        
        // Adding elements (automatically sorted by keys)
        treeMap.put("Z", 26);
        treeMap.put("A", 1);
        treeMap.put("M", 13);
        
        // Displaying sorted map
        System.out.println("TreeMap (sorted by keys): " + treeMap);
        
        // Getting first and last entries
        System.out.println("First entry: " + treeMap.firstEntry());
        System.out.println("Last entry: " + treeMap.lastEntry());
        
        // Getting subset
        System.out.println("Subset from A to M: " + treeMap.subMap("A", "N"));
    }
}
EOL

# TreeSet Example
cat >Java/TreeSet/Main_Example.java <<'EOL'
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        TreeSet<Integer> treeSet = new TreeSet<>();
        
        // Adding elements (automatically sorted)
        treeSet.add(5);
        treeSet.add(1);
        treeSet.add(3);
        treeSet.add(2);
        treeSet.add(4);
        
        // Displaying sorted set
        System.out.println("TreeSet (sorted): " + treeSet);
        
        // Various operations
        System.out.println("First element: " + treeSet.first());
        System.out.println("Last element: " + treeSet.last());
        System.out.println("Lower than 3: " + treeSet.lower(3));
        System.out.println("Higher than 3: " + treeSet.higher(3));
    }
}
EOL

# Vector Example
cat >Java/Vector/Main_Example.java <<'EOL'
import java.util.Vector;

public class Main {
    public static void main(String[] args) {
        Vector<String> vector = new Vector<>();
        
        // Adding elements
        vector.add("First");
        vector.add("Second");
        vector.add("Third");
        
        // Adding element at specific index
        vector.add(1, "Between");
        
        // Accessing elements
        System.out.println("Element at index 1: " + vector.get(1));
        
        // Size and capacity
        System.out.println("Size: " + vector.size());
        System.out.println("Capacity: " + vector.capacity());
        
        // Removing elements
        vector.remove("Second");
        System.out.println("After removal: " + vector);
    }
}
EOL

# Make the script executable
chmod +x create_java_examples.sh

echo "Java examples have been created in their respective directories!"
