import { getespecieId } from '../controllers/EspecieController'
import { getjaulaespecimeId } from '../controllers/JaulaController'
import Especie from './Especie'
import Jaula from './Jaula'

type Especime = {
    id?:number
    numeroDeserie:number
    apelido?:string
    especie: Especie
    jaula: Jaula[]
}
export const getEspecime = async (jsonObject: any): Promise<Especime>=> {
    const {id,nro_de_serie,apelido,id_especie}=jsonObject
    const especie = await getespecieId(id_especie)
    const jaula = await getjaulaespecimeId(id)

    const especime:Especime = {
        id,numeroDeserie:nro_de_serie ,apelido,especie,jaula 
    }
    return especime
}
export default Especime
