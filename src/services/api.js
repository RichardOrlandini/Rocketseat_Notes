//Configuração do axios.

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333" // "https://rocktenotes-api-richard-orlandini.onrender.com" //podemos incluir a parte do endereço da api que se repete nas requisições
});
