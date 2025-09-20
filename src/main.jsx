import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { ImageGalleryLooping } from './Image_Gallery/ImageGalleryLooping.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ImageGalleryLooping/>
 
  </StrictMode>,
)
