import React from 'react'

const FeatureSection = () => {
  return (
    <section className='features' id='features'>

        <h1 className="heading">our <span>features</span></h1>

        <div className="box-container">

            <div className="box">
                <img src="image/feature-img-1.png" alt="feature" />
                <h3>fresh and organic</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat!</p>
                <a href="#" className="btn">read more</a>
            </div>
            <div className="box">
                <img src="image/feature-img-2.png" alt="feature" />
                <h3>fresh delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat!</p>
                <a href="#" className="btn">read more</a>
            </div>
            <div className="box">
                <img src="image/feature-img-3.png" alt="feature" />
                <h3>easy payments</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat!</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

    </section>
  )
}

export default FeatureSection