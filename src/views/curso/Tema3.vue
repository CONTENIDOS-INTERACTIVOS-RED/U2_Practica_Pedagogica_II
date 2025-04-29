<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Metodologías educativas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En este recorrido, explicaremos las diferentes metodologías que sustentan el diseño e implementación de una propuesta didáctica efectiva para los niveles de prejardín y jardín. A lo largo de este tema, profundizaremos en la aplicación de enfoques pedagógicos que favorezcan el desarrollo integral de los niños, promoviendo su participación activa y significativa, en el aprendizaje.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es fundamental comprender cómo seleccionar las metodologías más adecuadas, teniendo en cuenta el contexto del centro de práctica y las características de los estudiantes. Al hacerlo, garantizamos una enseñanza de calidad que responda a sus necesidades e intereses, favoreciendo su desarrollo integral.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Metodologías educativas en preescolar en el contexto de la práctica pedagógica y metodologías activas     
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Las metodologías educativas en el contexto de la práctica pedagógica, son esenciales para el diseño y la implementación de propuestas didácticas que favorezcan el aprendizaje integral en los niños. En este sentido, las metodologías activas permiten que los niños se conviertan en protagonistas de su propio aprendizaje, participando activamente en la construcción de su conocimiento. En el centro de práctica, los estudiantes de licenciatura deben enfocarse en estrategias que fomenten la interacción, la creatividad y la resolución de problemas, adaptadas a las características y necesidades de cada niño. A continuación, se describen las metodologías educativas más relevantes para la práctica pedagógica en el nivel preescolar.
    
    .bg-full-width.bg-color-8.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Metodologías educativas
            p.mb-4(data-aos="fade-right") En el PDF <b>Metodologías educativas</b>, se presentan enfoques innovadores como Montessori, Reggio Emilia, el Aprendizaje Basado en Proyectos y el Aprendizaje Basado en el Juego, entre otros. A través de su implementación, los docentes pueden fomentar el desarrollo integral de los niños, promoviendo la autonomía, la creatividad y la inclusión en el aula. Además, se analizan estrategias para aplicar estos métodos en contextos educativos diversos, garantizando experiencias de aprendizaje significativas y adaptadas a la realidad de cada estudiante.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Metodologías educativas.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')
 
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Selección y aplicación de metodologías educativas en el centro de práctica

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/5.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") ¿Qué aspectos se deben tener en cuenta para seleccionar la metodología adecuada a implementar en el centro de práctica? Esta es una pregunta fundamental, dado que la elección de la metodología influye directamente en el aprendizaje y desarrollo de los niños. Al seleccionar la metodología, es necesario considerar varios factores que garantizarán que las estrategias sean efectivas y se adapten a las características del grupo de niños en los niveles de prejardín y jardín.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Características del grupo de niños
              p El primer aspecto a considerar es el perfil del grupo de estudiantes. Es esencial observar sus necesidades, intereses, ritmos de aprendizaje y estilos cognitivos. ¿Hay niños con necesidades educativas especiales? ¿Qué tipo de actividades les interesan más? Conocer estas particularidades permitirá al estudiante elegir una metodología que responda de manera efectiva a sus características.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Objetivos de aprendizaje
              p Es importante tener en cuenta los objetivos educativos que se quieren alcanzar en la clase. ¿Qué competencias se quieren desarrollar en los niños? Si el objetivo es mejorar la motricidad fina, se podría optar por metodologías que incluyan actividades manipulativas. Si el foco está en el desarrollo de habilidades sociales, las metodologías que promuevan el trabajo en equipo serían más apropiadas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Enfoque pedagógico de la institución
              p La metodología debe estar alineada con el enfoque pedagógico de la institución educativa. Por ejemplo, si la institución promueve el aprendizaje activo y colaborativo, sería adecuado seleccionar metodologías que favorezcan estas dinámicas, como el aprendizaje basado en proyectos o el aprendizaje cooperativo. El estudiante debe entender cómo el enfoque institucional influye en la selección de metodologías.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 El entorno de aprendizaje
              p El espacio físico también influye en la elección de la metodología. Si el aula está equipada con materiales manipulativos, se pueden implementar metodologías que fomenten el uso de estos recursos. Si el aula es más limitada en recursos, el estudiante debe ser creativo y adaptar las estrategias de enseñanza, utilizando materiales simples o trabajando en espacios más amplios como el patio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Flexibilidad y adaptación
              p La metodología seleccionada debe ser flexible, permitiendo ajustes según la respuesta de los niños. Es esencial estar preparado para modificar las actividades si se observa que no están siendo efectivas, asegurando que todos los niños participen y aprendan de manera significativa. La capacidad de adaptación del docente es crucial para garantizar el éxito de las metodologías.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Interacción con las familias
              p Es importante tener en cuenta el contexto familiar de los niños. Algunas metodologías, como el aprendizaje basado en proyectos, pueden incluir actividades en casa, promoviendo la interacción entre la familia y la escuela. Esta colaboración puede enriquecer el proceso de aprendizaje y fortalecer el vínculo entre el hogar y la institución educativa.
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Alineación de la propuesta didáctica con los principios pedagógicos institucionales en la primera infancia
    
    p.mb-4 La alineación de la propuesta didáctica con los principios pedagógicos institucionales es un aspecto clave para garantizar un aprendizaje significativo en la primera infancia.

    .bg-full-width.bg-color-8.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Alineación de la propuesta didáctica
            p.mb-4(data-aos="fade-right") En el PDF <b>Alineación de la propuesta didáctica</b>, se exploran estrategias para adaptar la enseñanza a los enfoques educativos de cada institución, asegurando coherencia entre las metodologías utilizadas y la filosofía educativa. A través de este análisis, se destaca la importancia de diseñar experiencias de aprendizaje que respondan a las necesidades de los niños, promoviendo su desarrollo integral mediante el juego, la exploración y la interacción social.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Alineación de la propuesta didáctica.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=3665842 " target="_blank" rel="noopener noreferrer") de Figarella, E. T. (2007). Propuesta metodológica para la alfabetización científica de niños en edad preescolar. In Anales de la universidad metropolitana (Vol. 7, No. 1, p. 73). Universidad Metropolitana. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69860 " target="_blank" rel="noopener noreferrer") Amar Amar, J. J. (2011). El goce de pensar, sentir y comprender: guía educativa para formadores de primera infancia: ( ed.). Universidad del Norte. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.implika.es/blog/metodologias-educacion-infantil " target="_blank" rel="noopener noreferrer") Las metodologías en educación infantil más innovadoras. (s.f.). Formaciones Implika - Pruebas Libres y Cursos Profesionales. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rvbfgRnW_RI " target="_blank" rel="noopener noreferrer") López Jiménez, T. (2024, 25 de mayo). Aprendizaje Basado en Juegos ABJ. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
