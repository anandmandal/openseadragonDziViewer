import React, { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';

const imageArray = [
  {
    Image: {
      xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      Format: 'jpeg',
      Overlap: '1',
      Size: { Height: '6000', Width: '4000' },
      TileSize: '254',
      Url: 'http://127.0.0.1:8080/image_files/'
    }
  },
  {
    Image: {
      xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      Format: 'jpeg',
      Overlap: '1',
      Size: { Height: '6000', Width: '4000' },
      TileSize: '254',
      Url: 'http://127.0.0.1:8080/image_files/'
    }
  },
  {
    Image: {
      xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      Format: 'jpeg',
      Overlap: '1',
      Size: { Height: '6000', Width: '4000' },
      TileSize: '254',
      Url: 'http://127.0.0.1:8080/image_files/'
    }
  },
  {
    Image: {
      xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      Format: 'jpeg',
      Overlap: '1',
      Size: { Height: '6000', Width: '4000' },
      TileSize: '254',
      Url: 'http://127.0.0.1:8080/image_files/'
    }
  },

];
const DZIViewer = ({ dziUrl }) => {
  const viewerRef = useRef(null);
  useEffect(() => {
    const viewer = OpenSeadragon({
      element: viewerRef.current,
      prefixUrl: "../../openseadragon/images/",
      showNavigator: true,
      // tileSources:{
      //   Image: {
      //     xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      //     Format: 'jpeg',
      //     Overlap: '1',
      //     Size: { Height: '6000', Width: '4000' },
      //     TileSize: '254',
      //     Url: '../../image_files/'
      //   },
      // }
      collectionMode:true,
      collectionRows:2,
      collectionColumns:2,
      tileSources:imageArray
    });

    // viewer.addHandler("tile-loaded", function (event) {
    //   const tiledImage = event.eventSource; 
    //   const viewport = viewer.viewport; 

    //   const imageBounds = tiledImage.tileSources.getBounds();
    //   const contentSize = viewport.getContentSize();
    //   const zoom = viewport.getZoom();

    //   const targetBounds = {
    //     x: imageBounds.x + (imageBounds.width / 2),
    //     y: imageBounds.y + (imageBounds.height / 2),
    //     width: contentSize.x / zoom,
    //     height: contentSize.y / zoom,
    //   };

    //   viewport.fitBoundsWithConstraints(targetBounds);
    // });
    return () => {
      viewer.destroy();
    };
  }, [dziUrl]);

  return <div ref={viewerRef} style={{ width: '100%', height: '500px' }} />;  
};

export default DZIViewer;
