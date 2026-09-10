import { ServiceItem, MilestoneGroup, ReviewItem, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: 'Katiussya Amorim',
  title: 'Fonoaudióloga Clínica',
  crfa: 'CRFa: 9023-6',
  clinicName: 'Fonoaudiologia Integrada',
  city: 'Sinop',
  state: 'MT',
  address: 'Rua das Aroeiras, 1557 - Setor Comercial, Sinop - MT, CEP 78550-000',
  shortAddress: 'R. das Aroeiras, 1557 - St. Comercial, Sinop - MT',
  phoneDisplay: '(65) 99984-4088',
  phoneRaw: '5565999844088',
  googleMapsUrl: 'https://maps.app.goo.gl/k4mhuYe5ShgwUYhA8',
  wazeUrl: 'https://waze.com/ul?q=Rua+das+Aroeiras+1557+Sinop+MT',
  hours: 'Segunda a Sexta: 08:00 às 18:00 (Atendimento com hora marcada)',
  rating: 5.0,
  totalReviews: 28, // Consolidated ratings
  consultationFeeRef: 'Atendimento particular com emissão de recibo para reembolso em convênios',
};

export const CLINIC_PHOTOS = [
  {
    id: 'principal',
    src: '/assets/clinic/foto_principal.jpg',
    alt: 'Dra. Katiussya Amorim - Fonoaudióloga Clínica em Sinop MT',
    title: 'Dra. Katiussya Amorim',
    subtitle: 'Fonoaudióloga Clínica • CRFa: 9023-6',
    description: 'Especialista em Autismo (TEA), TDAH, Atraso de Fala e Fonoaudiologia Integrada.',
    tag: 'Profissional',
  },
  {
    id: 'consultorio',
    src: '/assets/clinic/consultorio_interno.jpg',
    alt: 'Consultório de Fonoaudiologia Integrada com brinquedos terapêuticos em Sinop MT',
    title: 'Consultório Terapêutico',
    subtitle: 'Espaço lúdico e sensorial',
    description: 'Equipado com recursos pedagógicos, estimulação sensorial e ambiente acolhedor.',
    tag: 'Ambiente Interno',
  },
  {
    id: 'fachada',
    src: '/assets/clinic/fachada_externa.jpg',
    alt: 'Fachada do consultório na Rua das Aroeiras, 1557 em Sinop MT',
    title: 'Fachada do Consultório',
    subtitle: 'Rua das Aroeiras, 1557 - Setor Comercial',
    description: 'Fácil localização em Sinop, com estacionamento acessível e ambiente seguro.',
    tag: 'Fachada Externa',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'autismo-tdah',
    title: 'Autismo (TEA) e TDAH',
    category: 'neuro',
    categoryLabel: 'Neurodesenvolvimento',
    badge: 'Especialidade Principal',
    shortDescription: 'Intervenção precoce, Comunicação Aumentativa e Alternativa (CAA) e desenvolvimento de linguagem funcional.',
    fullDescription: 'Abordagem estruturada, lúdica e baseada em evidências científicas para crianças e jovens dentro do Transtorno do Espectro Autista e TDAH. Estimulamos a intenção comunicativa, a atenção compartilhada, a interação social e a autonomia verbal ou por meio de pranchas de comunicação.',
    indications: [
      'Ausência ou atraso na fala e no olhar',
      'Pouco interesse em interagir ou compartilhar brincadeiras',
      'Ecolalia (repetição mecânica de falas de desenhos ou pessoas)',
      'Dificuldade para seguir comandos ou manter atenção na conversa',
      'Crises de frustração quando não consegue se expressar'
    ],
    howItWorks: 'A terapia fonoaudiológica ocorre através de atividades lúdicas individualizadas, parceria constante com a família e com a equipe escolar para generalização das conquistas.',
    iconName: 'Sparkles',
  },
  {
    id: 'atraso-fala',
    title: 'Atraso no Desenvolvimento da Fala',
    category: 'speech',
    categoryLabel: 'Fala e Linguagem',
    badge: 'Intervenção Precoce',
    shortDescription: 'Estímulo à aquisição de vocabulário, estruturação de frases e compreensão verbal na primeira infância.',
    fullDescription: 'Crianças que demoram a falar ou que produzem poucos sons precisam de estimulação precoce orientada. Quanto mais cedo a intervenção fonoaudiológica começar, maiores e mais rápidos são os ganhos no neurodesenvolvimento.',
    indications: [
      'Criança de 1 ano e meio que não fala palavras simples',
      'Criança de 2 anos com vocabulário inferior a 50 palavras ou que não junta duas palavras',
      'Criança de 3 anos cuja fala a família ou estranhos não conseguem entender',
      'Dificuldade para compreender instruções cotidianas'
    ],
    howItWorks: 'Sessões dinâmicas que usam brincadeiras, sons direcionados, modelos de pronúncia e orientações práticas para os pais aplicarem em casa no dia a dia.',
    iconName: 'Baby',
  },
  {
    id: 'trocas-fonologicas',
    title: 'Troca de Letras e Sons na Fala',
    category: 'speech',
    categoryLabel: 'Fala e Linguagem',
    badge: 'Articulação',
    shortDescription: 'Correção de desvios fonológicos, dificuldades articulatórias e pronúncia correta de consoantes e fonemas (R, L, S).',
    fullDescription: 'Avaliação precisa do inventário fonético para corrigir trocas como "pato" por "bato", dificuldade em falar o "R" ou "L" ("palavra" ou "carro"), e prevenção de impactos no processo de alfabetização escolar.',
    indications: [
      'Fala "enrolada" ou difícil de entender',
      'Troca de sons específicos (ex: R brando "barata", R forte "rato", L, S, CH)',
      'Omissão de sílabas ("tefone" em vez de "telefone")',
      'Reflexo das trocas de fala na escrita escolar'
    ],
    howItWorks: 'Exercícios específicos de consciência fonológica, treino de pontos articulatórios no espelho e jogos educativos de repetição e discriminação auditiva.',
    iconName: 'MessageSquareText',
  },
  {
    id: 'motricidade-degluticao',
    title: 'Motricidade Orofacial & Deglutição',
    category: 'motor',
    categoryLabel: 'Mastigação e Respiração',
    badge: 'Funções Orais',
    shortDescription: 'Reabilitação dos músculos da face, língua, respiração oral, mastigação correta e deglutição atípica.',
    fullDescription: 'Tratamento fonoaudiológico para adequar a postura e o tônus muscular dos lábios, língua e bochechas. Fundamental para crianças e adultos respiradores orais, pessoas que usam aparelho ortodôntico ou que empurram a língua nos dentes ao engolir.',
    indications: [
      'Respiração constante pela boca e roncos ao dormir',
      'Empurrar os dentes com a língua ao engolir ou falar',
      'Cansaço excessivo ou escape de comida durante a mastigação',
      'Dificuldade após cirurgias ortognáticas ou em conjunto com ortodontia'
    ],
    howItWorks: 'Terapia miofuncional com manobras posturais, fortalecimento muscular direcionado e reeducação dos padrões respiratórios e de deglutição.',
    iconName: 'Smile',
  },
  {
    id: 'seletividade-alimentar',
    title: 'Seletividade Alimentar Infantil',
    category: 'motor',
    categoryLabel: 'Alimentação',
    badge: 'Abordagem Sensorial',
    shortDescription: 'Acolhimento de recusas alimentares, aversão a texturas e dificuldades mastigatórias em crianças neurotípicas ou atípicas.',
    fullDescription: 'Muitas crianças rejeitam alimentos não por birra, mas por hipersensibilidade oral ou imaturidade mastigatória. Trabalhamos a dessensibilização gradual, a aceitação de novas texturas e a mastigação segura.',
    indications: [
      'Criança só come alimentos pastosos ou de uma única cor/textura',
      'Ânsia de vômito ao ver, cheirar ou provar novos alimentos',
      'Mastigação insuficiente (engole pedaços inteiros)',
      'Refeições estressantes e desgastantes para toda a família'
    ],
    howItWorks: 'Aproximação sensorial sistemática, sem coerção, tornando a relação com os alimentos positiva e divertida por meio de atividades motoras e sensoriais.',
    iconName: 'Utensils',
  },
  {
    id: 'avaliacao-clinica',
    title: 'Avaliação Fonoaudiológica Completa',
    category: 'eval',
    categoryLabel: 'Diagnóstico e Laudos',
    badge: 'Primeiro Passo',
    shortDescription: 'Avaliação clínica minuciosa com testes padronizados, elaboração de relatório detalhado e plano terapêutico.',
    fullDescription: 'Investigação profunda das habilidades de fala, linguagem expressiva e receptiva, processamento auditivo, voz e funções orais. Emissão de laudos para escolas, neuropediatras e outros especialistas.',
    indications: [
      'Orientação de neuropediatras ou pediatras',
      'Encaminhamento pela coordenação da escola ou creche',
      'Dúvidas da família quanto aos marcos de desenvolvimento',
      'Solicitação de laudo para terapias ou adaptações escolares'
    ],
    howItWorks: 'Anamnese aprofundada com os responsáveis, observação clínica direta, aplicação de protocolos validados e devolutiva clara com metas traçadas.',
    iconName: 'ClipboardCheck',
  },
];

