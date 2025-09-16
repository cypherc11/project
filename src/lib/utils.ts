import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SectionProps {
  onSelect?: (content: string) => void;
};

export const handleClick = (onSelect) => {
  const Click = (content: string) => {
    if (onSelect) {
      onSelect(content);
    }
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

};



               

           

            

