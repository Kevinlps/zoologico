import sql from "../config/db";
import Especie, { getEspecie } from "../models/Especie";


export const getEspeciesHabitat = async (habitat: string): Promise<Especie[]> => {
  const search = '%' + habitat + '%';

  const response = await sql`
    SELECT * FROM especie WHERE habitat ILIKE ${search};
  `;

  const especies = response.map((jsonObject) => getEspecie(jsonObject));

  return especies;
}

export const getNomecientifico = async (nomeCientifico: string): Promise<Especie> => {
  const response = await sql`
    SELECT * FROM especie WHERE nome_cientifico ILIKE ${nomeCientifico};
  `;

  const especies = response.map((jsonObject) => getEspecie(jsonObject));

  return especies[0];
}

export const getespecieId = async (id: number): Promise<Especie> => {
  const response = await sql`
    SELECT * FROM especie WHERE id = ${id};
  `;

  const species = response.map((jsonObject) => getEspecie(jsonObject));

  return species[0];
}