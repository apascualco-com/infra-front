<template>
  <div class="HomeInfoComponent">
    <div>
      <h1 class="HomeInfoComponentTitle">Info</h1>
      <div class="NormalText">
        Actualmente el proyecto esta en construcción y sólo tiene las secciones:
        nodes, pods.
      </div>
      <div class="NormalText">
        Estoy bastante contento con el trabajo realizado en esta primera
        iteración. Me permite trabajar con <b>vue</b> y <b>golang</b> de manera
        manera más fluida
      </div>
    </div>
    <div>
      <h1 class="HomeInfoComponentTitle">Github</h1>
      <div class="NormalText">
        Tanto el back, como el front los tengo publicos:
      </div>
      <div class="NormalText">
        - <b>Backend</b> (go):
        https://github.com/apascualco-com/infra-backend.git
      </div>
      <div class="NormalText">
        - <b>Fontend</b> (vue + typscript):
        https://github.com/apascualco-com/infra-front
      </div>
    </div>
    <div>
      <h1 class="HomeInfoComponentTitle">Github</h1>
      <div class="NormalText">
        Después de estar desarrollando estas dos partes por separado, veo
        claramente el camino a seguir:
      </div>
      <div class="NormalText">
        Fomanetar la reutilización de componentes y dividir más el front
      </div>
      <div class="NormalText">
        Trabajar con la herencia de componentes
      </div>
      <div class="NormalText">
        Mirar scss y minimizar los recursos para mejorar la carga
      </div>
      <div class="NormalText">
        Acostumbrarme al las convenciones de golang y ha su estilo de desarrollo
      </div>
    </div>
    <div>
      <h1 class="HomeInfoComponentTitle">Graph</h1>
    </div>
    <div>
      <h1 class="HomeInfoComponentTitle">Raspberry</h1>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "HomeInfoComponent"
});
</script>

<style scoped>
a {
  color: inherit;
}
a:hover {
  font-weight: bold;
}
.HomeInfoComponent {
  font-size: 10px;
  margin: auto;
  width: 990px;
}
.HomeInfoComponentTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
.NormalText {
  font-size: 16px;
  text-align: left;
  color: #c5c7c8;
  padding-bottom: 5px;
}
</style>

