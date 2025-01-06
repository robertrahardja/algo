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
