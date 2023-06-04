import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    numeroPositivo();
    bucle();
    bucleDoWhile();
    bucleFor();
    funSwicth();

    }
    // Condicional con el if
    public static void numeroPositivo(){
        System.out.println("Ejercicio de condicional...");
        int number = 5;

        if (number == 0) {
            System.out.println("El numero es neutro");
        } else if (number > 0) {
            System.out.println("El numero es positivo");
        } else {
            System.out.println("El numero es negativo");
        }
    }

    // Bucle con while
    public static void bucle(){
        System.out.println("Ejercicio de bucles con while...");
        int numeroWhile = 0;

        while (numeroWhile < 3){
            System.out.println(numeroWhile);
            numeroWhile ++;
        }
    }
    // Bucle do while
    public static void bucleDoWhile(){
        System.out.println("Bucle con do while");
        int number = 0;

        do{
            System.out.println(number);
            number ++;
        } while (number < 3);
    }
    // Bucle con for
    public static void bucleFor (){
        System.out.println("Bucle con for");

        for (int numeroFor = 0; numeroFor < 3; numeroFor ++){
            System.out.println(numeroFor);
        }
    }
    // Uso de switch
    public static void funSwicth(){
         Scanner scanner = new Scanner(System.in);
         System.out.println("Ingrese la estacion: ");
         String input = scanner.nextLine();
         String estacion = input.toLowerCase();
         switch (estacion){
             case "invierno":
                 System.out.println("Es:" + estacion);
                 break;
             case "verano":
                 System.out.println("Es: " + estacion);
                 break;
             case "otoño":
                 System.out.println("Es:" + estacion);
                 break;
             case "primavera":
                 System.out.println("Es: " + estacion);
                 break;
             default:
                 System.out.println("palabra no validad para estacion");
         }
    }
}

