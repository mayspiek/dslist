package com.devsuperior.dslist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dslist.entities.GameList;

//repository faz operações com o banco de dados
//é feito uma classe que extende de jpa repository porque essa classe já tem várias operações prontas para trabalhar com o banco de dados
//jpa repository recebe o tipo da entidade e o tipo do id da entidade q nesse caso é long	
public interface GameListRepository extends JpaRepository<GameList, Long>{
    
}
