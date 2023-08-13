import { MainSliderData } from './types';

import sliderImg1 from '../../assets/images/main-slider/slider-01.png';
import sliderImg2 from '../../assets/images/main-slider/slider-02-video-call.png';
import sliderImg3 from '../../assets/images/main-slider/slider-03-kempa.png';
import sliderImg4 from '../../assets/images/main-slider/slider-04.png';

export const productsToSlide: MainSliderData[] = [
  {
    id: 1,
    title: 'Takamine',
    content: 'винтажная 12 струнная GJ72CE - 12BSB',
    imageSrc: sliderImg1,
  },
  {
    id: 2,
    title: 'Видео звонок в магазин',
    content:
      'Эта фунция помогает увидеть и услышать инструмент в реальном времени, что заметно упрощает выбор',
    imageSrc: sliderImg2,
  },
  {
    id: 3,
    title: 'Отстройка каждого инструмента',
    content: 'Наши мастера отстраивают каждый инструмент перед отправкой',
    imageSrc: sliderImg3,
  },
  {
    id: 4,
    title: 'Акустическая гитара Kepma G1',
    content: 'Инструмент из премиальной линейки G1',
    imageSrc: sliderImg4,
  },
];
