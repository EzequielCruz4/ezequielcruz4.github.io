/* Projetos selecionados. Edite as informações e o contato neste arquivo. */
window.PORTFOLIO = {
  email: 'ezequielfcruzsousa@gmail.com',
  github: 'https://github.com/EzequielCruz4',
  projects: [
    {
      id: 'calme', number: '01', label: 'APLICATIVO MOBILE · PROJETO EM EQUIPE',
      title: 'Calme', subtitle: 'Uma primeira experiência de acolhimento.',
      description: 'Um app de autoconhecimento emocional. Minha atuação se concentrou na interface e nas etapas que apresentam o aplicativo ao usuário.',
      role: 'UI, guia de estilo e implementação do onboarding.',
      tags: ['C#', '.NET MAUI', 'UI', 'Onboarding'],
      repository: null,
      context: 'Apresentar um aplicativo de acolhimento emocional exige clareza sobre o que ele oferece e quais são seus limites. No Calme, o onboarding explica a proposta antes do uso e informa que o app não faz diagnósticos nem substitui acompanhamento profissional.',
      contribution: 'Fui responsável pela UI e implementei as quatro etapas do onboarding em .NET MAUI, usando o protótipo e o guia de estilo como referência. Trabalhei nos textos de apresentação, na navegação, nos indicadores de progresso e na seleção do motivo de uso, além dos temas claro e escuro.',
      features: ['Quatro etapas: boas-vindas, propósito, limites do aplicativo e motivo de uso.', 'Navegação de avançar e voltar com indicadores de progresso.', 'Escolha de um único motivo, com Continuar disponível após a seleção.', 'Alternativa para explorar sem escolher um motivo.', 'Botão de apoio disponível durante o onboarding e retorno à etapa anterior.', 'Cores, estilos e fonte Nunito organizados a partir do guia visual.'],
      decisions: [
        {title: 'Um passo por vez', text: 'Dividir a apresentação em quatro etapas dá espaço para explicar o propósito, os limites e as escolhas iniciais do usuário.'},
        {title: 'Escolha sem pressão', text: 'A alternativa de explorar primeiro mantém o fluxo disponível mesmo para quem ainda não quer selecionar um motivo.'},
        {title: 'Consistência visual', text: 'Cores, tipografia e estilos de botões seguem o protótipo e o guia de estilo, incluindo os temas claro e escuro.'}
      ],
      scope: 'Recorte apresentado: minha contribuição de UI e onboarding. As demais funcionalidades pertencem ao projeto em equipe; algumas rotas ainda estavam em desenvolvimento na documentação consultada.',
      type: 'PROJETO ACADÊMICO EM EQUIPE',
      focus: 'Experiência de entrada'
    },
    {
      id: 'pokedex', number: '02', label: 'APLICATIVO · DADOS LOCAIS',
      title: 'Pokédex', subtitle: 'Uma coleção visual, do cadastro ao banco.',
      description: 'Aplicação para cadastrar, pesquisar e organizar Pokémon, conectando uma interface em XAML à persistência local em SQLite.',
      role: 'Interface, modelagem dos registros e persistência local.',
      tags: ['C#', '.NET MAUI', 'XAML', 'SQLite'],
      repository: 'https://github.com/EzequielCruz4/PokedexMAUI',
      context: 'O projeto reúne cadastro, imagens, tipos e poderes em uma coleção de Pokémon. O desafio é conectar o fluxo de interface ao armazenamento e à recuperação dos registros locais.',
      contribution: 'O trabalho reúne as telas de listagem e cadastro, a modelagem de Pokémon e poderes e a camada de acesso ao SQLite. A interface permite pesquisar a coleção e filtrar os registros por tipo.',
      features: ['Cadastro e edição com nome, tipo, imagem e lista de poderes.', 'Pesquisa por nome ou poder e filtro por tipo.', 'Tabelas relacionadas para Pokémon e poderes.', 'Salvamento em transação para manter o cadastro e seus poderes consistentes.', 'Exclusão de registros, contagem e cópia do banco local.'],
      decisions: [
        {title: 'Dados relacionados', text: 'Pokémon e poderes são armazenados em tabelas relacionadas, separando as entidades e mantendo a associação entre os registros.'},
        {title: 'Persistência consistente', text: 'O salvamento do Pokémon e de seus poderes usa uma transação. O cadastro é confirmado como uma única operação.'},
        {title: 'Encontrar com facilidade', text: 'Busca por nome ou poder e seleção de tipo ajudam a explorar a coleção sem depender apenas da rolagem da lista.'}
      ],
      scope: 'Projeto acadêmico. As prévias do portfólio usam dados de exemplo e foram recriadas a partir da estrutura da aplicação.',
      type: 'PROJETO ACADÊMICO',
      focus: 'Interface e persistência'
    }
  ]
};
