import java.io.FileReader;
import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Quiz About Mortgage
        System.out.print("Principal: ");
        double Principal = scanner.nextDouble();
        System.out.print("Annual Interest Rate: ");
        double AnnualInterestRate = scanner.nextDouble();
        System.out.print("Period in Months: ");
        byte Period = scanner.nextByte();

        // Calculating Mortgage
        double Mortgage;
        double calculatedInterest = (AnnualInterestRate / 12)/100;
        double firstPart = calculatedInterest * Math.pow((1+calculatedInterest), Period);
        double secondPart = Math.pow((1+calculatedInterest),Period) - 1;
        Mortgage = Principal * (firstPart / secondPart);

        // Displaying information
        NumberFormat display = NumberFormat.getCurrencyInstance();
        NumberFormat displayPercent = NumberFormat.getPercentInstance();
        System.out.println("-- Mortgage Information -- ");
        System.out.println("Your Principal value is " + display.format(Principal)
                + ". Your annual interest rate selected was " + displayPercent.format(AnnualInterestRate / 100)
                + ". You select a period of " + Period + " Years."
        );
        System.out.println("Considering this information , your Monthly Mortgage Payment is : " + display.format(Mortgage));


    }
}