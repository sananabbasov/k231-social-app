import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "./components/Header";
import MyRouter from "./router/MyRouter";
import FeedSlider from './components/FeedSlider';


function App() {
  return (
    <div>
      <Header />
      <MyRouter />
    <FeedSlider />
    </div>
  );
}

export default App;
