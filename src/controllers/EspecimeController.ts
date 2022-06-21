import sql from './../config/db';

import Zelador from '../models/Zelador'
import Especies from '../models/Especie'
import Jaula from '../models/Jaula'

import Especime, { getEspecime } from '../models/Especime'

export const getEspecimeEspecies = async (especies: Especies): Promise<Especime[]> => {
  const response = await sql`
    SELECT * FROM especime
      INNER JOIN especie ON especime.id_especie = especie.id
      WHERE especie.id = ${especies.id};
  `;

  const especime = response.map(async (jsonObject) => await getEspecime(jsonObject));

  return await Promise.all(especime);
}

export const getEspecimeZelador = async (zelador: Zelador): Promise<Especime[]> => {
  const response = await sql`
    SELECT * FROM especime
      INNER JOIN jaula ON especime.id_jaula = jaula.codigo
      WHERE codigo = ${zelador.codigo};
  `;

  const especime = response.map(async (jsonObject) => await getEspecime(jsonObject));

  return await Promise.all(especime);
}

export const getEspecimeJaula = async (jaula: Jaula): Promise<Especime[]> => {
  const response = await sql`
    SELECT especime.id, especime.nro_de_serie, especime.apelido, especime.id_especie, especime.id_jaula
      FROM zelador
      INNER JOIN jaula_zelador ON zelador.matricula = jaula_zelador.id_zelador
      INNER JOIN especime ON especime.id_jaula = jaula_zelador.id_jaula
      WHERE matricula LIKE ${jaula.matricula};
  `;

  const especime = response.map(async (jsonObject) => await getEspecime(jsonObject));
  
  return await Promise.all(especime);
}