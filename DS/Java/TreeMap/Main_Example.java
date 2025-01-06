import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        TreeMap<String, Integer> treeMap = new TreeMap<>();
        
        // Adding elements (automatically sorted by keys)
        treeMap.put("Z", 26);
        treeMap.put("A", 1);
        treeMap.put("M", 13);
        
        // Displaying sorted map
        System.out.println("TreeMap (sorted by keys): " + treeMap);
        
        // Getting first and last entries
        System.out.println("First entry: " + treeMap.firstEntry());
        System.out.println("Last entry: " + treeMap.lastEntry());
        
        // Getting subset
        System.out.println("Subset from A to M: " + treeMap.subMap("A", "N"));
    }
}
