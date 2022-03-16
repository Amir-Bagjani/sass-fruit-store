import React from 'react'

const BlogsSection = () => {
  return (
    <section className='blogs' id='blogs'>

      <h1 className="heading">our <span>blogs</span></h1>

      <div className="box-container">

        <div className="box">
          <img src="image/blog-1.jpg" alt="blog" />
          <div className="content">
            <div className="icons">
              <a href="#"><i className="fas fa-user"></i> by user</a>
              <a href="#"><i className="fas fa-calendr"></i> 1st may, 2020</a>
            </div>
            <h3>fresh and organic vegitables and fruits</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, vel!</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-2.jpg" alt="blog" />
          <div className="content">
            <div className="icons">
              <a href="#"><i className="fas fa-user"></i> by user</a>
              <a href="#"><i className="fas fa-calendr"></i> 1st may, 2020</a>
            </div>
            <h3>fresh and organic vegitables and fruits</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, vel!</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-3.jpg" alt="blog" />
          <div className="content">
            <div className="icons">
              <a href="#"><i className="fas fa-user"></i> by user</a>
              <a href="#"><i className="fas fa-calendr"></i> 1st may, 2020</a>
            </div>
            <h3>fresh and organic vegitables and fruits</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, vel!</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default BlogsSection