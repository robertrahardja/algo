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
