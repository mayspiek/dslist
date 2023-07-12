package com.devsuperior.dslist.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dslist.dto.GameMinDTO;
import com.devsuperior.dslist.entities.Game;
import com.devsuperior.dslist.repositories.GameRepository;

//o dto (data transfer object) é uma classe que vai ter somente os dados que eu quero enviar para o frontend
@Service
public class GameService {
    
    @Autowired
    private GameRepository gameRepository;
    
    public List<GameMinDTO> findAll(){
      List<Game> result = gameRepository.findAll();
      //map faz a conversao de um tipo de objeto para outro
      return result.stream().map(x -> new GameMinDTO(x)).toList();
    }
}
