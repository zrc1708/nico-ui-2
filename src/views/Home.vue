<template>
  <div class="home">
    <Magnifier
      link="https://www.bilibili.com/read/cv4976668/"
      :blank="true"
      imgUrl="https://z3.ax1x.com/2021/03/23/6TqdAO.png"
      :imgWidth="400"
      :imgHeight="275"
      :magWidth="150"
      :magHeight="100"
      imgAlt='异度之刃2'
      >
    </Magnifier>
    <Magnifier2
      link="https://www.bilibili.com/read/cv4976668/"
      :blank="true"
      imgUrl="https://z3.ax1x.com/2021/03/23/6TqdAO.png"
      :imgWidth="400"
      :imgHeight="275"
      :magWidth="150"
      :magHeight="150"
      imgAlt='异度之刃2'
      >
    </Magnifier2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup(){

    return{

    }
  }
}
</script>

<style lang="less" scoped>
// .home{
//   // position: relative;
//   // top: 100px;
//   // left: 100px;
// }
</style>
