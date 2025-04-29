<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Didácticas específicas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") ¿Considera que los elementos incorporados por el docente titular en el aula, donde realiza su práctica, favorecen el desarrollo de aprendizajes significativos en los niños? Más allá de los contenidos, el secreto está en cómo se enseña.
    
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p En el marco de la práctica pedagógica en la licenciatura en educación infantil, las didácticas específicas juegan un papel fundamental en la planificación y ejecución de experiencias de aprendizaje en prejardín y jardín.
              p.mb-0 Estas didácticas permiten adaptar estrategias y metodologías a las necesidades particulares de los niños, considerando su desarrollo integral y las características del contexto educativo (Osorio y Herrera, 2013).
        p(data-aos="fade-left") A partir de la observación realizada en el centro de práctica, se puede analizar cómo los docentes implementan diferentes enfoques didácticos para estimular el aprendizaje y la participación de los niños. En este sentido, es clave reflexionar sobre:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué estrategias didácticas se han identificado en el aula?

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo se articulan con los principios de la educación inicial y el Proyecto Educativo Institucional (PEI)?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿En qué medida responden a las necesidades e intereses de los niños observados?

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Didácticas específicas: la esencia de una enseñanza significativa

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿Considera que las actividades desarrolladas tanto por el docente titular como por usted favorecen el desarrollo de aprendizajes significativos? 
    
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p.mb-0 La clave está en la aplicación de estrategias didácticas que fomenten el aprendizaje significativo, entendido como aquel que relaciona los nuevos conceptos con conocimientos previos, permitiendo una comprensión más profunda y duradera (Orozco y Henao, 2013).
        p(data-aos="fade-left") En el contexto de la práctica pedagógica, diseñar y aplicar estrategias didácticas adecuadas, es un desafío que requiere creatividad, planificación y una reflexión constante sobre la propia práctica docente. A través del informe técnico de prácticas, los lineamientos de prácticas pedagógicas y el reglamento de prácticas, se establecen los criterios que orientan el desarrollo de propuestas pedagógicas en prejardín y jardín, asegurando que estas sean pertinentes y alineadas con las necesidades del contexto educativo.
    
    p.mb-4 A continuación, se presentan estrategias didácticas claves para la enseñanza en educación infantil, con ejemplos concretos, basados en situaciones reales observadas en el aula y considerando la atención a la diversidad.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Estrategias didácticas
            p.mb-4(data-aos="fade-right") Las estrategias didácticas son fundamentales para garantizar experiencias de aprendizaje significativas, inclusivas y adaptadas a las necesidades de cada estudiante. En el PDF <b>Estrategias didácticas</b>, se analizan diferentes enfoques pedagógicos, como el Aprendizaje Basado en el Juego, el Aprendizaje Basado en Proyectos y el uso de recursos multisensoriales, resaltando su impacto en el desarrollo cognitivo, social y emocional de los niños. A través de su implementación, se promueve la exploración, la creatividad y la participación activa, permitiendo que cada niño aprenda de manera autónoma y constructiva dentro de un ambiente educativo dinámico y accesible.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias didácticas.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] El uso de materiales y recursos didácticos en la educación infantil
    
    p.mb-4 Para conocer más información sobre esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)






    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ojs.tdea.edu.co/index.php/senderos/article/download/961/1027/2104 " target="_blank" rel="noopener noreferrer") Violante, R. (2018). Didáctica de la educación infantil. Reflexiones y propuestas. Revista Senderos Pedagógicos, 9(1), 131-150.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://didacticasespecificasmarichuy.blogspot.com/ " target="_blank" rel="noopener noreferrer") María de Jesús Hernández. (2022, 2 de enero). Didácticas específicas. Didácticas específicas.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=AiOBgZEWrCY" target="_blank" rel="noopener noreferrer") Matemáticas y más temáticas. (2020, 19 de octubre). Clasificaciones y seriaciones | Didáctica de la Matemática en Ed. Infantil. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
