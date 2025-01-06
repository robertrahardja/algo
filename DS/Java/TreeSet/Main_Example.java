import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        TreeSet<Integer> treeSet = new TreeSet<>();
        
        // Adding elements (automatically sorted)
        treeSet.add(5);
        treeSet.add(1);
        treeSet.add(3);
        treeSet.add(2);
        treeSet.add(4);
        
        // Displaying sorted set
        System.out.println("TreeSet (sorted): " + treeSet);
        
        // Various operations
        System.out.println("First element: " + treeSet.first());
        System.out.println("Last element: " + treeSet.last());
        System.out.println("Lower than 3: " + treeSet.lower(3));
        System.out.println("Higher than 3: " + treeSet.higher(3));
    }
}
