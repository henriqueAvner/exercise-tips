const fichasDeTreino = [
  {
    grupoMuscular: 'Peito',
    exercicios: [
      {
        nome: 'Supino Reto',
        descricao:
        'Um exercício para o peito que envolve evantar a barra em posição horizontal.',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Flexão de Braço',
        descricao: 'Um exercício de peso corporal para o peito e tríceps.',
        series: 3,
        repeticoes: 15,
      },
      {
        nome: 'Crucifixo com Halteres',
        descricao: 'Um exercício para isolar o peito usando halteres.',
        series: 4,
        repeticoes: 12,
      },
      {
        nome: 'Pullover com Halter',
        descricao: 'Um exercício que trabalha o peito e os lats.',
        series: 3,
        repeticoes: 10,
      },
    ],
  },

  {
    grupoMuscular: 'Ombros',
    exercicios: [
      {
        nome: 'Elevação Lateral',
        descricao: 'Um exercício para a parte medial dos ombros',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Desenvolvimento com halteres',
        descricao: 'Um exercício para a parte frontal dos ombros e peitoral superior',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Crucifixo inverso',
        descricao: 'Um exercício para a parte posterior dos ombros e trapézio inferior',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Encolhimento com halteres',
        descricao: 'Um exercício para os trapézios',
        series: 3,
        repeticoes: 15,
      },
    ],
  },

  {
    grupoMuscular: 'Bíceps',
    exercicios: [
      {
        nome: 'Rosca direta',
        descricao: 'Um exercício para fortalecer o bíceps em geral.',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Rosca martelo',
        descricao: 'Um exercício composto para o bíceps e o antebraço',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Rosca alternada banco 45',
        descricao: 'Um exercício para a parte distal dos bíceps.',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Rosca inversa no cabo',
        descricao: 'Um exercício composto para os bíceps e para os antebraços',
        series: 3,
        repeticoes: 15,
      },
    ],
  },

  {
    grupoMuscular: 'Tríceps',
    exercicios: [
      {
        nome: 'Tríceps na polia',
        descricao: 'Um exercício para a parte distal do tríceps',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Tríceps corda',
        descricao: 'Um exercício para o tríceps no geral',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Tríceps coice',
        descricao: 'Um exercício para a parte medial do tríceps',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Tríceps testa com barra',
        descricao: 'Um exercício para a parte medial do tríceps',
        series: 3,
        repeticoes: 15,
      },
    ],
  },

  {
    grupoMuscular: 'Costas',
    exercicios: [
      {
        nome: 'Barra Fixa',
        descricao: 'Um exercício para fortalecer as costas e os braços.',
        series: 4,
        repeticoes: 8,
      },
      {
        nome: 'Remada Curvada',
        descricao: 'Um exercício composto para os músculos das costas.',
        series: 4,
        repeticoes: 10,
      },
      {
        nome: 'Puxada Alta',
        descricao: 'Um exercício para a parte superior das costas e ombros.',
        series: 3,
        repeticoes: 12,
      },
      {
        nome: 'Hiperextensão Lombar',
        descricao: 'Um exercício para fortalecer a região lombar das costas.',
        series: 3,
        repeticoes: 15,
      },
    ],
  },
];

// Exemplo de como acessar informações
console.log(fichasDeTreino[0].exercicios[0].nome); // "Supino Reto"
