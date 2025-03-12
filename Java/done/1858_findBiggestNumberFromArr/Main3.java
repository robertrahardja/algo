import java.util.Arrays;
import java.util.stream.Collectors;

public class Main3 {
    public static void main(String[] args) {
        System.out.println(Arrays.stream(new int[]{50, 1, 2, 81})
                .mapToObj(String::valueOf)
                .sorted((a, b) ->(b+a).compareTo(a+b))
                .collect(Collectors.joining()));
    }
}
