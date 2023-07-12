package com.devsuperior.dslist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dslist.entities.Game;

//repository faz operações com o banco de dados

//jpa repository recebe o tipo da entidade e o tipo do id da entidade q nesse caso é long	
public interface GameRepository extends JpaRepository<Game, Long>{
    
}