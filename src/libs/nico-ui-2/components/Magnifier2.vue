<template>
  <div class="img-wrap2"
    :style="{
        width: imgWidth+'px',
        height: imgHeight+'px'
    }">
        <!-- 原图 -->
        <a :href="link"
            class="img-lk">
            <img class="static-img" 
                :src="imgUrl" 
                :alt="imgAlt">
            <div class="mask"
                :style="{
                    width: magWidth+'px',
                    height: magHeight+'px'
                }"></div>
        </a>
        <!-- 放大图 -->
        <div class="big-img-box"
            :style="{
                width: bigImageWidth+'px',
                height: '100%'
            }">
            <img class="big-img" 
                :style="{
                    height:setBigImageHeight+'px',
                    width:setBigImageWidth+'px'
                }"
                :src="imgUrl" 
                :alt="imgAlt">
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import {getStyle} from '../utils/tools'

export default {
    name:'Magnifier2',
    props:{
        imgWidth:{
            type:Number,
            default:400
        },
        imgHeight:{
            type:Number,
            default:400
        },
        magWidth:{
            type:Number,
            default:150
        },
        magHeight:{
            type:Number,
            default:150
        },
        blank:{
            type:Boolean,
            default:false
        },
        link:String,
        imgUrl:String,
        imgAlt:String
    },
    setup(props){
        const bigImageWidth = ref(props.imgHeight*props.magWidth/props.magHeight)
        const setBigImageHeight = ref(props.imgHeight*props.imgHeight/props.magHeight)
        const setBigImageWidth = ref(props.imgWidth*bigImageWidth.value/props.magWidth)

        onMounted(()=>{
            const oImgWrap = document.querySelector('.img-wrap2')
            const mask = oImgWrap.querySelector('.mask')
            const bigImage = oImgWrap.querySelector('.big-img')
            const bigImgBox = oImgWrap.querySelector('.big-img-box')
            const imgWidth = getStyle(oImgWrap,'width')
            const imgHeight = getStyle(oImgWrap,'height')
            const maskWidth = getStyle(mask,'width')
            const maskHeight = getStyle(mask,'height')
            const imgX = oImgWrap.getBoundingClientRect().left
            const imgY = oImgWrap.getBoundingClientRect().top

            const init = ()=>{
                bindEvent()
            }
        
        function bindEvent(){
            oImgWrap.addEventListener('mouseover',(e)=>{
                mask.className += ' show'
                bigImgBox.className += ' show'
                showMag(getXY(e).x,getXY(e).y)
                document.addEventListener('mousemove',handleMouseMove)
            })

            bigImgBox.addEventListener('mouseover',handleMouseOut)
            bigImgBox.addEventListener('mousemove',handleMouseOut)
            oImgWrap.addEventListener('mouseout',handleMouseOut)
        }

        function handleMouseMove(e){
            const {x,y,mouseX,mouseY} = getXY(e)
            showMag(x,y,mouseX,mouseY)
        }

        function handleMouseOut(){
            mask.className = 'mask'
            bigImgBox.className = 'big-img-box'
            document.removeEventListener('mousemove',handleMouseMove)
        }

        function showMag(x,y,mouseX,mouseY){
            // 调整遮罩位置
            if(x<0){
                x=0
            }else if(x>imgWidth-maskWidth){
                x=imgWidth-maskWidth
            }
            if(y<0){
                y=0
            }else if(y>imgHeight-maskHeight){
                y=imgHeight-maskHeight
            }
            mask.style.left = x +'px'
            mask.style.top = y +'px'
            // 调整大图位置
            let bigImageX = x*setBigImageWidth.value/imgWidth
            let bigImageY = y*setBigImageHeight.value/imgHeight
            bigImage.style.left = -bigImageX+'px'
            bigImage.style.top = -bigImageY+'px'
        }

        function getXY(e){
            return {
                x:e.pageX - imgX - maskWidth /2,
                y:e.pageY - imgY - maskHeight /2,
                mouseX:e.pageX - imgX,
                mouseY:e.pageY - imgY
            }
        }

        init()
        })

        return {
            bigImageWidth,
            setBigImageHeight,
            setBigImageWidth
        }
    }
}
</script>

<style lang="less" scoped>
.img-wrap2{
    position: relative;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px #999;

    .static-img{
        width: 100%;
    }
    .mask{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(rgba(80, 162, 216, 0.822) 33%, transparent 66%);
        background-size: 3px 3px;
        cursor: move;

        &.show{
            display: block;
        }
    }

    .big-img-box{
        display: none;
        position: absolute;
        top: 0;
        left: 100%;
        margin-left: 10px;
        z-index: 2;
        cursor: move;
        overflow: hidden;

        &.show{
            display: block;
        }

        .big-img{
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>