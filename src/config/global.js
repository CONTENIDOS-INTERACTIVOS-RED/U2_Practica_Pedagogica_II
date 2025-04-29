export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Estructura y aplicación de una propuesta didáctica',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planeaciones didácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Planeaciones didácticas: el arte de organizar el aprendizaje',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La importancia de la planeación en la educación infantil',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Ejemplos de planeaciones didácticas para prejardín y jardín',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Didácticas específicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Didácticas específicas: la esencia de una enseñanza significativa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'El uso de materiales y recursos didácticos en la educación infantil',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodologías educativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Metodologías educativas en preescolar en el contexto de la práctica pedagógica y metodologías activas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Selección y aplicación de metodologías educativas en el centro de práctica',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Alineación de la propuesta didáctica con los principios pedagógicos institucionales en la primera infancia',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Experiencias educativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Análisis de casos y buenas prácticas en educación inicial',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Desarrollo de propuestas didácticas basadas en experiencias reales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Experiencias educativas: reflexión sobre el impacto de la práctica pedagógica ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Instrumentos de evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Importancia de la evaluación en educación infantil',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              '5.2	Herramientas e instrumentos para evaluar el aprendizaje',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Estrategias para el seguimiento del desarrollo infantil',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Evaluación formativa y sumativa en la primera infancia',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Pitluk, L. (2012). La planificación didáctica en el Jardín de Infantes: las unidades didácticas, los proyectos y las secuencias didácticas: el juego trabajo: ( ed.). Homo Sapiens Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67059',
    },
    {
      referencia:
        'García, I. H. (2022). La planeación didáctica en educación preescolar desde mi ejercicio docente. ',
      link:
        'http://rixplora.upn.mx/jspui/bitstream/RIUPN/140860/2/1570%20-%20UPN095LEIYPHEIS2021.pdf  ',
    },
    {
      referencia:
        'Diaz, C. C., Reyes, M. P., & Bustamante, K. G. (2020). Planificación educativa como herramienta fundamental para una educación con calidad. Utopía y praxis latinoamericana, 25(3), 87-95. ',
      link: 'https://www.redalyc.org/journal/279/27963600007/html/ ',
    },
    {
      referencia:
        'Pastor, C. A., Sánchez, J. M., & Zubillaga, A. (2014). Diseño Universal para el aprendizaje (DUA). Recuperado de: http://www. educadua. es/doc/dua/dua_pautas_intro_cv. pdf, 5-7. ',
      link: 'https://www.educadua.es/doc/dua/dua_pautas_intro_cv.pdf ',
    },
    {
      referencia:
        'Gildemeister Flores, R., & Ramos Haro, M. J. (2019). La planificación en la Educación Inicial: guía de orientaciones. ',
      link:
        'https://siteal.iiep.unesco.org/sites/default/files/sit_accion_files/la_planificacion_en_la_educacion_inicial_guia_de_orientaciones.pdf ',
    },
    {
      referencia:
        'Osorio Villegas, M. & Herrera Púa, M. (2013). Educación Preescolar en Colombia: estructura del currículo y modelo pedagógico-didáctico: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69915 ',
    },
    {
      referencia:
        'Orozco, A. M. M., & Henao, A. M. G. (2013). El material didáctico para la construcción de aprendizajes significativos. Revista Colombiana de Ciencias Sociales, 4(1), 101-108. ',
      link:
        'https://revistas.ucatolicaluisamigo.edu.co/index.php/RCCS/article/view/952 ',
    },
    {
      referencia:
        'Gómez, A. M. G. (2009). La importancia del juego y desarrollo en educación infantil. Cuadernos de Educación y desarrollo, (10). ',
      link: 'https://ideas.repec.org/a/erv/cedced/y2009i109.html ',
    },
    {
      referencia:
        'Martínez, A. C., & Carrillo-García, M. E. (2018). Aprendizaje basado en proyectos en educación infantil: cambio pedagógico y social. Revista Iberoamericana de educación, 76, 79-98. ',
      link: 'https://rieoei.org/rie/article/view/2861',
    },
    {
      referencia:
        'Malaguzzi, L. (2015). La educación infantil en Reggio Emilia: (3 ed.). Ediciones Octaedro, S.L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61950 ',
    },
    {
      referencia:
        'Villamizar Cañas, M. D. L. Á. (2021). Metodologías activas a través del juego y el interés de los niños y niñas de 5 a 6 años en Preescolar. Revista Educación, 45(2), 566-576. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8261003 ',
    },
    {
      referencia:
        'Vargas Arboleda, M. A. (2019). Escenarios de aprendizaje experiencial como herramienta para el desarrollo de prácticas en licenciatura infantil. ',
      link: 'https://repository.unipiloto.edu.co/handle/20.500.12277/5484 ',
    },
    {
      referencia:
        'Pedraza González, M. (2005). Sendas educativas con un carácter globalizador: experiencias para educación infantil y primaria: ( ed.). Miño y Dávila. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/60042',
    },
    {
      referencia:
        'Gozalbo, M. E., Baltar, D. Z., & Ruiz-González, A. (2018). Huertos EcoDidácticos y Educación para la Sostenibilidad. Experiencias educativas para el desarrollo de competencias del profesorado en formación inicial. Revista Eureka sobre Enseñanza y Divulgación de las Ciencias, 15(1), 150101-150115. ',
      link: 'https://revistas.uca.es/index.php/eureka/article/view/3431 ',
    },
    {
      referencia:
        'Pompa, A. G., Rubio, B. N. M., & Hernández, E. A. (2017). Las vivencias desde una perspectiva pedagógica. Su aplicación como eje de integración de contenido en la educación preescolar. Mikarimin. Revista Científica Multidisciplinaria, 3(2), 51-58. ',
      link:
        'https://revista.uniandes.edu.ec/ojs/index.php/mikarimin/article/view/694 ',
    },
    {
      referencia:
        'Jiménez Ruiz, B. E. (2022). Estrategias e instrumentos de evaluación formativa en el nivel preescolar. ',
      link:
        'https://repositorio.beceneslp.edu.mx/jspui/handle/20.500.12584/977 ',
    },
    {
      referencia:
        'Vázquez, M. G. H., & Orocio, M. T. C. (2019). Construcción y análisis de contenido de un Instrumento para evaluar la planeación didáctica en Preescolar. Atenas, 3(47), 161-179. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9305057 ',
    },
    {
      referencia:
        'Decreto 1421. (2017) Marco de la educación inclusiva la atención educativa a la población con discapacidad.',
      link:
        'https://www.mineducacion.gov.co/portal/normativa/Decretos/381928:Decreto-1421-de-agosto-29-de-2017 ',
    },
  ],
  glosario: [
    {
      termino: 'Didáctica',
      significado:
        'Disciplina que estudia los métodos y estrategias para facilitar el proceso de enseñanza-aprendizaje.',
    },
    {
      termino: 'Diversidad',
      significado:
        'Conjunto de características individuales que diferencian a los estudiantes y requieren estrategias educativas inclusivas.',
    },
    {
      termino: 'Estrategia didáctica',
      significado:
        'Conjunto de acciones planificadas para facilitar el aprendizaje y la construcción del conocimiento.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso sistemático para medir el aprendizaje y mejorar la enseñanza mediante distintos instrumentos y técnicas.',
    },
    {
      termino: 'Experiencia educativa',
      significado:
        'Práctica o situación pedagógica que contribuye al aprendizaje significativo de los estudiantes.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Principio que garantiza el acceso, participación y aprendizaje de todos los niños, sin importar sus diferencias.',
    },
    {
      termino: 'Instrumento de evaluación',
      significado:
        'Herramienta utilizada para recopilar información sobre el progreso y desempeño de los estudiantes.',
    },
    {
      termino: 'Metodología educativa',
      significado:
        'Conjunto de enfoques y estrategias que guían la enseñanza y el aprendizaje en el aula.',
    },
    {
      termino: 'Planeación didáctica',
      significado:
        'Proceso de diseño de actividades y recursos para organizar la enseñanza de manera estructurada.',
    },
    {
      termino: 'Práctica pedagógica',
      significado:
        'Ejercicio docente que permite aplicar conocimientos teóricos en contextos educativos reales.',
    },
    {
      termino: 'Propuesta didáctica',
      significado:
        'Diseño estructurado de actividades y estrategias orientadas al desarrollo de aprendizajes en los estudiantes.',
    },
    {
      termino: 'Recursos pedagógicos',
      significado:
        'Materiales y herramientas utilizados para apoyar la enseñanza y facilitar el aprendizaje.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Proceso de información y orientación brindado a los estudiantes para mejorar su desempeño y aprendizaje.',
    },
    {
      termino: 'Secuencia didáctica',
      significado:
        'Organización estructurada de actividades de enseñanza y aprendizaje con una progresión lógica.',
    },
    {
      termino: 'Significatividad',
      significado:
        'Cualidad del aprendizaje que permite que los nuevos conocimientos se relacionen con saberes previos.',
    },
    {
      termino: 'TIC (Tecnologías de la Información y la Comunicación)',
      significado:
        'Herramientas digitales utilizadas en la enseñanza para mejorar los procesos educativos.',
    },
    {
      termino: 'Trabajo colaborativo',
      significado:
        'Estrategia en la que los estudiantes trabajan juntos para alcanzar objetivos de aprendizaje comunes.',
    },
    {
      termino: 'Transversalidad',
      significado:
        'Integración de distintos enfoques y áreas del conocimiento en la enseñanza para una formación integral.',
    },
  ],
}
