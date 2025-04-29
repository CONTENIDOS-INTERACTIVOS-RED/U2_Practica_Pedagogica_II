<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Instrumentos de evaluación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Uno de los aspectos fundamentales en el diseño y aplicación de propuestas didácticas es la evaluación, debido a que permite obtener información clave sobre los avances, dificultades y necesidades de los niños. Con base en estos datos, los docentes pueden ajustar sus estrategias pedagógicas para mejorar la enseñanza y favorecer el desarrollo integral de cada estudiante.
        p(data-aos="fade-left") En este sentido, la evaluación en la educación infantil debe ser flexible, inclusiva y centrada en el niño, reconociendo la diversidad de ritmos y estilos de aprendizaje. Es importante que la evaluación no se limite a la medición de conocimientos, sino que también valore el progreso en el desarrollo cognitivo, social, emocional y físico de cada niño, considerando su contexto familiar y social.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema5/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para garantizar una evaluación inclusiva y equitativa, es clave incorporar el Plan Individual de Ajustes Razonables (PIAR), una herramienta establecida por el Decreto 1421 del 2017, que orienta la atención a estudiantes con discapacidad. El PIAR permite diseñar estrategias y ajustes que aseguren la participación plena y efectiva de todos los niños, respondiendo a sus necesidades particulares y promoviendo la equidad en los procesos de enseñanza y aprendizaje.  

    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Importancia de la evaluación en educación infantil
    
    p.mb-4 La evaluación en la educación infantil es un proceso clave para comprender el desarrollo integral de los niños y adaptar la enseñanza a sus necesidades individuales.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Importancia de la evaluación en educación infantil
            p.mb-4(data-aos="fade-right") En el PDF <b>Importancia de la evaluación en educación infantil</b>, se analizan los enfoques, estrategias e instrumentos de evaluación que permiten valorar el aprendizaje de manera flexible, inclusiva y formativa. A través de este análisis, se destaca la importancia de la observación continua, la retroalimentación y la adaptación de metodologías, garantizando una enseñanza equitativa y centrada en el desarrollo de cada niño.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Importancia de la evaluación en educación infantil.

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/3.png', alt='')

    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Herramientas e instrumentos para evaluar el aprendizaje    

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema5/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En la práctica pedagógica, los instrumentos de evaluación son esenciales para medir, observar y reflexionar sobre el progreso de los estudiantes. En educación infantil, la evaluación no solo se enfoca en los conocimientos académicos, sino también en las habilidades socioemocionales, el desarrollo físico y las competencias cognitivas. Por ello, es fundamental contar con una variedad de herramientas e instrumentos que permitan recoger información detallada y precisa sobre el desarrollo integral de los niños, <b>reconociendo la diversidad y las necesidades individuales de cada estudiante.</b>
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En este contexto, es fundamental considerar el <b>Plan Individual de Ajustes Razonables (PIAR)</b>, establecido en el <b>Decreto 1421 del 2017</b>, como un instrumento clave para la evaluación de niños con discapacidad o con necesidades específicas de apoyo. La evaluación debe garantizar ajustes razonables que permitan a cada niño demostrar su aprendizaje, de acuerdo con sus características particulares. 
        p(data-aos="fade-left") Entre los instrumentos más utilizados en la educación infantil se encuentran los siguientes:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema5/5.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="49%" y="26%" numero="+")
                h5 Observación directa
                p Este es uno de los instrumentos más poderosos y efectivos en la educación infantil. A través de la observación continua e intencionada, el docente puede recopilar datos sobre el comportamiento, las interacciones y las reacciones de los niños durante las actividades diarias. La observación permite entender cómo los niños resuelven problemas, se comunican, interactúan con otros y aplican lo que han aprendido en contextos reales. En el caso de estudiantes con discapacidad, la observación debe estar enfocada en identificar sus avances según los ajustes establecidos en su PIAR.
    
              .bg-color-white.box-shadow.p-3(x="77%" y="38%" numero="+")
                h5 Listas de cotejo
                p Son herramientas sencillas pero muy útiles que permiten registrar de manera sistemática si los niños cumplen o no con ciertos criterios de aprendizaje. Las listas de cotejo pueden incluir indicadores específicos para niños con necesidades educativas especiales, asegurando que se evalúe su progreso de manera justa y pertinente.
    
              .bg-color-white.box-shadow.p-3(x="82%" y="70%" numero="+")
                h5 Rúbricas
                p Son guías detalladas que especifican los criterios que se deben cumplir para alcanzar ciertos niveles de desempeño. En el contexto de la educación infantil, las rúbricas pueden ser adaptadas para evaluar a niños con diversidad funcional, incorporando criterios flexibles que valoren su esfuerzo y progreso más allá de un estándar único de desempeño.
    
              .bg-color-white.box-shadow.p-3(x="64%" y="92%" numero="+")
                h5 Portafolios
                p Un portafolio es una recopilación de trabajos, proyectos y evidencias del aprendizaje de los niños a lo largo del tiempo. Este instrumento permite observar el progreso y los logros de cada niño de manera continua, reconociendo su ritmo de aprendizaje y necesidades específicas. En el caso de niños con discapacidad, el portafolio puede incluir adaptaciones que reflejen su proceso individualizado de aprendizaje.
              .bg-color-white.box-shadow.p-3(x="32%" y="92%" numero="+")
                h5 Cuestionarios y entrevistas
                p En algunos casos, especialmente cuando se necesita obtener información específica de los padres o de otros adultos involucrados en el proceso educativo, los cuestionarios y las entrevistas pueden ser herramientas útiles. Estas técnicas pueden ayudar a conocer más sobre el contexto familiar y cómo influye en el aprendizaje del niño, garantizando una evaluación integral y pertinente para cada caso.
    
              .bg-color-white.box-shadow.p-3(x="15%" y="71%" numero="+")
                h5 Registros anecdóticos
                p Se trata de pequeñas notas o relatos que los docentes hacen sobre situaciones específicas que ocurren en el aula. Estos registros permiten capturar momentos claves en el desarrollo de los niños, como su capacidad para resolver un conflicto o su participación en actividades grupales. En el caso de estudiantes con necesidades específicas, los registros anecdóticos pueden ser un insumo valioso para ajustar estrategias de enseñanza y evaluar avances de manera cualitativa.
    
              .bg-color-white.box-shadow.p-3(x="21%" y="37%" numero="+")
                h5 Evaluación por pares y autoevaluación
                p Aunque este tipo de evaluación es más común en niveles educativos superiores, también puede aplicarse en educación infantil de manera adaptada. A través de la evaluación por pares, los niños pueden empezar a reflexionar sobre sus propios aprendizajes y los de sus compañeros, fomentando el desarrollo de habilidades socioemocionales y la capacidad de autoevaluarse. En un entorno inclusivo, este tipo de evaluación promueve la empatía, la cooperación y el respeto por la diversidad.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/6.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p La evaluación en educación infantil debe garantizar la equidad y la inclusión, reconociendo las diferencias individuales y aplicando estrategias que permitan a todos los niños demostrar sus aprendizajes. En este sentido, el PIAR juega un papel fundamental al ofrecer herramientas para que los docentes puedan ajustar sus metodologías, asegurando que cada niño reciba una educación de calidad acorde con sus necesidades.
          p.mb-0 Estos instrumentos no deben verse de manera aislada, sino como parte de un proceso integral de evaluación continua, cuyo objetivo es mejorar la enseñanza y apoyar el desarrollo de los niños. Al utilizar diversos instrumentos, el docente obtiene una visión más completa de los logros, dificultades y necesidades de cada niño, lo que le permite ajustar su enfoque pedagógico y diseñar actividades que respondan mejor a sus requerimientos de aprendizaje. 
        p(data-aos="fade-left") Además, es fundamental que los instrumentos de evaluación sean aplicados de manera flexible y adaptada a las características de cada grupo y cada niño. El uso de herramientas adecuadas facilita no solo la medición de los aprendizajes, sino también la creación de un ambiente educativo más inclusivo, participativo y dinámico.
    
    #t_5_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.3] Estrategias para el seguimiento del desarrollo infantil
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El seguimiento del desarrollo infantil en la educación inicial es fundamental para garantizar que cada niño reciba el apoyo necesario para su crecimiento integral.
    
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema5/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este proceso no solo permite identificar avances en el aprendizaje académico, sino también en el ámbito social, emocional y físico, asegurando que todos los aspectos del desarrollo sean atendidos de manera oportuna y considerando la diversidad de necesidades en el aula.
        p(data-aos="fade-left") Desde un enfoque inclusivo, es esencial que las estrategias de seguimiento sean flexibles y adaptables a las particularidades de cada niño. En este sentido, el Plan Individual de Ajustes Razonables (PIAR) juega un papel clave, puesto que permite a los docentes identificar y aplicar estrategias diferenciadas para garantizar que todos los niños, incluyendo aquellos con necesidades educativas especiales, tengan acceso a una evaluación justa y equitativa.
        h5 Ahora, las estrategias claves para el seguimiento del desarrollo infantil, son:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/9.png")
            .col-lg-7
              h5 Observación continua
              p La observación es una de las estrategias más potentes en el seguimiento del desarrollo infantil, especialmente en educación inicial. A través de la observación continua y sistemática, el docente puede identificar patrones de comportamiento, habilidades sociales y competencias cognitivas en los niños. Esta estrategia permite evaluar cómo interactúan, resuelven problemas y aplican lo aprendido en diferentes contextos. Es importante registrar estas observaciones de manera detallada para ajustar la enseñanza de acuerdo con las necesidades individuales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/10.png")
            .col-lg-7
              h5 Portafolios de desarrollo
              p El portafolio recopila evidencias del progreso de los niños a lo largo del tiempo. Incluye trabajos, dibujos, actividades y proyectos en distintas áreas, permitiendo una visión clara de los logros alcanzados y de las áreas que requieren mayor atención. En el contexto de la diversidad, este instrumento es una herramienta inclusiva, porque respeta los distintos ritmos y estilos de aprendizaje.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/11.png")
            .col-lg-7
              h5 Entrevistas con padres y cuidadores
              p El contexto familiar tiene un impacto significativo en el desarrollo infantil. A través de entrevistas con padres y cuidadores, el docente puede conocer el comportamiento del niño fuera del aula, sus intereses y necesidades particulares. Este intercambio fortalece la relación escuela-familia y permite diseñar estrategias más personalizadas dentro del aula.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/12.png")
            .col-lg-7
              h5 Evaluaciones diagnósticas periódicas
              p Realizar evaluaciones periódicas permite medir el desarrollo en áreas clave como la cognición, el lenguaje, la motricidad y las habilidades socioemocionales. Estas evaluaciones no buscan clasificar a los niños, sino comprender sus necesidades individuales para ajustar las estrategias pedagógicas, asegurando un enfoque equitativo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/13.png")
            .col-lg-7
              h5 Registros anecdóticos
              p Los registros anecdóticos documentan situaciones específicas que ilustran el comportamiento y las habilidades de los niños en distintos momentos. Son herramientas valiosas para observar cómo los niños enfrentan desafíos, interactúan con sus compañeros y gestionan sus emociones, lo que facilita la adaptación de las estrategias de enseñanza.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/14.png")
            .col-lg-7
              h5 Listas de cotejo y rúbricas
              p Estos instrumentos permiten un seguimiento estructurado del desarrollo infantil. Las listas de cotejo ayudan a identificar si un niño ha alcanzado ciertos hitos del desarrollo, mientras que las rúbricas proporcionan una evaluación cualitativa de su desempeño. Su uso favorece la equidad, debido a que permite adaptar las expectativas según las capacidades individuales de cada niño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/15.png")
            .col-lg-7
              h5 Encuestas y cuestionarios para la autoevaluación
              p Aunque en la educación infantil la autoevaluación es limitada, se pueden utilizar preguntas adaptadas a su nivel para conocer cómo se sienten respecto a su aprendizaje. Esto promueve la autonomía, la participación y el autoconocimiento desde una edad temprana.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema5/16.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") El PIAR es un elemento esencial dentro del seguimiento del desarrollo infantil, dado que orienta la aplicación de ajustes razonables para que todos los niños puedan participar activamente en su proceso educativo. Su implementación en la evaluación permite que las estrategias se adapten a la diversidad de necesidades, asegurando que ningún niño quede excluido del aprendizaje.
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En conclusión, el seguimiento del desarrollo infantil debe considerar la diversidad y la inclusión como principios fundamentales. Aplicando estrategias flexibles y utilizando el PIAR como una herramienta clave, los docentes pueden garantizar una educación de calidad que respete los ritmos, capacidades y necesidades de cada niño.

    #t_5_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.4] Evaluación formativa y sumativa en la primera infancia
    
    p.mb-4 La evaluación en la primera infancia es una herramienta esencial para comprender el desarrollo de los niños y ajustar las estrategias pedagógicas de manera efectiva.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Evaluación formativa y sumativa en la primera infancia
            p.mb-4(data-aos="fade-right") En el PDF <b>Evaluación formativa y sumativa en la primera infancia</b>, se exploran las diferencias entre estos dos enfoques, destacando su papel complementario en la enseñanza. A través de este análisis, se enfatiza la importancia de la evaluación formativa como un proceso continuo que permite mejorar la enseñanza en tiempo real, y la evaluación sumativa como una estrategia para medir los logros alcanzados en momentos específicos del aprendizaje.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación formativa y sumativa en la primera infancia.

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/17.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/91046 " target="_blank" rel="noopener noreferrer") Martínez Medina, I. (2015). La evaluación del desarrollo estético de los niños en la infancia preescolar: ( ed.). Editorial Universitaria.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=5913180 " target="_blank" rel="noopener noreferrer") Pedroza, L. H., & Serrano, E. L. (2017). Desarrollo y validación de un instrumento para evaluar la práctica docente en educación preescolar. Revista Iberoamericana de Evaluación Educativa, 10(1), 109-129. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://idus.us.es/items/b3ffc562-1f7d-4f7f-a6af-49c728feea71 " target="_blank" rel="noopener noreferrer") Rodríguez, M. J. (2007). Calidad de la Educación Infantil: instrumentos de evaluación. Revista de educación, 343, 301-323. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://esemtia.com/2022/03/30/evaluacion-en-educacion-infantil/ " target="_blank" rel="noopener noreferrer") La evaluación en educación infantil. Técnicas e instrumentos usados | esemtia. (s.f.). Esemtia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.youtube.com/watch?v=PQ6UuUYq2NY" target="_blank" rel="noopener noreferrer") Cedec_Intef. (2019, 30 de enero). HQV5. HAY QUE VER... LOS INSTRUMENTOS DE EVALUACIÓN. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Por qué es importante la articulación entre la teoría y la práctica en la formación docente?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Porque permite aplicar conocimientos en contextos educativos reales. ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Porque reemplaza la necesidad de conocer teorías pedagógicas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Porque solo se enfoca en la observación sin intervención.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Porque evita la necesidad de evaluar el aprendizaje en el aula',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes aspectos es clave en la aplicación de una propuesta didáctica?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Evitar la evaluación para no alterar el proceso de aprendizaje.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Implementar siempre las mismas actividades sin modificaciones.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Adaptar estrategias a las necesidades de los niños y niñas.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Diseñar actividades sin considerar el contexto educativo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué se espera que los estudiantes logren con esta unidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Aplicar estrategias didácticas innovadoras para la enseñanza en pre-jardín y jardín. ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Memorizar los conceptos teóricos sin necesidad de aplicarlos en el aula.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Enseñar a niños de primaria y secundaria mediante el juego.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Diseñar actividades sin considerar el desarrollo infantil.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué elemento es fundamental en la planeación didáctica?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La improvisación en las actividades de enseñanza.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La estructuración de actividades basadas en metodologías activas. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La enseñanza sin considerar las necesidades del estudiante.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El uso exclusivo de material impreso en el aula.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes aspectos caracteriza una propuesta didáctica efectiva en educación infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sigue un modelo único y rígido de enseñanza.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Se basa en enfoques contemporáneos y considera la diversidad del aula. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'No requiere evaluar los aprendizajes obtenidos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Se enfoca únicamente en la enseñanza tradicional sin innovaciones.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
