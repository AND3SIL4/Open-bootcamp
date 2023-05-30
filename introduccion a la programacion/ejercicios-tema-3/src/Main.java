// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.


// Ejercicio

public class Main {
    public static void main(String[] args) {
        int result = sumaNumerous(1,2,3);
        System.out.println(result);

        Coche carrito = new Coche();
        carrito.sumarPuertas();
        carrito.sumarPuertas();
        carrito.sumarPuertas();
        carrito.sumarPuertas();

        System.out.println(carrito.puertas);
    }
    public static int sumaNumerous(int a, int b, int c){
        return a + b +c;
    }
}
class Coche{
    int puertas = 0;

    public void sumarPuertas(){
        this.puertas ++;
    }
}