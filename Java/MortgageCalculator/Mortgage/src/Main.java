import java.text.NumberFormat;
import java.util.Scanner;



public class Main {

    //Colors
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_RESET = "\u001B[0m";

    public static void main(String[] args) {

        // Getting Mortgage information

        double Principal  = gettingValues(1_000, 1_000_000, "Principal (1K - 1M) : " ,"Please , insert a value between $1,000 and $1,000,000" );
        double AnnualInterestRate = gettingValues(0,30,"Annual Interest Rate: " , "Please insert a value between 0 and 30.");
        short Period = (short)gettingValues(0,120,"Period in months : ", "Please, inter a value between 0 and 120 months.");

        // Displaying information
        displayInfo(Principal, AnnualInterestRate, Period);

    }

    public static double calculateMortgage(double Principal, double annualInterestRate, short Period){
        double Mortgage;
        double calculatedInterest = (annualInterestRate / 12)/100;
        double firstPart = calculatedInterest * Math.pow((1+calculatedInterest), Period);
        double secondPart = Math.pow((1+calculatedInterest),Period) - 1;
        return  Mortgage = Principal * (firstPart / secondPart);
    }

    public static double gettingValues(double min_limit, double max_limit, String prompt ,String message)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.print(prompt);
        double value = scanner.nextDouble();

        while(value < min_limit || value > max_limit )
        {
            System.out.println(message);
            value = scanner.nextDouble();
        }
        return value;
    }

    public static void displayInfo(double Principal, double AnnualInterestRate, short Period)
    {
        NumberFormat display = NumberFormat.getCurrencyInstance();
        NumberFormat displayPercent = NumberFormat.getPercentInstance();
        System.out.println("-- MORTGAGE INFORMATION -- ");
        System.out.println("Your Principal value is " + display.format(Principal)
                + ".\nYour annual interest rate selected was " + displayPercent.format(AnnualInterestRate / 100)
                + ".\nYou select a period of " + Period + " Years."
        );
        System.out.println("Considering this information , your monthly mortgage Payment is : " + ANSI_GREEN
                + display.format(calculateMortgage(Principal,AnnualInterestRate,Period)) + ANSI_RESET);
        System.out.println("-- Monthly Balance --\n");
        monthlyBalance(Principal, AnnualInterestRate, Period);
    }

    public static void monthlyBalance(double Principal, double annualInterestRate, short Period)
    {
        double balance=0;
        double calculatedInterest = (annualInterestRate / 12)/100;
        NumberFormat display = NumberFormat.getCurrencyInstance();

        for(int i = 0; i <= Period; i++){
        balance = Principal*(((Math.pow((1+calculatedInterest),Period) - Math.pow((1+calculatedInterest),i))
                            /(Math.pow((1+calculatedInterest),Period) - 1)));

            System.out.println(display.format(balance));
        }
    }
}