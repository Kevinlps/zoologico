type Jaula = {
    matricula: string;
    nome: string;
    dataDeNascimento: Date;
  };
  
  export const getJaula = (jsonObject: any) => {
    const { matricula, nome, data_nascimento } = jsonObject;
  
    const jaula: Jaula = {
      matricula,
      nome,
      dataDeNascimento: data_nascimento
    };
  
    return jaula;
  }
  
  export default Jaula;
  