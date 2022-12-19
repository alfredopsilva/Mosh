import java.text.NumberFormat;

public class Main {

    /*
    * Class are constantly misguiding.
    * Class are like blueprint or template, while an object is an instance of a class.
    * We use UML to visualize the classes.
    *
    *
    * */
    public static void main(String[] args) {
        var employee = new Employee(120_000, 20);
        var employee2 = new Employee(150000);
        int wage2 = employee2.calculateWage(0);
        employee2.displayingInfo(wage2);;
        int wage = employee.calculateWage(1223);
        employee.displayingInfo(wage);
        Employee.printNumberOfEmployee();
        ArrayList

    }
}