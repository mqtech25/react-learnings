let NavBar = () => {
    return (
      
         <div className="navBar py-2">
                <div className='container'>
                    <div className="row">
                        <div className='col-md-12 text-center'> 
                        <img src={'./mqtech-logo.png'} className="logoImg" alt="logo" />
                        </div>
                    </div>
                </div>
        </div>
    )
}

let MainContent =()=>{
    return(
        <div className="container">
            <div className='row justify-content-center'>
                <div className='col-md-6 text-center '>
                        <h1 className="fs-1 mt-5">My First React Learning Doc</h1>
                </div>
            </div>
        </div>
    )
}

let Footer = ()=>{
    return(
        <div className="footer position-absolute bottom-0 w-100 bg-dark">
            <div className="container">
                <div className='row'>
                    <div className='col-md-12 text-center'>
                    <p className='text-white p-4 mb-0'>Copyright&copy; <span className='color-primary'>mqtech25</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <>
     <header>
        <NavBar />
     </header>
     <main>
        <MainContent/>
     </main>
     <footer>
        <Footer/>
     </footer>
    </>,
    document.getElementById('root')
);