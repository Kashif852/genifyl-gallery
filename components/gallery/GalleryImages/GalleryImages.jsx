import React from 'react'
import Image from 'next/image'
function GalleryImages({isotopContainer,galleryImages,openModal}) {
  return (
    <div className="col-12">
        <div className="widget-filter-isotope">
            <div ref={isotopContainer} className="grid" style={{ width: "auto" }}>
            {galleryImages?.map((item, index) => (
                <div
                key={item.id}
                className="element-item wow fadeInUp cursor-pointer"
                onClick={() => openModal(item)}
                >
                <div className="box-image">
                    <Image
                    style={{ borderRadius: "15px" }}
                    src={item.generated_image_url || item}
                    width={410}
                    height={380}
                    // alt={item.prompt}
                    priority={index < 4} // Prioritize loading first 3 images
                    />
                    <h4>
                    <a>{index + 1}</a>
                    </h4>
                    <div className="text-xs text-gray-600 mt-2" >
                    {/* <p style={{color: "#1a237e"}}>Created: {new Date(item.created_at).toLocaleDateString()}</p> */}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default GalleryImages