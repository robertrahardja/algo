import java.util.stream.Collectors;
import java.util.Arrays;

public class Main2 {
  public static void main(String[] args) {

    System.out.println(Arrays.stream(new int []{50, 1, 2, 81})
      .mapToObj(String::valueOf)
      .sorted((a, b )->(b+a).compareTo(a+b))
      .collect(Collectors.joining()));

  }
}
