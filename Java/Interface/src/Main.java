public class Main {
    /*
    * Interfaces
    * We use interfaces to build loosely-coupled, extensible, testable applications.
    * Interface are similar to a class, but it only includes methods declarations ( there are no code
    * implementation there ).
    * We can resume like :
    * Interface => What should be done, like , Data Compression, Encryption, Sorting and Searching.
    * Classes => How it should be done,
    * Interface Segregation Principle => We need to split a big interface in smaller pieces.
    *
    * */
    public static void main(String[] args) {
        // Poor Mans Dependency Injection
        var calculator = new TaxCalculator2022(2000090);
        var report = new TaxReport();
        report.show(calculator);





    }
}