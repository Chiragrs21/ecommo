import React from 'react'
import '../Home/Home.css'
import shoe from '../Home/shoe.jpg'

function Home() {

    let count = 1;
    const showalert = () => {
        alert(`item added to cart successfully ${count}`)
        count++;
    }
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="image-card">
                        <img src={shoe} className='image' alt='' />
                    </div>
                    <p className='title'>
                        NICKE Shoe
                    </p>
                    <p>
                        <strong>"It is the world's largest supplier of athletic <br />shoes with Leather bluezy"</strong>
                    </p>
                    <p>
                        Price: 30$
                    </p>
                    <button className='btn' onClick={showalert}>Add to Cart</button>
                </div>
                <div className="card">
                    <div className="image-card">
                        <img src={shoe} className='image' alt='' />
                    </div>
                    <p className='title'>
                        NICKE Shoe
                    </p>
                    <p>
                        <strong>"It is the world's largest supplier of athletic <br />shoes with black panther"</strong>
                    </p>
                    <p>
                        Price: 30$
                    </p>
                    <button className='btn' onClick={showalert}>Add to Cart</button>
                </div>
                <div className="card">
                    <div className="image-card">
                        <img src={shoe} className='image' alt='' />
                    </div>
                    <p className='title'>
                        NICKE Shoe
                    </p>
                    <p>
                        <strong>"It is the world's largest supplier of athletic <br />shoes with gold ribbon"</strong>
                    </p>
                    <p>
                        Price: 30$
                    </p>
                    <button className='btn' onClick={showalert}>Add to Cart</button>
                </div>
                <div className="card">
                    <div className="image-card">
                        <img src={shoe} className='image' alt='' />
                    </div>
                    <p className='title'>
                        NICKE Shoe
                    </p>
                    <p>
                        <strong>"It is the world's largest supplier of athletic <br />shoes"</strong>
                    </p>
                    <p>
                        Price: 30$
                    </p>
                    <button className='btn' onClick={showalert}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
