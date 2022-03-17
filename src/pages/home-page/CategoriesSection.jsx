import React from 'react'

const CategoriesSection = () => {
  return (
    <section id='categories' className='categories'>

        <h1 className="heading">product <span>categories</span></h1>

         <div className="box-container">

            <div className="box">
                <img src="image/cat-1.png" alt="category" />
                <h3>vegtables</h3>
                <p>upto 45% off</p>
                <a href="#" className="btn">shop now</a>
            </div>
            <div className="box">
                <img src="image/cat-2.png" alt="category" />
                <h3>fresh fruits</h3>
                <p>upto 45% off</p>
                <a href="#" className="btn">shop now</a>
            </div>
            <div className="box">
                <img src="image/cat-3.png" alt="category" />
                <h3>dairy products</h3>
                <p>upto 45% off</p>
                <a href="#" className="btn">shop now</a>
            </div>
            <div className="box">
                <img src="image/cat-4.png" alt="category" />
                <h3>fresh meat</h3>
                <p>upto 45% off</p>
                <a href="#" className="btn">shop now</a>
            </div>

         </div>

    </section>
  )
}

export default CategoriesSection