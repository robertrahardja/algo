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
