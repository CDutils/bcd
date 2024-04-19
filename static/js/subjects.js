(() => {
    class Subject {
        /**
         * Creates a new instance of the Subject class with the given parameters.
         *
         * @param {string} id - The id of the object.
         * @param {string} name - The name of the object.
         * @param {string} place - The place where the object occurs.
         * @param {string} time - The time of the object.
         * @param {string} teacher - The teacher of the object.
         * @param {list} description - The description of the object.
         * @param {list} tests - The tests of the object.
         * @param {list} books - The books of the object.
         * @param {list} links - The links of the object.
         */
        constructor(id, name, place, time, teacher, description, tests, books, links) {
            this.id = id
            this.name = name
            this.place = place
            this.time = time
            this.teacher = teacher
            this.description = description
            this.tests = tests
            this.books = books
            this.links = links
        }
        getHTML() {
            return `
                <div class="subject__name on-secondary-container-text headline-small"><span>${this.name}</span></div>
                <div class="subject__id on-secondary-container-text body-medium">Turma ${this.id}</div>
                <div class="subject__time on-secondary-container-text body-large">${this.time}</div>
                <div class="subject__place on-secondary-container-text body-large">${this.place}</div>
            `
        }
    }

    window.periodSubjects = [
        new Subject(
            'TM01', 'Cálculo Diferencial e Integral 1', 'CAD 3 - Sala 312', '13:00 - 14:40', 'Jose Antonio Goncalves Miranda',
            ['Definição formal de limite e propriedades', 'Definição formal de derivada e propriedades', 'Definição formal de integral indefinida e propriedades'],
            [
                {
                    name: '1ª Prova',
                    num: 1,
                    valor: '35',
                    data: '15/04/2024 13:00'
                }, {
                    name: '2ª Prova',
                    num: 1,
                    valor: '35',
                    data: '22/05/2024 13:00'
                }, {
                    name: '3ª Prova',
                    num: 1,
                    valor: '35',
                    data: '28/06/2024 13:00'
                }, {
                    name: 'Prova Suplementar',
                    num: 1,
                    valor: '35',
                    data: '03/07/2024 13:00'
                }
            ],
            [{
                name: 'Cálculo Vol 1 - James Stewart, Daniel Clegg, Saleem Watson',
                link: 'https://drive.google.com/file/d/1c-lAlP8G2e4V-ZnbmPXBkXiVm0LiUrnI/view?usp=drive_link'
            }],
            ['https://virtual.ufmg.br/20241/course/view.php?id=11516']
        ),
        new Subject(
            'TC', 'Fundamentos de Ciência de Dados (FCD)', 'DCC - Sala 2014', '14:55 - 16:35', 'Flavio Vinicius Diniz de Figueiredo',
            ['Fundamentos da Ciência de Dados combina três perspectivas: pensamento inferencial, pensamento computacional e relevância no mundo real. O curso ensina conceitos e habilidades críticas de análise descritiva e inferencial a partir de ferramentas computacionais. Durante a disciplina, um conjunto de análises práticas de dados do mundo real, incluindo dados econômicos, coleções de documentos, dados geográficos e redes sociais, é realizado com os discentes. Atividade integraliza extensão.', 'O objetivo da disciplina é apresentar técnicas básicas de ciência de dados. Em particular, queremos ensinar os discentes o básico de programação e estatística para realizar o ciclo de trabalho do cientista de dados (descrição, inferência e predição). Concluindo o curso os discentes terão a base necessária para seguir para matérias como: Estatística Básica (DEST), Álgebra Linear Computacional (DCC) e Introdução à Ciência de Dados (BCD).'],
            [
                {
                    name: 'Provas',
                    num: 2,
                    valor: '25',
                    data: 'A definir'
                }, {
                    name: 'Laboratórios',
                    num: 10,
                    valor: '2',
                    data: 'A definir'
                }, {
                    name: 'Trabalho',
                    num: 1,
                    valor: '30',
                    data: 'A definir'
                }
            ],
            [{
                name: 'Computational and Inferential Thinking: The Foundations of Data Science',
                link: 'https://inferentialthinking.com/chapters/intro.html'
            }],
            ['https://flaviovdf.io/fcd/', 'https://virtual.ufmg.br/20241/course/view.php?id=9501']
        ),
        new Subject(
            'TTW', 'Introdução à Lógica Computacional (ILC)', 'DCC - Sala 2015', '14:55 - 16:35', 'Haniel Moreira Barbosa',
            [' Fundamentos das lógicas proposicional e de predicados.', 'Métodos de demonstração.', 'Indução e recursão.', 'Fundamentos de álgebra Booleana e circuitos digitais combinatórios.'],
            [
                {
                    name: 'Prova 1',
                    num: 1,
                    valor: '40',
                    data: '06/05/2024'
                }, {
                    name: 'Prova 2',
                    num: 1,
                    valor: '40',
                    data: '19/06/2024'
                }, {
                    name: 'Participação',
                    num: 'A definir',
                    valor: '10',
                    data: ''
                }, {
                    name: 'Listas de Exercícios',
                    num: 'A definir',
                    valor: '10',
                    data: 'A definir'
                }
            ],
            [
                {
                    name: 'Matemática Discreta e Suas Aplicações (6a Edição). Kenneth H. Rosen - McGraw Hill (2009)',
                    link: 'https://drive.google.com/file/d/1eD3UTlGEjoPWqUlKZsRS295YpElAvwm-/view?usp=drive_link'
                }, {
                    name: 'How to Prove It: A Structured Approach (2nd Edition) Daneiel J. Velleman. Cambridge University Press.',
                    link: 'https://drive.google.com/file/d/1j4e1JmtGu8YcyN34G0ShwSREF-TKLtlD/view?usp=drive_link'
                }
            ],
            ['https://hanielb.github.io/2024.1-ilc/', 'https://virtual.ufmg.br/20241/course/view.php?id=9511']
        ),
        new Subject(
            'TM1', 'Programação e Desenvolvimento de Software 1 (PDS1)', 'CAD 3 - Laico B 307', '13:00 - 14:40', 'Clodoveu Augusto Davis Junior',
            ['Introdução ao funcionamento de um computador e ao desenvolvimento de programas.', 'Desenvolvimento de programas em uma linguagem de alto nível.', 'Tipos de dados simples, apontadores, variáveis compostas homogêneas e heterogêneas.', ' Entrada e saída.', 'Estruturas de controle e repetição.', 'Funções e ferramentas de modularização.'],
            [
                {
                    name: 'Prova 1',
                    num: 1,
                    valor: '25',
                    data: '23/04/2024'
                }, {
                    name: 'Prova 2',
                    num: 1,
                    valor: '25',
                    data: '23/05/2024'
                }, {
                    name: 'Prova 3',
                    num: 1,
                    valor: '25',
                    data: '20/06/2024'
                }, {
                    name: 'Trabalhos e Exercícios',
                    num: 'A definir',
                    valor: '25',
                    data: 'A definir'
                }
            ],
            [
                {
                    name: 'Backes, A. Linguagem C Completa e Descomplicada. 2ª Edição. LTC,2022.',
                    link: 'https://drive.google.com/file/d/1f6--yVaW16wffRc8gDfDHgKx3iI4yzIn/view?usp=drive_link'
                }, {
                    name: 'Celes, W. Introdução a Estruturas de Dados. Ed. Elsevier, 2004.',
                    link: 'https://drive.google.com/file/d/1mtfRMnLLvg7HOuJG-kk0NjCA7Nh12I-4/view?usp=drive_link'
                }, {
                    name: 'Ziviani, N. Projeto de Algoritmos em Pascal e C, 3ª. Edição. Cengage, 2010.',
                    link: 'https://drive.google.com/file/d/1ZZcqRvsrq7dWH3NSAS8BvY_xLkC8gZg-/view?usp=drive_link'
                }, {
                    name: 'Farrer, H. et al. Algoritmos Estruturados, 3ª. Edição. LTC, 1999',
                    link: 'https://drive.google.com/file/d/1DcTrVJLIc18VbSmBF4X5z3ahe5SaWCTv/view?usp=drive_link'
                }
            ],
            ['https://virtual.ufmg.br/20241/course/view.php?id=9398']
        ),
        new Subject(
            'TM1', 'Programação e Desenvolvimento de Software 1 (PDS1)', 'DCC - Sala 2008', '13:00 - 14:40', 'Clodoveu Augusto Davis Junior',
            [],
            [],
            [],
            []
        )
    ]
})()
