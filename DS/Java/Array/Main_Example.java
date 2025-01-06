public class Main {
    public static void main(String[] args) {
        // Declaring and initializing an array
        int[] numbers = new int[5];
        
        // Adding elements
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = i * 2;
        }
        
        // Accessing elements
        System.out.println("Array elements:");
        for (int number : numbers) {
            System.out.println(number);
        }
    }
}
