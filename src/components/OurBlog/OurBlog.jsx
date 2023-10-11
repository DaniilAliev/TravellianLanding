import './OurBlog.modules.scss';
import BlogImage from '../../../public/BlogImage.jpeg';
import Arrow from '../../../public/ArrowOrange.svg'

const OurBlog = () => 
  <section>
    <div className='blog-container'>
      <div className='headers'>
        <h1>Our Blog</h1>
        <div className='orange-border'></div>
        <p>An insight the incredible experience in the world</p>
      </div>

      <div className='text-container'>
        <div className='image'>
          <img src={BlogImage} alt="Blog Image" />
        </div>
        <article>
          <h1>Beautiful Italy <br/>
              Let’s travel</h1>
          <p>But I must explain to you how all this mistaken idea of denouncing 
            pleasure and praising pain was born and I will give you a complete 
            account of the system and expound the actual teachings of the great 
            explorer of the truth, the master- builder of human happiness. No one 
            rejects, dislike, or avoids plasure itself, because it is pleasure, 
            but because those who do not know how to pursue pleasure rationally 
            encounter consequences that are extremly painful. Nor again is there 
            anyone who loves or pursues.</p>
            <div>
              <a href="#">
                <p>Read more</p>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
        </article>
      </div>
    </div>
  </section>

export default OurBlog;