import java.text.NumberFormat;

public class Employee {
    private int baseSalary;
    private int hourlyRate;
    private static int numberOfEmployees;

    public Employee(int baseSalary, int hourlyRate)
    {
        setBaseSalary(baseSalary);
        setHourlyRate(hourlyRate);
        numberOfEmployees++;
    }
public Employee(int baseSalary)
    {
        setBaseSalary(baseSalary);
        setHourlyRate(0);
        numberOfEmployees++;

    }

    public static void printNumberOfEmployee()
    {
        System.out.println("Your currently number of Employee is : " + numberOfEmployees);
    }
    private void setBaseSalary(int baseSalary)
    {
        if(baseSalary <= 0){
            throw new IllegalArgumentException("Salary cannot be 0 or less.");
        }
        this.baseSalary = baseSalary;
    }
    private void setHourlyRate(int hourlyRate)
    {
        if(hourlyRate < 0){
            throw new IllegalArgumentException("Hourly Rate cannot less than 0.");
        }
        this.hourlyRate = hourlyRate;
    }

    private final int getBaseSalary()
    {
        return baseSalary;
    }

    private final int getHourlyRate()
    {
        return hourlyRate;
    }
    public int calculateWage(int extraHours)
    {
        return baseSalary + (hourlyRate * extraHours);
    }

    public void displayingInfo(int wage)
    {

        NumberFormat display = NumberFormat.getCurrencyInstance();
        System.out.println("Your actual salary is " + display.format(wage));
        System.out.println("Hourly Rate: " + display.format(getHourlyRate()) + "\n" + "Base salary: "
                + display.format(getBaseSalary()));
    }


}
