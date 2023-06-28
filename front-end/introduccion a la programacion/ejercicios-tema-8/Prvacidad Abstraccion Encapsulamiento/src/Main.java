public class Main {
    public static void main(String[] args) {
        System.out.println("Persona 1...");
        Persona persona = new Persona();
        persona.setNombre("Andres Felipe Silva");
        persona.setEdad(13);
        persona.setTelefono(123456789);

        System.out.println(persona.getNombre());
        System.out.println(persona.getEdad());
        System.out.println(persona.getTelefono());

        System.out.println("Persona 2...");
        Persona persona2 = new Persona();
        persona2.setNombre("Mario Gomez");
        persona2.setEdad(23);
        persona2.setTelefono(98765432);

        System.out.println(persona2.getNombre());
        System.out.println(persona2.getEdad());
        System.out.println(persona2.getTelefono());

    }
}

class Persona{
    private int edad;
    private String nombre;
    private int telefono;

    public  void setEdad (int edad) {
        this.edad = edad;
    }
    public int getEdad (){
        return this.edad;
    }

    public void setNombre (String nombre) {
        this.nombre = nombre;
    }
    public String getNombre () {
        return this.nombre;
    }
    public void setTelefono (int telefono) {
        this.telefono = telefono;
    }
    public int getTelefono () {
        return this.telefono;
    }
}