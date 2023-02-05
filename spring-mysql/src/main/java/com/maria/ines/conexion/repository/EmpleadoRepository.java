package com.maria.ines.conexion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.maria.ines.conexion.model.Empleado;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
	
	
/*
 * Un repositori su funcion es acceder, realizar consultas a la BD 
 * */
}
