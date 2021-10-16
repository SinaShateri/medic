import java.util.*;
public class kaleme 
{
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        String word = in.next(), chars = "aeiou";
        int num = 0;
        for (int i = 0; i < word.length(); i++)
            if (chars.indexOf(word.charAt(i))!=-1)
                num++;
        
        System.out.println((int)Math.pow(2, num));
        in.close();
    }
}