import { server } from './server/Server';

interface Teste{
    
}

server.listen(process.env.PORT || 3333, ()=> console.log(`App rodando na porta ${process.env.PORT || 3333}`));
