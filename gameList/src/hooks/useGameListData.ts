import axios, { AxiosPromise } from "axios"
import { gameListData } from "../interface/GameListData";
import { useQuery } from "@tanstack/react-query";
import { GenreList } from "../interface/GenreList";

const API_URL = "http://ec2-184-72-133-188.compute-1.amazonaws.com:8080"

const fetchGameList = async (): AxiosPromise<gameListData[]> => {
    const response = axios.get(API_URL + '/lists/1/games')
    return response;
}

const fetchGenreList = async (): AxiosPromise<GenreList[]> => {
    const response = axios.get(API_URL + '/lists')
    return response;
}

export function useGenreListData(){
    const query = useQuery({
        queryFn: fetchGenreList,
        queryKey: ['genreListData'],
        retry: 2
    })

    return {
        ...query,
        genreData: query.data?.data
    }
}

export function useGameListData(){
    const query = useQuery({
        queryFn: fetchGameList,
        queryKey: ['gameListData'],
        retry: 2
    })
    
    
    return {
        // tudo que tem dentro de query
        ...query,
        // o reactquery ja adiciona o dado vindo do backend dentro do objeto data e o axios também faz a mesma coisa
        data: query.data?.data
    }
}