package br.com.course.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Course implements Serializable {
	
	@Id
	@JsonProperty(value = "id")
	private String id;
	@JsonProperty(value = "curso")
	private String curso;
	@JsonProperty(value = "inicio")
	private String inicio;
	@JsonProperty(value = "fim")
	private String fim;
	@JsonProperty(value = "duracao")
	private String duracao;
}
