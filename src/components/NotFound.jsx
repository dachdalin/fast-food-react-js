import React from 'react'

import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
     <section className=''>
        <div className="container d-flex flex-column align-items-center justify-content-center min-hight-200">

            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
                <p>
                    Go back to the <Link to="/">Home page</Link>.
                </p>
        </div>
     </section>
    </>
  )
}

export default NotFound