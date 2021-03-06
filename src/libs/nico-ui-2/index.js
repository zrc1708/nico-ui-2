import Magnifier from './components/Magnifier.vue'
import Magnifier2 from './components/Magnifier2.vue'
import Stars from './components/Stars.vue'
import Modal from './components/Modal.vue'
import Swiper from './components/Swiper/index.vue'
import SwiperItem from './components/Swiper/item.vue'

import TreeMenu from './components/TreeMenu/index.vue'
import MenuItem from './components/TreeMenu/MenuItem.vue'
import SubMenu from './components/TreeMenu/SubMenu.vue'
import ReSubMenu from './components/TreeMenu/ReSubMenu.vue'

const Nicoui2 = {}

Nicoui2.install = function(Vue){
    Vue.component(Magnifier.name,Magnifier)
    Vue.component(Magnifier2.name,Magnifier2)
    Vue.component(Stars.name,Stars)
    Vue.component(Modal.name,Modal)
    Vue.component(Swiper.name,Swiper)
    Vue.component(SwiperItem.name,SwiperItem)
    Vue.component(TreeMenu.name,TreeMenu)
    Vue.component(MenuItem.name,MenuItem)
    Vue.component(SubMenu.name,SubMenu)
    Vue.component(ReSubMenu.name,ReSubMenu)
}

export default Nicoui2