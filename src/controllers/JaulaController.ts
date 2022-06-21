import sql from './../config/db';

import Jaula, { getJaula } from '../models/Jaula';
import Especie from '../models/Especie';

export const getJaulaMatricula = async (matricula: string): Promise<Jaula> => {
  const response = await sql`
    SELECT * FROM zelador WHERE matricula LIKE ${matricula};
  `;

  const caretakers = response.map((jsonObject) => getJaula(jsonObject));

  return caretakers[0];
}

export const getJaulaEspecie = async (especie: Especie): Promise<Jaula[]> => {
  const response = await sql`
    SELECT zelador.matricula, zelador.nome, zelador.data_nascimento
      FROM zelador
      INNER JOIN jaula_zelador ON zelador.matricula = jaula_zelador.id_zelador
      INNER JOIN especime ON especime.id_jaula = jaula_zelador.id_jaula
      INNER JOIN especie ON especie.id = especime.id_especie
      WHERE especie.id = ${especie.id}
      GROUP BY zelador.matricula;
  `;

  const jaula = response.map((jsonObject) => getJaula(jsonObject));

  return jaula;
}

export const getJaulaeCodigoZelador = async (codigo: string): Promise<Jaula[]> => {
  const response = await sql`
    SELECT zelador.matricula, zelador.nome, zelador.data_nascimento
      FROM zelador
      INNER JOIN jaula_zelador ON zelador.matricula = jaula_zelador.id_zelador
      WHERE id_jaula = ${codigo}
      GROUP BY zelador.matricula;
  `;
  
  const jaula = response.map((jsonObject) => getJaula(jsonObject));

  return jaula;
}

export const getjaulaespecimeId = async (especimeId: number): Promise<Jaula[]>  => {
  const response = await sql`
    SELECT zelador.matricula, zelador.nome, zelador.data_nascimento
      FROM zelador
      INNER JOIN jaula_zelador ON zelador.matricula = jaula_zelador.id_zelador
      INNER JOIN especime ON jaula_zelador.id_jaula = especime.id_jaula
      WHERE especime.id = ${especimeId}
      GROUP BY zelador.matricula;
  `;
  
  const jaula = response.map((jsonObject) => getJaula(jsonObject));

  return  jaula;
}