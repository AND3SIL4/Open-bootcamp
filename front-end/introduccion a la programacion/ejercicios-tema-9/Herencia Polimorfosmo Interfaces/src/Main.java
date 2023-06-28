import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        showCliente();
        showTrabajador();
    }
    public static void showCliente(){
        Scanner scanner = new Scanner(System.in);
        Cliente cliente = new Cliente();
        System.out.println("Ingrese la edad del cliente: ");
        int inputNumber = scanner.nextInt();
        cliente.setEdad(inputNumber);
        scanner.nextLine();
        System.out.println("Ingrese el nombre del cliente: ");
        String nombreCliente = scanner.nextLine();
        cliente.setNombre(nombreCliente);
        System.out.println("Ingrese el telefono del cliente: ");
        int telefonoCliente = scanner.nextInt();
        cliente.setTelefono(telefonoCliente);
        scanner.nextLine();
        System.out.println("Ingrese el tipo de credito del cliente: ");
        String tipoCreditoCliente = scanner.nextLine();
        cliente.setCredito(tipoCreditoCliente);

        System.out.println(cliente.getEdad());
        System.out.println(cliente.getNombre());
        System.out.println(cliente.getTelefono());
        System.out.println(cliente.getCredito());
    }
    public static void showTrabajador(){
        Scanner scanner = new Scanner(System.in);
        Trabajador trabajador = new Trabajador();
        System.out.println("Ingrese la edad del trabajador: ");
        int edadTrabajador = scanner.nextInt();
        trabajador.setEdad(edadTrabajador);
        scanner.nextLine();
        System.out.println("Ingrese el nombre del trabajado: ");
        String nombreTrabajador = scanner.nextLine();
        trabajador.setNombre(nombreTrabajador);
        System.out.println("Ingrese el telefono del trabajador: ");
        int telefonoTrabajador = scanner.nextInt();
        trabajador.setTelefono(telefonoTrabajador);
        System.out.println("Ingrese el salario del trabajador :");
        int salarioTrabajador = scanner.nextInt();
        trabajador.setSalario(salarioTrabajador);

        System.out.println(trabajador.getEdad());
        System.out.println(trabajador.getNombre());
        System.out.println(trabajador.getTelefono());
        System.out.println(trabajador.getSalario());
    }
}

class Persona {
    private int edad;
    private String nombre;
    private int telefono;

    public void setEdad(int edad) {
        this.edad = edad;
    }
    public int getEdad() {
        return this.edad;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getNombre(){
        return this.nombre;
    }
    public void setTelefono(int telefono){
        this.telefono = telefono;
    }
    public int getTelefono(){
        return this.telefono;
    }
}
class Cliente extends Persona {
    private String credito;

    public void setCredito(String credito) {
        this.credito = credito;
    }
    public String getCredito(){
        return this.credito;
    }
}

class Trabajador extends Persona{
    private int salario;

    public void setSalario(int salario){
        this.salario = salario;
    }
    public int getSalario(){
        return this.salario;
    }
}