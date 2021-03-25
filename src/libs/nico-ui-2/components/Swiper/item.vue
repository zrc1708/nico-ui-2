<template>
    <transition :name='dirType'>
        <div class="swiper-item" v-if="selfIndex===currentIndex">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import { getCurrentInstance, reactive, toRefs, watch } from 'vue'

export default {
    name:'Ni-Swiper-item',
    setup(){
        const instance = getCurrentInstance()

        const state = reactive({
            selfIndex:instance.vnode.key,
            currentIndex:instance.parent.ctx.currentIndex,
            dirType:instance.parent.ctx.dirType
        })

        watch(()=>instance.parent.ctx.currentIndex,(value)=>{
            state.currentIndex = value
        })
        watch(()=>instance.parent.ctx.dirType,(value)=>{
            state.dirType = value
        })


        return {
            ...toRefs(state)
        }
    }
}
</script>

<style lang="less" scoped>
.swiper-item{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.swiper-item :nth-child(1){
    width: 100%;
    height: 100%;
}
// 前进动画效果
.next-enter-active,.next-leave-active{
    transition: all .3s;
}
.next-enter-active{
    transform: translateX(100%);
}
.next-enter-to{
    transform: translateX((0));
}
.next-leave-active{
    transform: translateX(0);
}
.next-leave-to{
    transform: translateX(-100%);
}
// 后退动画效果
.prev-enter-active,.prev-leave-active{
    transition: all .3s;
}
.prev-enter-active{
    transform: translateX(-100%);
}
.prev-enter-to{
    transform: translateX((0));
}
.prev-leave-active{
    transform: translateX(0);
}
.prev-leave-to{
    transform: translateX(100%);
}
</style>