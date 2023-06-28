public class Main {
    public static void main(String[] args) {
//        Familiar familiar = new Familiar();
//        personilla(familiar);
//        System.out.println(factorial(3));
        suma(10,20);

    }

    // Funcion que recibe como parametro un objeto de tipo interfaz
    public static void personilla(Personas personas){
        personas.Mirar("Hola");
    }
    // Ejemplo de funciones recursivas
    public static int factorial(int numero){
        int resultado;
        if(numero == 1){
            return 1;
        }
        resultado = factorial(numero - 1) * numero;
        return resultado;
    }
    // Otro ejemplo de recursividad
    public static void suma(int a, int b){
        int temp = a + b;
        System.out.println("A vale" + a + "B vale" + b + "C vale" + temp);
        if (b > 90) {
            return;
        }
        suma(a, temp);
    }
}
// Interfaz o plantilla
interface Personas{
    void Mirar(String aDondeMirar);
    void Comer(String queComer);
}

// Clase que implementa interfaz
class Familiar implements Personas{
    public void Mirar(String aDondeMirar){
        System.out.println("Television");
    }
    public void Comer (String queComer){
        System.out.println();
    }
}