import sql, { clearData, createTables, loadInitialData } from './config/db'


import {
  getZeladorCodigo,
  getZeladorJaula
} from './controllers/ZeladorController';

import {
  getJaulaEspecie,
  getJaulaMatricula
} from './controllers/JaulaController';

import {
  getEspeciesHabitat,
  getNomecientifico
} from './controllers/EspecieController';

import {
  getEspecimeZelador,
  getEspecimeEspecies,
  getEspecimeJaula
} from './controllers/EspecimeController';

const run = async () => {
  await createTables()
  await clearData()
  await loadInitialData()
  /**
   * Execute as funções responsáveis pelas consultas aqui!
   */

   let primeiroZelador = await getZeladorCodigo('00001');
   let AlandaSilvaNascimento = await getJaulaMatricula('12003'); 
   
   const especieEuropeia = await getEspeciesHabitat('europa');
   const especieNomeC = await getNomecientifico('Panthera tigris');
   const especieEspecime = await getEspecimeEspecies(especieNomeC);
   const zeladorEspecime = await getEspecimeZelador(primeiroZelador);
   const especimeZelador = await getEspecimeJaula(AlandaSilvaNascimento);
   const zeladorAlan = await getZeladorJaula(AlandaSilvaNascimento);
   const zeladorEspecie = await getJaulaEspecie(especieNomeC);
 
   console.log('Espécies da Europa'); console.table(especieEuropeia);
   console.log('Panthera tigris'); console.table(especieNomeC);
   console.log('Tigre'); console.table(especieEspecime);
   console.log('Espécimes da primeira jaula'); console.table(zeladorEspecime);
   console.log('Espécimes cuidados pelo Alan da silva'); console.table(especimeZelador);
   console.log('Jaulas cuidadas pelo Alan da silva'); console.table(zeladorAlan);
   console.log('Zeladores que cuidam de espécimes de Tigre');
   console.table(zeladorEspecie);

  /**
   * Fim das consultas
   */

  await sql.end()
  console.log('Mal feito desfeito')
}

run()
