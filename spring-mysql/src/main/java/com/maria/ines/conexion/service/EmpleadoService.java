package com.maria.ines.conexion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maria.ines.conexion.model.Empleado;
import com.maria.ines.conexion.repository.EmpleadoRepository;

@Service
public class EmpleadoService {

	@Autowired
	EmpleadoRepository empleadoRepository;
	
	public List<Empleado> getAllEmpleados(){
		
		return this.empleadoRepository.findAll();
		
	}
	
	public Empleado update(Empleado empleado, Long id) {
		Empleado empleadoSelected=this.getByIdEmpleado(id);
		empleadoSelected.setApellido(empleado.getApellido());
		empleadoSelected.setNombre(empleado.getNombre());
		empleadoSelected.setEdad(empleado.getEdad());
		empleadoSelected.setPuesto(empleado.getPuesto());
		return this.empleadoRepository.save(empleadoSelected);
	}
	
	public Empleado getByIdEmpleado(Long id) {
		return this.empleadoRepository.findById(id).orElse(null);
	}
	
	public void deleteEmpleado(Long id) {
		this.empleadoRepository.deleteById(id);
	}

	public Empleado save(Empleado empleado) {
		return this.empleadoRepository.save(empleado);
	}
}
