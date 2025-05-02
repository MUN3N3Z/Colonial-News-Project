import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { GalleryItem } from '../types';

interface ExhibitGalleryProps {
  items: GalleryItem[];
}

function ExhibitGallery({ items }: ExhibitGalleryProps): React.JSX.Element {
  return (
    <div className="py-12">
      <Gallery >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <Item
              key={index}
              original={item.src}
              thumbnail={item.src}
              width={item.width}
              height={item.height}
              alt={item.title}
            >
              {({ ref, open }) => (
                <div 
                  className="flex flex-col cursor-pointer text-center" 
                  ref={ref}
                  onClick={open}
                >
                  <div className="relative mb-4 group">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-normal mb-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-600">{item.description}</p>
                  )}
                </div>
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </div>
  );
}

export default ExhibitGallery;
