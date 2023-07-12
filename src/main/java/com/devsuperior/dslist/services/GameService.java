package com.devsuperior.dslist.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dslist.dto.GameDTO;
import com.devsuperior.dslist.dto.GameMinDTO;
import com.devsuperior.dslist.entities.Game;
import com.devsuperior.dslist.repositories.GameRepository;

//o dto (data transfer object) é uma classe que vai ter somente os dados que eu quero enviar para o frontend
//o service é uma camada que faz a intermediação entre o controller e o repository
@Service
public class GameService {
    
    @Autowired
    private GameRepository gameRepository;

    //essa anotação readOnly é para não fazer lock no banco de dados, assegura que a operação vai ser somente de leitura
    @Transactional(readOnly = true) //do spring
    public GameDTO findById(Long id){
        Game result = gameRepository.findById(id).get();
        return new GameDTO(result);
    }

    @Transactional(readOnly = true)
    public List<GameMinDTO> findAll(){
      List<Game> result = gameRepository.findAll();
      //map faz a conversao de um tipo de objeto para outro
      return result.stream().map(x -> new GameMinDTO(x)).toList();
    }
}
