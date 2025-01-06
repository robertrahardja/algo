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