export const MILESTONES_DATA: MilestoneGroup[] = [
  {
    ageBand: '6-12m',
    label: '6 a 12 meses',
    expectedMilestones: [
      'Reage quando é chamado pelo nome',
      'Balbucia sílabas repetidas ("ba-ba", "ma-ma", "da-da")',
      'Usa gestos simples como dar tchau e esticar os braços para pedir colo',
      'Mantém contato visual enquanto os adultos conversam com ele',
      'Procura a fonte de barulhos ou da voz dos pais'
    ],
    warningSigns: [
      { id: 'm1_no_name', text: 'Não reage ao próprio nome ou a sons familiares', severity: 'high' },
      { id: 'm1_no_eye_contact', text: 'Não faz contato visual nem sorri em resposta ao estímulo', severity: 'high' },
      { id: 'm1_no_babble', text: 'Ausência de balbucio ou silêncio prolongado', severity: 'moderate' },
      { id: 'm1_no_gestures', text: 'Não aponta e não usa nenhum gesto até os 12 meses', severity: 'moderate' },
    ],
  },
  {
    ageBand: '1-2y',
    label: '1 a 2 anos',
    expectedMilestones: [
      'Primeiras palavras com significado (mamãe, papai, água, dá)',
      'Aponta para o que deseja e compartilha objetos de interesse',
      'Compreende ordens simples ("pega a bola", "vamos comer")',
      'Imita sons de animais ou ruídos do dia a dia (au-au, bi-bi)',
      'Aos 2 anos: fala pelo menos 30 a 50 palavras e começa a juntar 2 ("quer água")'
    ],
    warningSigns: [
      { id: 'm2_few_words', text: 'Não fala nenhuma palavra com significado aos 18 meses', severity: 'high' },
      { id: 'm2_no_pointing', text: 'Não aponta para mostrar interesse ou para pedir ajuda aos 14-16 meses', severity: 'high' },
      { id: 'm2_doesnt_understand', text: 'Parece não compreender instruções simples do dia a dia', severity: 'moderate' },
      { id: 'm2_loss_of_words', text: 'Falava algumas palavras e parou de falar (perda de habilidades)', severity: 'high' },
    ],
  },
  {
    ageBand: '2-3y',
    label: '2 a 3 anos',
    expectedMilestones: [
      'Vocabulário amplo com mais de 200 a 300 palavras',
      'Forma frases com 2 a 3 palavras ("papai foi trabalhar", "quero mais suco")',
      'Faz perguntas frequentes ("O que é isso?", "Cadê?")',
      'Pessoas próximas conseguem entender a maior parte do que a criança diz',
      'Identifica partes do corpo e objetos comuns em livros'
    ],
    warningSigns: [
      { id: 'm3_no_phrases', text: 'Não junta duas ou mais palavras para formar pequenas frases', severity: 'high' },
      { id: 'm3_unclear_speech', text: 'Fala excessivamente ininteligível até mesmo para a família', severity: 'moderate' },
      { id: 'm3_echolalia', text: 'Apenas repete falas de desenhos ou frases alheias sem uso funcional', severity: 'high' },
      { id: 'm3_difficulty_socializing', text: 'Dificuldade extrema em brincar com outras pessoas ou desinteresse', severity: 'moderate' },
    ],
  },
  {
    ageBand: '3-5y',
    label: '3 a 5 anos',
    expectedMilestones: [
      'Conta pequenas histórias e relata como foi o dia',
      'Domina a maioria dos sons consonantais (com exceção do R e L complexos)',
      'Estrutura gramatical completa (usa verbos no passado, presente e futuro)',
      'Compreende quase tudo o que é dito ao seu redor',
      'Conversa com adultos e outras crianças naturalmente'
    ],
    warningSigns: [
      { id: 'm4_strangers_dont_understand', text: 'Pessoas de fora da família não entendem o que a criança fala', severity: 'high' },
      { id: 'm4_stuttering', text: 'Gagueira, bloqueios, prolongamento de sons ou tensão ao tentar falar', severity: 'high' },
      { id: 'm4_letter_swaps', text: 'Trocas frequentes de sons ("sapato" virando "tapato", "carro" virando "calo")', severity: 'moderate' },
      { id: 'm4_short_phrases', text: 'Dificuldade para estruturar frases ou vocabulário muito pobre', severity: 'moderate' },
    ],
  },
  {
    ageBand: 'escolar-adulto',
    label: 'Escolar, Adolescente e Adulto',
    expectedMilestones: [
      'Fluência verbal completa e compreensão sem esforço',
      'Sem dificuldades de leitura e escrita relacionadas à audição ou fonética',
      'Voz clara, sem rouquidão frequente ou esforço na laringe',
      'Deglutição suave, mastigação bilateral sem ruídos na mandíbula'
    ],
    warningSigns: [
      { id: 'm5_reading_writing', text: 'Dificuldades na alfabetização por trocas entre sons surdos e sonoros (P/B, T/D, F/V)', severity: 'moderate' },
      { id: 'm5_persistent_hoarseness', text: 'Rouquidão persistente, pigarro contínuo ou dor ao falar', severity: 'moderate' },
      { id: 'm5_breathing_swallowing', text: 'Respiração bucal crônica, mordida aberta ou estalos ao mastigar', severity: 'moderate' },
      { id: 'm5_speech_blocks', text: 'Gagueira ou ansiedade acentuada ao se comunicar em público', severity: 'moderate' },
    ],
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mariana Siqueira (Mãe do Theo, 3 anos)',
    role: 'Mãe de paciente TEA',
    rating: 5,
    date: 'há 1 mês',
    comment: 'A Katiussya é um anjo em nossas vidas! Meu filho não falava quase nada e tinha muita dificuldade de interação. Em poucos meses de atendimento com ela, o vocabulário dele explodiu e hoje ele se comunica com muita alegria. Atendimento humano, amoroso e com uma competência admirável!',
    verifiedGoogle: true,
    category: 'Autismo e Desenvolvimento',
  },
  {
    id: 'rev-2',
    author: 'Carlos Eduardo Mendes',
    role: 'Pai de paciente com atraso de fala',
    rating: 5,
    date: 'há 2 meses',
    comment: 'Excelente fonoaudióloga em Sinop! O consultório é super acolhedor, cheio de materiais lúdicos que a criança adora. A evolução da fala da minha filha foi surpreendente. Recomendo de olhos fechados!',
    verifiedGoogle: true,
    category: 'Atraso de Fala',
  },
  {
    id: 'rev-3',
    author: 'Patrícia Alencar Rocha',
    role: 'Mãe de paciente com troca de fonemas',
    rating: 5,
    date: 'há 3 meses',
    comment: 'Dra. Katiussya tem uma paciência e um carinho incríveis. Minha filha trocava o R e o L e tinha vergonha na escola. Com os exercícios e jogos que ela fez, em pouco tempo a dicção dela ficou perfeita. Nota 1000!',
    verifiedGoogle: true,
    category: 'Articulação e Fala',
  },
  {
    id: 'rev-4',
    author: 'Juliana B. Ferreira',
    role: 'Mãe de paciente com seletividade alimentar',
    rating: 5,
    date: 'há 4 meses',
    comment: 'Super dedicada e atenciosa. Nos ajudou muito com a seletividade alimentar e a motricidade orofacial do meu pequeno. As orientações para os pais em casa fizeram toda a diferença!',
    verifiedGoogle: true,
    category: 'Alimentação e Motricidade',
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Qual a idade ideal para levar meu filho à fonoaudióloga?',
    answer: 'Não existe idade mínima! A intervenção fonoaudiológica pode começar ainda bebê (por exemplo, na avaliação da linguinha, amamentação ou marcos aos 6 meses). Se você notar que aos 1 ano e meio a criança não fala ou não responde ao nome, já é recomendado fazer uma avaliação preventiva. Quanto mais cedo, mais rápidos são os resultados.',
    category: 'Geral',
  },
  {
    question: 'O consultório aceita plano de saúde / convênio?',
    answer: 'O atendimento é particular para garantir tempo adequado, dedicação exclusiva e plano terapêutico 100% individualizado. Fornecemos recibo detalhado com o registro profissional (CRFa: 9023-6) para que você possa solicitar reembolso integral ou parcial junto ao seu plano de saúde.',
    category: 'Agendamento e Pagamento',
  },
  {
    question: 'Como funciona a primeira consulta fonoaudiológica?',
    answer: 'A primeira sessão envolve uma anamnese detalhada com os pais ou com o próprio paciente para compreender o histórico de desenvolvimento, as rotinas e as queixas principais. Realizamos observação clínica interativa com materiais lúdicos e, ao final, definimos se há indicação para terapia e qual o cronograma ideal.',
    category: 'Consultas',
  },
  {
    question: 'Vocês atendem pacientes com Autismo (TEA) e TDAH?',
    answer: 'Sim! Katiussya Amorim possui ampla experiência e foco no atendimento de crianças e adolescentes neurodivergentes (TEA, TDAH, Transtornos de Linguagem). A abordagem é respeitosa, estruturada, sem punição e adaptada aos interesses específicos da criança, incluindo comunicação alternativa quando necessário.',
    category: 'Especialidades',
  },
  {
    question: 'Os pais podem acompanhar as sessões?',
    answer: 'Com certeza! A presença e a parceria dos pais são muito bem-vindas e fundamentais para o sucesso terapêutico. Além disso, ao final de cada atendimento, a Dra. Katiussya compartilha o progresso e orienta exercícios práticos e brincadeiras para fixar o aprendizado em casa.',
    category: 'Consultas',
  },
  {
    question: 'Onde fica localizado o consultório em Sinop - MT?',
    answer: 'O consultório fica na Rua das Aroeiras, 1557 - Setor Comercial, Sinop - MT (próximo ao centro comercial de Sinop, com fácil acesso e estacionamento tranquilo). Você pode conferir a localização exata pelo Google Maps ou Waze diretamente aqui no site.',
    category: 'Localização',
  },
];
