<template>
  <div class="swiper"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave">
        <div class="inner">
            <slot></slot>
            <SwiperDirector dir="prev" @dirClick="dirClick"></SwiperDirector>
            <SwiperDirector dir="next" @dirClick="dirClick"></SwiperDirector>
            <SwiperDot
                :hasDot="hasDot"
                :itemLen="itemLen"
                :currentIndex="currentIndex"
                :dotBgColor="dotBgColor"
                @dotClick="dotClick"></SwiperDot>
        </div>
  </div>
</template>

<script>
import { getCurrentInstance, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import SwiperDot from './Dot.vue'
import SwiperDirector from './Director.vue'

export default {
    name:'Ni-Swiper',
    components:{
        'SwiperDot':SwiperDot,
        'SwiperDirector':SwiperDirector
    },
    props:{
        autoplay:{
            type:Boolean,
            default:true
        },
        duration:{
            type:Number,
            default:3000
        },
        initial:{
            type:Number,
            default:0
        },
        hasDot:{
           type:Boolean,
           default:true 
        },
        hasDirector:{
            type:Boolean,
            default:true
        },
        dotBgColor:String,
    },
    setup(props){
        const instance = getCurrentInstance()
        const state = reactive({
            currentIndex: props.initial,
            itemLen:0,
            dirType:'next'
        })

        let timer = null

        const autoPlay = ()=>{
            if(props.autoplay){
                timer = setInterval(()=>{
                    setIndex('next')
                },props.duration)
            }
        }

        const setIndex = (dir)=>{
            if(dir==='next'){
                state.dirType = 'next'
                state.currentIndex += 1
                if(state.currentIndex===state.itemLen){
                    state.currentIndex=0
                }
            }else if(dir==='prev'){
                state.dirType = 'prev'
                state.currentIndex -= 1
                if(state.currentIndex===-1){
                    state.currentIndex=state.itemLen-1
                }
            }
        }

        const dotClick = (index) =>{
            let nextToIndex = 0
            let prevToIndex = 0
            if(index > state.currentIndex){
                nextToIndex = index - state.currentIndex
                prevToIndex = state.itemLen + state.currentIndex - index
            }else if(index < state.currentIndex){
                nextToIndex = state.itemLen + index - state.currentIndex
                prevToIndex = state.currentIndex - index
            }else{
                return
            }
            if(nextToIndex <= prevToIndex){
                for (let i = 0; i < nextToIndex; i++) {
                    setTimeout(()=>{
                        setIndex('next')
                    },40*i)
                }
            }else{
                for (let i = 0; i < prevToIndex; i++) {
                    setTimeout(()=>{
                        setIndex('prev')
                    },40*i)
                }
            }

        }

        const dirClick = (dir)=>{
            setIndex(dir)
        }

        const mouseEnter = ()=>{
            _clearInterval()
        }

        const mouseLeave =()=>{
            autoPlay()
        }

        onMounted(()=>{
            state.itemLen = instance.slots.default()[0].children.length
            autoPlay()
        })
        onBeforeUnmount(()=>{
            _clearInterval()
        })



        const _clearInterval = ()=>{
            clearInterval(timer)
            timer = null
        }

        return {
            ...toRefs(state),
            dotClick,
            mouseEnter,
            mouseLeave,
            dirClick
        }
    }
}
</script>

<style lang="less" scoped>
.swiper{
    width: 100%;
    height: 100%;
    
    .inner{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
}
</style>