import java.text.NumberFormat;

/*
* We need to avoid Dependency Injection in our classes. For that we have some options.
* - Constructor Injection ( pass as a parameter at the constructor ). Here the responsibility to inject belongs to main.
* - Setter Injection
* - Method Injection.
* */
public class TaxReport
{
    private ITaxCalculator calculator;

    public TaxReport() {

    }
    //Methods
    public void show(ITaxCalculator calculator)
    {
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        System.out.println(currency.format(calculator.calculateTax()));
    }
    //Setters
    // Setter Injection
 /*   public void setCalculator(ITaxCalculator calculator) {
        this.calculator = calculator;
    }*/
}
