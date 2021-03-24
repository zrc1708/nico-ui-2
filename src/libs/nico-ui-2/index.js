import Magnifier from './components/Magnifier.vue'
import Magnifier2 from './components/Magnifier2.vue'

const Nicoui2 = {}

Nicoui2.install = function(Vue){
    Vue.component(Magnifier.name,Magnifier)
    Vue.component(Magnifier2.name,Magnifier2)
}

export default Nicoui2