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
