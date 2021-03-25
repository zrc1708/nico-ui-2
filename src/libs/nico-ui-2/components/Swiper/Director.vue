<template>
    <div class="director dir-next" v-if="dir==='next'">
        <a href="javascript:;"
            @click="dirClick(dir)">&gt;</a>
    </div>
    <div class="director dir-prev" v-else-if="dir==='prev'">
        <a href="javascript:;"
            @click="dirClick(dir)">&lt;</a>
    </div>
</template>

<script>
export default {
    name:'Director',
    props:{
        dir:String
    },
    setup(props,ctx){
        const dirClick=(dir)=>{
            ctx.emit('dirClick',dir)
        }

        return {
            dirClick
        }
    }
}
</script>

<style lang="less" scoped>
.director{
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, .3);
    line-height: 30px;
    text-align: center;
    transform: translateY(-50%);

    a {
        color: white;
        text-decoration: none;
        font-size: 20px;
    }
}
.dir-next{
    right: 0;
    border-radius: 15px 0 0 15px;
    margin-right: -5px;
}
.dir-prev{
    left: 0;
    border-radius: 0 15px 15px 0;
    margin-left: -5px;
}
</style>