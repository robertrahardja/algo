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
