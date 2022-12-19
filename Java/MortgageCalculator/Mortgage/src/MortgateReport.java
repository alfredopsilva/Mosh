import java.text.NumberFormat;

public class MortgateReport {

    private MortgageCalculator calculator;
    private static NumberFormat currency;
    private static NumberFormat percentage;
    // Color Variables
    private static final String ANSI_GREEN = "\u001B[32m";
    private static final String ANSI_RESET = "\u001B[0m";
    public MortgateReport() {
        calculator = new MortgageCalculator();
        currency = NumberFormat.getCurrencyInstance();
        percentage = NumberFormat.getPercentInstance();
    }

    public void displayInfo()
    {
        System.out.println("-- MORTGAGE INFORMATION -- ");
        System.out.println("Your Principal value is " + currency.format(calculator.getPrincipal())
                + ".\nYour annual interest rate selected was " + percentage.format(calculator.getAnnualInterestRate() / 100)
                + ".\nYou select a period of " + calculator.getPeriod() + " Months."
        );
        System.out.println("Considering this information , your monthly mortgage Payment is : " + ANSI_GREEN
                + currency.format(calculator.calculateMortgage()) + ANSI_RESET);

        System.out.println("\n--\t Remaining Balance \t--\n");
        for(var i = 0; i <= calculator.getPeriod(); i++)
        {
            System.out.println(currency.format(calculator.getRemainingBalance()[i]));
        }
    }
    
}
