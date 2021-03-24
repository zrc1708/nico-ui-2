import {getStyle} from '../utils/tools'

export default {
    mounted(el){
        const oImgWrap = el
        const oMagWrap = oImgWrap.querySelector('.mag-wrap')
        const oMagImg = oImgWrap.querySelector('.mag-img')
        const imgWidth = getStyle(oImgWrap,'width')
        const imgHeight = getStyle(oImgWrap,'height')
        const magWidth = getStyle(oMagWrap,'width')
        const magHeight = getStyle(oMagWrap,'height')
        const imgX = oImgWrap.getBoundingClientRect().left
        const imgY = oImgWrap.getBoundingClientRect().top


        const init = ()=>{
            bindEvent()
        }
        
        function bindEvent(){
            oImgWrap.addEventListener('mouseover',(e)=>{
                oMagWrap.className += ' show'
                showMag(getXY(e).x,getXY(e).y)
                document.addEventListener('mousemove',handleMouseMove)
            })

            oImgWrap.addEventListener('mouseout',handleMouseOut)
        }

        function handleMouseMove(e){
            const {x,y,mouseX,mouseY} = getXY(e)
            showMag(x,y,mouseX,mouseY)
        }

        function handleMouseOut(){
            oMagWrap.className = 'mag-wrap'
            document.removeEventListener('mousemove',handleMouseMove)
        }

        function showMag(x,y,mouseX,mouseY){
            oMagWrap.style.left = x +'px'
            oMagWrap.style.top = y +'px'
            oMagImg.style.left = -x +'px'
            oMagImg.style.top = -y +'px'

            if(mouseX<0||mouseY<0||mouseX>imgWidth||mouseY>imgHeight){
                oMagWrap.className = 'mag-wrap'
                document.removeEventListener('mousemove',handleMouseMove)
            }
        }

        function getXY(e){
            return {
                x:e.pageX - imgX - magWidth /2,
                y:e.pageY - imgY - magHeight /2,
                mouseX:e.pageX - imgX,
                mouseY:e.pageY - imgY
            }
        }

        init()
    }
}