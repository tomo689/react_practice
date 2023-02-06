import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' //使いたい機能をインポート
import Apps from './cytoscapes'
import MediaControlCard from './cards'
import { Box } from '@mui/system'


SwiperCore.use([Pagination, Navigation]) 

// カルーセルにする画像のソースをリストにします
// const images = [
//   <Apps/>,
//   <MediaControlCard/>
// ]
const images = [
  "<Apps/>",
  "<MediaControlCard/>"
]

export default function TestCarousel(){
  console.log('呼び出された？')
  return (
    <Box sx={{width:'1000ch', height:'800ch', background:'yellow'}}>
      <Swiper
        slidesPerView={1} //一度に表示するスライドの数
        //mousewheel={true}
        navigation={{prevEl:'.prevRef', nextEl:'.nextRef'}} //スライドを前後させるためのボタン、スライドの左右にある
        //direction='vertical'
      >
        {/* {images.map((rfc: string, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              {rfc}
            </SwiperSlide>
          )
        })} */}
        <SwiperSlide id='prevRef'>string</SwiperSlide>
        <div className='prevRef'><img src='../public/static/favicon.ico'/></div>
        <SwiperSlide id='nextRef'>number</SwiperSlide>
        <div className='nextRef' style={{height:"10ch", width:"20ch", color:'white', background:'blue'}}>Next</div>
      </Swiper>
    </Box>
  )
}