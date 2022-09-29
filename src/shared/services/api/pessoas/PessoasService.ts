import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IListagemPessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}
interface IDetalhePessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}
type TPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => { 
    try {
        const urlRelativa = `/pessoas?_page=${page}
        &_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

        const { data, headers } = await Api.get(urlRelativa);

        if(data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            }
        }

        return new Error('Erro ao listas os registros');

    } catch (error) {
        return new Error((error as {message: string}).message || 'Erro ao listas os registros');
    }
};

const getById = async (id = 1): Promise<IDetalhePessoa | Error> => {

    try {

        const urlRelativa = `/pessoas/${id}`;

        const { data } = await Api.get(urlRelativa);

        if(data) {
            return data;
        }

        return new Error('Registro não encontrado');
        
    } catch (error) {
        return new Error((error as {message: string}).message || 'Registro não encontrado');
    }
 };

const create = async (): Promise<any> => { };

const updatById = async (): Promise<any> => { };

const deleteById = async (): Promise<any> => { };

export const PessoasService = {
    getAll,
    getById, 
    create,
    updatById, 
    deleteById,
}