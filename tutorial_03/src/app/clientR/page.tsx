"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-context';

export default function ImageSlider() {

    const theme = useTheme();

  const settings = {
    dots: true,
  };
  return (
    <>
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/8363692/pexels-photo-8363692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/19582810/pexels-photo-19582810/free-photo-of-a-woman-lying-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/8371407/pexels-photo-8371407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/8363664/pexels-photo-8363664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
      </Slider>
    </div>
    <div>
        <h1 style={{color:theme.colors.primary}} >Theme Context : Primary Color</h1>
        <h1 style={{color:theme.colors.secondary}} >Theme Context : Secondary Color</h1>
    </div>
    </>
  );
}