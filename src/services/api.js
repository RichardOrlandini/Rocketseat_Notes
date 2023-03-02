//Configuração do axios.

import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocktenotes-api-richard-orlandini.onrender.com" //podemos incluir a parte do endereço da api que se repete nas requisições
});
