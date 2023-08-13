import { StaticImageData } from 'next/image';
import type { MouseEvent } from 'react';

export interface MainSliderData {
  id: number;
  title: string;
  content: string;
  imageSrc: StaticImageData;
}

export interface ArrowProps {
  disabled: boolean;
  left: boolean;
  onClick: (e: MouseEvent) => void;
}