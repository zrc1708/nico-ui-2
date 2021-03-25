<template>
    <div class="dot-container" v-if="hasDot">
        <div 
            class="dot-item"
            v-for="item in itemLen"
            :key="item">
            <a 
                class="dot-lk"
                href="javascript:;"
                @click="dotClick(item -1)"
                :style="{
                    background:(item-1)===currentIndex ? dotBgColor:'#fff'
                }"></a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Dot',
    props:{
        itemLen:Number,
        currentIndex:Number,
        hasDot:{
            type:Boolean,
            default:true
        },
        dotBgColor:{
            type:String,
            default:'#ff5000'
        }
    },
    setup(props,ctx){
        const dotClick = (index)=>{
            ctx.emit('dotClick',index)
        }

        return {
            dotClick
        }
    }
}
</script>

<style lang="less" scoped>
.dot-container{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 2px 4px;
    background-color: rgba(255, 255, 255, .4);
    border-radius: 10px;
    .dot-item{
        float: left;
        margin-right: 5px;
        &:last-child{
            margin-right: 0; 
        }
        .dot-lk{
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
    }
}
</style>