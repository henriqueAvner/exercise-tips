/* eslint-disable max-lines */
export type TypeFichas = {
  grupoMuscular: string;
  exercicios: {
    nome: string;
    descricao: string;
    series: number;
    repeticoes: number;
  }[];
};

const fichasDeTreino = [
  {
    grupoMuscular: 'peito',
    exercicios: [
      {
        nome: 'Supino Reto',
        img: '/src/images/supinoReto.gif',
        descricao:
        'Um exercício para o peito que envolve evantar a barra em posição horizontal.',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Flexão de Braço',
        img: '/src/images/flexao-de-bracos.webp',
        descricao: 'Um exercício de peso corporal para o peito e tríceps.',
        series: 3,
        repeticoes: 15,
      },
      {
        nome: 'Crucifixo com Halteres',
        img: '/src/images/crucifixo-com-halteres.webp',
        descricao: 'Um exercício para isolar o peito usando halteres.',
        series: 4,
        repeticoes: 12,
      },
      {
        nome: 'Pullover com Halter',
        img: '/src/images/pullover.webp',
        descricao: 'Um exercício que trabalha o peito e os lats.',
        series: 3,
        repeticoes: 10,
      },
    ],
  },

  {
    grupoMuscular: 'ombros',
    exercicios: [
      {
        nome: 'Elevação Lateral',
        img: '/src/images/elevacao-lateral.webp',
        descricao: 'Um exercício para a parte medial dos ombros',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Desenvolvimento com halteres',
        img: '/src/images/desenvolvimento-com-halteres.webp',
        descricao: 'Um exercício para a parte frontal dos ombros e peitoral superior',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Crucifixo inverso',
        img: '/src/images/crucifixo-invertido.webp',
        descricao: 'Um exercício para a parte posterior dos ombros e trapézio inferior',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Encolhimento com halteres',
        img: '/src/images/encolhimento.gif',
        descricao: 'Um exercício para os trapézios',
        series: 3,
        repeticoes: 15,
      },
    ],
  },

  {
    grupoMuscular: 'biceps',
    exercicios: [
      {
        nome: 'Rosca direta',
        img: 'src/images/rosca-direta-halter.webp',
        descricao: 'Um exercício para fortalecer o bíceps em geral.',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Rosca martelo',
        img: '/src/images/rosca-martelo.gif',
        descricao: 'Um exercício composto para o bíceps e o antebraço',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Rosca banco 45',
        img: '/src/images/rosca-45.webp',
        descricao: 'Um exercício para a parte distal dos bíceps.',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Rosca inversa barra W',
        img: '/src/images/rosca-inversa.gif',
        descricao: 'Um exercício composto para os bíceps e para os antebraços',
        series: 3,
        repeticoes: 15,
      },
    ],
  },

  {
    grupoMuscular: 'triceps',
    exercicios: [
      {
        nome: 'Tríceps na polia',
        img: '/src/images/triceps-pulley.webp',
        descricao: 'Um exercício para a parte distal do tríceps',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Tríceps corda',
        img: '/src/images/triceps-corda.webp',
        descricao: 'Um exercício para o tríceps no geral',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Tríceps coice',
        img: '/src/images/triceps-coice.gif',
        descricao: 'Um exercício para a parte medial do tríceps',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Tríceps testa com barra',
        img: '/src/images/triceps-testa.webp',
        descricao: 'Um exercício para a parte medial do tríceps',
        series: 3,
        repeticoes: 15,
      },
    ],
  },

  {
    grupoMuscular: 'costas',
    exercicios: [
      {
        nome: 'Barra Fixa',
        img: '/src/images/barra-fixa.webp',
        descricao: 'Um exercício para fortalecer as costas e os braços.',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Remada Curvada',
        img: '/src/images/remada-curvada.webp',
        descricao: 'Um exercício composto para os músculos das costas.',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Puxada Alta',
        img: '/src/images/puxada-alta.webp',
        descricao: 'Um exercício para a parte superior das costas e ombros.',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Hiperextensão Lombar',
        img: '/src/images/hiperextensao-lombar.webp',
        descricao: 'Um exercício para fortalecer a região lombar das costas.',
        series: 3,
        repeticoes: 15,
      },
    ],
  },

  {
    grupoMuscular: 'quadriceps',
    exercicios: [
      {
        nome: 'Banco extensor',
        img: '/src/images/banco-extensor.webp',
        descricao: 'Um exercício para o quadríceps de forma isolada.',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Leg Press 45',
        img: '/src/images/leg-press-45.webp',
        descricao: 'Um exercício para quadríceps com ação no glúteo.',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Afundo',
        img: '/src/images/afundo.webp',
        descricao: 'Um exercício enfase na parte medial do quadríceps.',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Leg Press horizontal',
        img: '/src/images/leg-horizontal.gif',
        descricao: 'Um exercício para fortalecer os joelhos e a para o vasto lateral',
        series: 3,
        repeticoes: 15,
      },
    ],
  },

  {
    grupoMuscular: 'posteriores',
    exercicios: [
      {
        nome: 'Banco flexor',
        img: '/src/images/banco-flexor.gif',
        descricao: 'Um exercício para o posterior de forma isolada.',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Mesa flexora',
        img: '/src/images/mesa-flexora.webp',
        descricao: 'Um exercício com ênfase no bíceps femoral',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Elevação pélvica',
        img: '/src/images/elevacao-pelvica.gif',
        descricao: 'Um exercício enfase n glúteo de forma geral.',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Agachamento sumô',
        img: '/src/images/agachamento-sumo.webp',
        descricao: 'Um exercício para as pernas em geral e foco nos glúteos',
        series: 3,
        repeticoes: 15,
      },
    ],
  },
];
export default fichasDeTreino;
