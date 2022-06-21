import Jaula from "./Jaula"
import { getJaulaeCodigoZelador } from '../controllers/JaulaController';


type Zelador = {
    codigo:string,
    area:number,
    jaula: Jaula[]
}
export const getZelador = async (jsonObject:any):Promise<Zelador>=> {
    const {codigo, area}=jsonObject
    
    const jaula = await getJaulaeCodigoZelador(codigo)

    const zelador:Zelador = {
        codigo,
        area: parseFloat(area),
        jaula
    }
        return zelador
    }

export default Zelador


