import sql from './../config/db';

import Jaula from '../models/Jaula';
import Zelador, { getZelador } from '../models/Zelador';

export const getZeladorCodigo = async (codigo: string): Promise<Zelador> => {
  const response = await sql`
    SELECT * FROM jaula WHERE codigo LIKE ${codigo};
  `;

  const zelador = response.map(async (jsonObject) => await getZelador(jsonObject));

  return zelador[0];
}

export const getZeladorJaula = async (jaula: Jaula): Promise<Zelador[]> => {
  const response = await sql`
    SELECT jaula.codigo, jaula.area FROM jaula
      INNER JOIN jaula_zelador ON jaula.codigo = jaula_zelador.id_jaula
      INNER JOIN zelador ON zelador.matricula = jaula_zelador.id_zelador
      WHERE matricula LIKE ${jaula.matricula};
  `;

  const zelador = response.map(async (jsonObject) => await getZelador(jsonObject));

  return await Promise.all(zelador);
}