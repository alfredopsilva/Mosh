import java.util.Scanner;

public class MortgageCalculator {
    private double principal;
    private double annualInterestRate;
    private short period;

    public MortgageCalculator() {
        this.principal = gettingValues(1_000, 1_000_000, "Principal (1K - 1M) : " ,"Please , insert a value between $1,000 and $1,000,000");
        this.annualInterestRate = gettingValues(0,30,"Annual Interest Rate: " , "Please insert a value between 0 and 30.");;
        this.period = (short)gettingValues(0,120,"Period in months : ", "Please, inter a value between 0 and 120 months.");;
    }

    public double calculateMortgage()
    {
        double firstPart = getMonthlyInterestRate() * Math.pow((1+ getMonthlyInterestRate()), period);
        double secondPart = Math.pow((1+ getMonthlyInterestRate()),period) - 1;
        return  principal * (firstPart / secondPart);
    }
    private static double gettingValues(double minLimit, double maxLimit, String prompt, String message)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.print(prompt);
        double value = scanner.nextDouble();

        while(value < minLimit || value > maxLimit )
        {
            System.out.println(message);
            value = scanner.nextDouble();
        }
        return value;
    }

    public double[] getRemainingBalance()
    {
        double[] balances = new double[period + 1];
        for(int i = 0; i <= period; i++){
             balances[i] = principal*(((Math.pow((1+getMonthlyInterestRate()),period) - Math.pow((1+getMonthlyInterestRate()),i))
                    /(Math.pow((1+getMonthlyInterestRate()),period) - 1)));
        }
        return balances;
    }

    //Getters
    private double getMonthlyInterestRate()
    {
        return Math.pow(1+(annualInterestRate/100), (1.0/12)) -1;
    }

    public double getPrincipal() {
        return principal;
    }

    public double getAnnualInterestRate() {
        return annualInterestRate;
    }

    public short getPeriod() {
        return period;
    }
}
