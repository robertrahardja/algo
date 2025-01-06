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
