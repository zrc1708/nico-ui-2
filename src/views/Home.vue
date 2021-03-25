<template>
  <div class="home">
    <!-- <Ni-Magnifier
      link="https://www.bilibili.com/read/cv4976668/"
      :blank="true"
      imgUrl="https://z3.ax1x.com/2021/03/23/6TqdAO.png"
      :imgWidth="400"
      :imgHeight="275"
      :magWidth="150"
      :magHeight="100"
      imgAlt='异度之刃2'
      >
    </Ni-Magnifier>
    <Ni-Magnifier2
      link="https://www.bilibili.com/read/cv4976668/"
      :blank="true"
      imgUrl="https://z3.ax1x.com/2021/03/23/6TqdAO.png"
      :imgWidth="400"
      :imgHeight="275"
      :magWidth="150"
      :magHeight="150"
      imgAlt='异度之刃2'
      >
    </Ni-Magnifier2> -->
    <!-- <Ni-stars
      :num="3"
      :size="30"
      @getStarNum = "getStarNum"
    ></Ni-stars> -->
    <!-- <Ni-Modal
      :show="false"
      :width="400"
      :borderRadius="5"
      headerColor="#007bff"
      headerText="这是model"
      headerTextColor="#fff"
      contentText="妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮妮可妮可妮"
      contentTextColor="#333"
      position="center"
      :btnGroupShow="true"
      confirmText="是"
      cancelText="否"
      @confirm="modalConfirm"
      @close="modalClose"
    ></Ni-Modal> -->
    <div class="container">
      <Ni-Swiper
        :autoplay="true"
        :duration="3000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true">
        <Ni-Swiper-item v-for="(item,index) in imageData" :key="index">
          <img :src="item" alt="">
        </Ni-Swiper-item>
      </Ni-Swiper>
    </div>
  </div>
</template>

<script>
const imageData = [
  'http://p1.music.126.net/tEffBuipaoNCOg3fYtRfZg==/109951165828880631.jpg',
  'http://p1.music.126.net/8YYTsOUkM5XkpQBd1Pqiag==/109951165828795294.jpg',
  'http://p1.music.126.net/v6o5mCbl5BrVSDlaFKve2w==/109951165828854317.jpg',
  'http://p1.music.126.net/Mq6cj6OipHXYewYJFqTG-Q==/109951165828820210.jpg',
  'http://p1.music.126.net/_6sIYOifE1sj_i-xWAg6RA==/109951165828808155.jpg'
]

export default {
  name: 'Home',
  setup(){
    const getStarNum = (num)=>{
      console.log(num)
    }

    const modalConfirm = ()=>{
      console.log('modalconfirm')
    }

    const modalClose = ()=>{
      console.log('modalclose')
    }

    return{
      getStarNum,
      modalConfirm,
      modalClose,
      imageData
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 520px;
  height: 200px;
  margin: 50px auto;
}
</style>
