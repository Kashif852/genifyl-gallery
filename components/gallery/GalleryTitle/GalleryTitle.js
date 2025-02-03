import React from 'react'

function GalleryTitle({title, titleHighlight, isTitle}) {
  return (
    <>
        {
            isTitle ? <div className="col-12">
            <div className="heading-section wow fadeInUp style-2 text-center" >
                <div className="main-title" style={{color: "white"}}>
                Your AI <span className="animation-text tf-color-green">Creations</span>
                </div>
            </div>
        </div> : <></>
        }
    </>
  )
}

export default GalleryTitle