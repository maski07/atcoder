using System;

class Pro2
{
    static void Main(string[] args)
    {
        var input    = int.Parse(Console.ReadLine().Split(' '));
        Console.WriteLine(((input[0] + input[1]) % 2) ? "Odd" : "Even");
    }
}
