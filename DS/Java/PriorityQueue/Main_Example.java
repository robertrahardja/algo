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
