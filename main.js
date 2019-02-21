Vue.component('Program',
    {
        template: <div>
            <a class="nav-link" v-bind href="./Programas.html" onclick="$('#fh5co-reviews').goTo();return false;">Programas</a>
        </div>
    }
)

new Vue({
    el: 'main',
    data: {
        seleccionado: 'Program'
    }
});