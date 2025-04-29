<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Experiencias educativas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Ahora, nos adentraremos en el fascinante mundo de las experiencias educativas, aquellas vivencias que transforman el aula en un espacio dinámico, creativo y lleno de oportunidades para el crecimiento (Pedraza,2005). 
    
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través de diversas estrategias y metodologías, explicaremos cómo hacer que cada momento de enseñanza sea significativo y único para nuestros estudiantes. Estas experiencias no solo son fundamentales para el aprendizaje de los niños, sino que también nos sirven como base para estructurar nuevas experiencias como futuros docentes.
        p(data-aos="fade-left") ¡Se invita a reflexionar sobre cómo podemos crear vivencias que no solo enseñen, sino que también inspiren y motiven!

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Análisis de casos y buenas prácticas en educación inicial
    
    p.mb-4 El análisis de casos y buenas prácticas en educación inicial permite comprender cómo diferentes metodologías y estrategias pedagógicas impactan el aprendizaje y desarrollo infantil.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Análisis de casos y buenas prácticas en educación inicial
            p.mb-4(data-aos="fade-right") En el PDF <b>Análisis de casos y buenas prácticas en educación inicial</b>, se presentan ejemplos concretos de experiencias exitosas en el aula, destacando enfoques como el aprendizaje basado en el juego, la educación inclusiva y la metodología Reggio Emilia. A través de estos estudios, se evidencia la importancia de diseñar ambientes de aprendizaje flexibles y adaptados a las necesidades de los niños, promoviendo su participación activa, creatividad y exploración del entorno.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Análisis de casos y buenas prácticas en educación inicial.

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/3.png', alt='')

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Desarrollo de propuestas didácticas basadas en experiencias reales
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 ¿Cómo pueden los futuros licenciados en educación infantil, diseñar y aplicar propuestas didácticas significativas en sus centros de práctica para los niveles de prejardín y jardín? Esta es una de las preguntas fundamentales que deben guiar la práctica pedagógica. Al reflexionar sobre esta cuestión, se debe tener en cuenta que el diseño de experiencias educativas en la primera infancia no solo implica la aplicación de métodos de enseñanza, sino también la capacidad de adaptarse al contexto, observar las necesidades específicas de los niños y crear un ambiente propicio para el aprendizaje.
        p(data-aos="fade-left") Como estudiante de licenciatura en educación infantil, se encuentra en una etapa crucial de su formación en la que debe aprender a combinar la teoría con la práctica. El diseño y la implementación de propuestas didácticas son habilidades claves que debe desarrollar para ofrecer experiencias educativas enriquecedoras a los niños de prejardín y jardín. Pero, ¿cómo lograr que esas propuestas sean realmente efectivas y adecuadas para el contexto de su centro de práctica? 
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Enfoque en el contexto real")
            p Al comenzar a diseñar una propuesta didáctica, es importante que, como futuro educador, se enfoque en el contexto real de los niños que va a atender. Cada grupo es único, con diversas necesidades, intereses y estilos de aprendizaje. En este sentido, las propuestas que desarrolle deben responder a esos aspectos, promoviendo un ambiente que fomente el desarrollo integral de los niños.
            p Cuando se habla de "experiencias reales", no se refiere únicamente a aquellas situaciones que ya han sucedido, sino a actividades que sean relevantes para los niños en el aquí y el ahora, que se conecten con su mundo cotidiano. Al diseñar actividades para los niños de prejardín y jardín, se debe pensar en experiencias prácticas que les permitan aprender a través del juego, la manipulación de objetos y la interacción con su entorno. Por ejemplo, una actividad de exploración sensorial donde los niños puedan tocar, oler y clasificar materiales naturales les ofrece una rica experiencia de aprendizaje que estimula su curiosidad y sus habilidades cognitivas.

    
          .div(titulo="Implementación de las propuestas didácticas")
            p Sin lugar a dudas, uno de los aspectos más importantes de su práctica pedagógica. Es aquí donde debe aplicar lo aprendido en sus cursos teóricos, pero también estar preparado para adaptarse y ajustar la propuesta, según las circunstancias que se presenten. Los niños de la primera infancia tienen ritmos y necesidades diversas, por lo que es fundamental ser flexible en el enfoque pedagógico. En el aula, las propuestas deben ser dinámicas y adaptativas para que cada niño pueda participar activamente y aprender de acuerdo con sus posibilidades.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Observación continua")
            p Al poner en práctica las actividades, debe estar atento a las respuestas de los niños: ¿Están comprometidos con la actividad? ¿Están desarrollando las habilidades esperadas? ¿La propuesta está generando el impacto que se esperaba? La retroalimentación continua le permitirá ajustar las estrategias y mejorar las experiencias educativas. La observación, además de ser una herramienta de evaluación, es también una fuente de reflexión, que le permitirá tomar decisiones informadas sobre cómo mejorar las actividades.
    
          .div(titulo="Análisis crítico")
            p No basta con implementar las actividades tal como fueron planificadas. Un análisis crítico de la propuesta didáctica es crucial para determinar su efectividad y para realizar ajustes en el futuro. Este análisis debe incluir la evaluación de los resultados que se esperaban alcanzar y cómo las actividades contribuyeron al desarrollo de los niños. Además, se deben identificar las fortalezas y debilidades de las actividades para mejorar en el futuro.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este proceso, la reflexión debe ser constante. Se debe preguntarse: ¿Las actividades lograron los objetivos de aprendizaje propuestos? ¿Los niños demostraron avances en las competencias que se esperaban trabajar? Si no es así, ¿qué se podría modificar o enriquecer en futuras propuestas?
        p(data-aos="fade-left") Como estudiante de licenciatura, es fundamental que se apoye en los documentos de referencia proporcionados por la institución, como el reglamento de prácticas, los lineamientos y el informe técnico de prácticas. Estos documentos ofrecen el marco normativo y teórico necesario para estructurar y evaluar su trabajo en el centro de práctica. Asegúrese de que su propuesta esté alineada con los estándares establecidos por el programa académico y que cada actividad esté respaldada por teorías pedagógicas actuales.
        p(data-aos="fade-left") Además, estos documentos le servirán como una guía para asegurar que las actividades y estrategias implementadas están orientadas a fomentar el desarrollo integral de los niños, cumpliendo con los objetivos de aprendizaje establecidos y respetando los principios pedagógicos de la educación inicial.
    
    h2.mb-5(data-aos="fade-left") Reflexiónemos: el aprendizaje a través de la práctica
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/9.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Al desarrollar y aplicar propuestas didácticas, se está construyendo no solo el conocimiento de los niños, sino también el propio como futuro profesional. Es fundamental que, durante su práctica pedagógica, se enfoque en crear propuestas que no solo sean teóricas, sino profundamente significativas para los niños. Las experiencias educativas deben fomentar la curiosidad, el desarrollo de habilidades socioemocionales y el trabajo en equipo, promoviendo un aprendizaje activo y participativo.
        p(data-aos="fade-left") Recuerde que la práctica pedagógica es también un espacio de autorreflexión. Evaluar su propio trabajo, identificar lo que funcionó y lo que puede mejorar, le permitirá evolucionar como educador y ofrecer cada vez mejores experiencias educativas para los niños.

        p(data-aos="fade-left") Finalmente, tener en cuenta que la propuesta didáctica debe estar fundamentada en experiencias reales, debe adaptarse al contexto de cada grupo, y estar respaldada por los documentos de referencia, garantizará que el diseño y la aplicación de actividades sean realmente efectivas y significativas para los niños de prejardín y jardín. 
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Experiencias educativas: reflexión sobre el impacto de la práctica pedagógica 
    
    p.mb-4 La práctica pedagógica es un proceso dinámico que requiere reflexión constante sobre su impacto en el aprendizaje y desarrollo de los niños.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Experiencias educativas
            p.mb-4(data-aos="fade-right") En el PDF <b>Experiencias educativas</b>, se analizan estrategias para evaluar la efectividad de las intervenciones didácticas, considerando la participación de los estudiantes, la adecuación de las metodologías y la inclusión de diversas formas de aprendizaje. A través de este análisis, se busca fortalecer la capacidad de los futuros docentes para adaptar y mejorar sus prácticas, asegurando experiencias educativas significativas y alineadas con las necesidades del aula.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Experiencias educativas.

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/10.png', alt='')
    
        

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/267595 " target="_blank" rel="noopener noreferrer") Mateo Peñalver, E. (2024). El juego infantil y su metodología: (1 ed.). Macmillan Iberia, S.A. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://aletheia.cinde.org.co/index.php/ALETHEIA/article/view/109 " target="_blank" rel="noopener noreferrer") Díaz, L. P. L. (2013). Aula divertida: vivencias de una maestra de preescolar en la enseñanza de las matemáticas. Aletheia, 5(2/1), 182-191. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://manglar.uninorte.edu.co/handle/10584/13139#page=1 " target="_blank" rel="noopener noreferrer") Meza del Villar, L. (2024). Una propuesta didáctica para el desarrollo de la alfabetización inicial e identidad cultural en preescolar. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://redaprende.colombiaaprende.edu.co/metadatos/recurso/blog-educacion-inicial/ " target="_blank" rel="noopener noreferrer") Catálogo | Catálogo de contenidos digitales para la educación. (s.f.). Catálogo | Catálogo de contenidos digitales para la educación. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=B5L_4rhzw5U " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2021, 25 de septiembre). Expedición de Experiencias en Educación Inicial 2021. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
