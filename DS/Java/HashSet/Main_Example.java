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
