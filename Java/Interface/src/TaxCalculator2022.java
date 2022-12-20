public class TaxCalculator2022  implements ITaxCalculator
{
    private final double taxableIncome;

    public TaxCalculator2022(double taxableIncome) {
        this.taxableIncome = taxableIncome;
    }


    @Override
    public double calculateTax() {
        return taxableIncome * .3;
    }
}
