type Especie = {
    id?: number
    nomeCientifico:string
    nomePopular: string
    habitat: string
    familia: string
    ordem: string
}
export const getEspecie = (jsonObject:any): Especie => {
    const {id,nome_cientifico,nome_popular,habitat,familia,ordem}=jsonObject

    const especie:Especie = {
        id, habitat , familia , ordem , nomeCientifico:nome_cientifico , nomePopular:nome_popular
    }
    return especie
}


export default Especie
