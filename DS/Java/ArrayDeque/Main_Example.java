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
