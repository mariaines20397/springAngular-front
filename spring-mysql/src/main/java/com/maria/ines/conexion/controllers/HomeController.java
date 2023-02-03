package com.maria.ines.conexion.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.maria.ines.conexion.model.Empleado;
import com.maria.ines.conexion.service.EmpleadoService;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/")
public class HomeController {

	@Autowired
	EmpleadoService empleadoService;
	
	@GetMapping
	public List<Empleado> index() {
		return empleadoService.getAllEmpleados();
	}
	
	@GetMapping("/{id}")
	public Empleado show (@PathVariable Long id) {
		return this.empleadoService.getByIdEmpleado(id);
	}
	
	@PostMapping("/create")
	@ResponseStatus(HttpStatus.CREATED) //201 se creo contenido
	public Empleado create(@RequestBody Empleado empleado) {
		return this.empleadoService.save(empleado);
	}

	@PutMapping("/edit/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Empleado update(@RequestBody Empleado empleado, @PathVariable Long id) {
		
		
		return this.empleadoService.update(empleado,id);
		
	}
	
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT) //204
	public void delete(@PathVariable Long id) {
		this.empleadoService.deleteEmpleado(id);
	}
	
//	
//	@GetMapping("/home")
//	public String message() {
//		return "Este es un mensaje feo que no se muestra";
//	}
//	
//	@GetMapping("/home/claudio")
//	public String messageParaClaudio() {
//		return "Gracias por enseñarme Spring!! :) Mira, me salio ♥";
//	}
}
