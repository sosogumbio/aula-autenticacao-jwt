class PessoaRequests {
    private serverUrl: string;
    private endpointListarPessoas: string;

    constructor() {
        this.serverUrl = 'http://localhost:3333';
        this.endpointListarPessoas = '/api/pessoas';
    }

async listarPessoas() {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${this.serverUrl}${this.endpointListarPessoas}`, {
                headers: {
                    'x-access-token': `${token}`
                }
            });

            if(!response.ok) {
                throw new Error('Não foi possível listar as pessoas.');
            }
            return response.json();
        } catch (error) {
            console.error(`Erro ao fazer consulta à API: ${error}`);
            return null;
        }
    }

}

export default new PessoaRequests();