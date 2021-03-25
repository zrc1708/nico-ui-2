<template>
  <div class="img-wrap"
    v-magnifier
    :style="{
        width: imgWidth+'px',
        height: imgHeight+'px'
    }">
        <a class="mag-wrap"
            :href="link"
            :target="blank?'_blank':''"
            :style="{
                width: magWidth+'px',
                height: magHeight+'px'
            }">
                <img class="mag-img" 
                    :src="imgUrl" 
                    :alt="imgAlt"
                    :style="{
                        width: imgWidth+'px',
                        height: imgHeight+'px'
                    }">
        </a>
        <a :href="link"
            class="img-lk">
            <img class="static-img" 
                :src="imgUrl" 
                :alt="imgAlt">
        </a>
    </div>
</template>

<script>
import {magnifier} from '../directives'

export default {
    name:'Ni-Magnifier',
    directives:{
        magnifier
    },
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
    }
}
</script>

<style lang="less" scoped>
.img-wrap{
    position: relative;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px #999;

    .static-img{
        width: 100%;
    }

    .mag-wrap{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: #fff;
        box-shadow: 0 0 3px #ccc;
        cursor: move;
        overflow: hidden;

        &.show{
            display: block;
            transform: scale(1.5);
        }

        .mag-img{
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>