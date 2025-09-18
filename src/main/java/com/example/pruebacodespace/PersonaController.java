package com.example.pruebacodespace;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/persona")
public class PersonaController {
    @PostMapping("/ficha")
    public String recibirFicha(@RequestBody Persona persona) {
        return "Ficha recibida: " + persona.getNombre() + " " + persona.getApellido() + ", Edad: " + persona.getEdad() + ", DNI: " + persona.getDni();
    }
}
