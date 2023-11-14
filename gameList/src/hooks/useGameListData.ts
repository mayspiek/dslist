import axios, { AxiosPromise } from "axios"
import { gameListData } from "../interface/GameListData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<gameListData[]> => {
    const response = axios.get(API_URL + '/1/games')
    return response;
}

export function useGameListData(){
    const query = useQuery({
        queryFn: fetchData,
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