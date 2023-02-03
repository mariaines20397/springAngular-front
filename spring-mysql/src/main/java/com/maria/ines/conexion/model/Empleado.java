package com.maria.ines.conexion.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name= "empleados")
public class Empleado /*implements Serializable*/{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="nombre", nullable = false, length = 30)
	private String nombre;
	
	@Column(name="apellido", nullable = false, length = 30)
	private String apellido;
	
	@Column(name="edad", nullable = false)
	private int edad;
	
	@Column(name="puesto", nullable = false)
	private String puesto;
	
	/*TIPOS DE DATOS PRIMITIVOS
	int number;
	char caracter;
	boolean status;
	Integer numero;
	String texto;
	Float flo;*/
	
	
	
	public Empleado() {
		
	}

	public int getEdad() {
		return edad;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Empleado(Long id, String nombre) {
		super();
		this.id = id;
		this.nombre = nombre;
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3849169462527489455L;
	
}
