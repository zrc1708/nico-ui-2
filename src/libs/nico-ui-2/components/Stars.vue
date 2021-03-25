<template>
  <div class="ui-stars">
      <span 
        v-for="num in 5"
        :key="num"
        :class="[
        'iconfont icon-star',
        num<=starNum?'active':''
      ]"
        :style="{fontSize:size+'px'}"
        @click="setStarNum(num)"></span>
  </div>
</template>

<script>
import {useStars} from '../hooks'

export default {
    name:'Ni-stars',
    props:{
        num:{
            type:Number,
            default:0
        },
        size:{
            type:Number,
            default:16
        }
    },
    setup(props,ctx){
        const {starNum,setStarNum} = useStars(props.num,()=>{
            ctx.emit('getStarNum',starNum.value)
        })

        return {
            starNum,
            setStarNum
        }
    }
}
</script>

<style lang="less" scoped>
@font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_2440887_2170k7c8hzv.eot?t=1616552372783'); /* IE9 */
    src: url('//at.alicdn.com/t/font_2440887_2170k7c8hzv.eot?t=1616552372783#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALAAAsAAAAABmgAAAJzAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAp0gQgBNgIkAwgLBgAEIAWEbQcuG6wFyC6wbdiTIi2rgKJQnH0HAMIoHp6f+527vS8KnkS0imXRRCbRKIkEsVGyZfEQd+9+egPivE1hSVaNSBUlXz5wmsI8kAWyiEZuwqBwgHo9wTMEKA1UhRMQ7NfnuZzeBDqQa3ygHPeiNQb1AurFgRToHhhFViiBN4xd4BIeE6gb0ifrYGzGB4USa1UgbiQhAoW5gCSxdFUo1xxM4kFJNbvL7oH78PvxzRWFZEo5q+r4ejQOA29hOyvngiufECSg4yXkWAAScV6bOJQjGJejnsg1BvZVHrz1X/h2sVeLYH+dVdoEA1B6TzJXfqvpDG5rqglgedRFxETFSn/At3ZwsNMQDGzs7B4GG4Kbh6v7dX7/+v72Vq0PZG/tvRXPPVn2z9m3Nhd6uz8uS1+mOq5+uuTHqZnGmSn18bvz2ib4M5fHPZ8tCyEDAEWRn+W9kIXgf2OhCv8KGwm8+i70FUWCfi5Q3a8z+D+yngNJV1i2LKmy2tHMxHnb6uooYE+317HGvpvJhKq+Ea6KwdSTq86kTpBdQEnDBsqqtlE3b/x4Qw8mR6Qa5swDhE6XyLQ9ItfpgUzsC0r6vaGsM3JQdxlc2DAVUnEMIxzjJDpLpJihU8fBi6NyDwpJNcKyipAPIEtIYeK0OYrpcdSRzbElkRJcnFNCmaGRMfAcqqpBTGbIGOM2kXPTbbfTujfZYoYGxfYxKIJDcUTULEISY9BRfzxXXPq8BxIkqSJYS19NMgAxCdLshJONowc5rtV79d3LKwkpAheOowiKMWiIMTAPqVQGwqyfJ0MxnI04ImZys9vDaF+tbX299nUnoM4yZWHX59ItjzAAAAA=') format('woff2'),
    url('//at.alicdn.com/t/font_2440887_2170k7c8hzv.woff?t=1616552372783') format('woff'),
    url('//at.alicdn.com/t/font_2440887_2170k7c8hzv.ttf?t=1616552372783') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_2440887_2170k7c8hzv.svg?t=1616552372783#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #999;

    &.icon-star {
        transition: color .3s;
    }

    &.icon-star:before {
        content: "\e660";
    }

    &.active{
        color: #fbab06;
    }
}

</style>