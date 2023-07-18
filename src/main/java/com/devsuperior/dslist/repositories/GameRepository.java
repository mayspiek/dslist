package com.devsuperior.dslist.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dslist.entities.Game;
import com.devsuperior.dslist.projections.GameMinProjection;

//repository faz operações com o banco de dados
//é feito uma classe que extende de jpa repository porque essa classe já tem várias operações prontas para trabalhar com o banco de dados
//jpa repository recebe o tipo da entidade e o tipo do id da entidade q nesse caso é long	
public interface GameRepository extends JpaRepository<Game, Long>{
    //quando usa o sql nativo, o resultado da consulta tem que ser uma interface, que no spring se chama projection 
    @Query(nativeQuery = true, value = """
		SELECT tb_game.id, tb_game.title, tb_game.game_year AS gameYear, tb_game.img_url AS imgUrl,
		tb_game.short_description AS shortDescription, tb_belonging.position
		FROM tb_game
		INNER JOIN tb_belonging ON tb_game.id = tb_belonging.game_id
		WHERE tb_belonging.list_id = :listId
		ORDER BY tb_belonging.position
			""")
    List<GameMinProjection> searchByList(Long listId);
    
}
