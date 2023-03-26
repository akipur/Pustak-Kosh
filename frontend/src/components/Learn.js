import React from 'react'
import './Learn.css'
import javascript from '../images/javascript.png';
import java from '../images/java.webp';
import flutter from '../images/flutter.png';
function Learn() {
    return (
        <div>
            <div className="container-fluid py-3">
                <div className="row">
                    <h1 className='text-center'>Learn Page</h1>
                    <hr />
                    <h3 className="text-center">Web Development</h3>
                    <center> <div className="mb-5" style={{ width: '40px', height: '4px', backgroundColor: '#707BFB' }}></div> </center>
                    
                    <div className="col-md-3 mb-3">
                        <div className="book">
                            <div className="cover">
                                <img src="https://trickbugs.com/wp-content/uploads/2017/05/842e9b3892002f6a4e17112232b56491-699x1081.png" alt="" />
                            </div>
                            <div className="details">
                                <h4>HTML Resources</h4>
                                <a href='https://www.youtube.com/watch?v=kUMe1FH4CHE' target="_blank" className='btn btn-danger mb-3 btn-sm'>Videos</a><br />
                                <a href='https://www.dbooks.org/d/5614163748-1679829762-0b298ae8029fe3ee/' className='btn btn-warning mb-3 btn-sm'>Book</a>
                                <a href='https://chat.whatsapp.com/JVKi35LTYbQ31cnjeMd1N1' target='_blank' className='btn btn-success btn-sm mb-3'>Whatsapp Groups</a>
                                <a href='https://telegram.me/s/FrontEndDvops' target='_blank' className='btn btn-primary btn-sm'>Telegram Channels</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="book">
                            <div className="cover">
                                <img src="https://images-eu.ssl-images-amazon.com/images/I/414zYx1SEoL.jpg" alt="" />
                            </div>
                            <div className="details">
                                <h4>CSS Resources</h4>
                                <a href='https://www.youtube.com/watch?v=OXGznpKZ_sA' target='_blank' className='btn btn-danger mb-3 btn-sm'>Videos</a><br />
                                <a href='https://www.dbooks.org/d/5614163492-1679829855-b5c391a64447f8a4/' className='btn btn-warning mb-3 btn-sm'>Book</a>
                                <a href='https://chat.whatsapp.com/JVKi35LTYbQ31cnjeMd1N1' target='_blank' className='btn btn-success btn-sm mb-3'>Whatsapp Groups</a>
                                <a href='https://telegram.me/s/FrontEndDvops' target='_blank' className='btn btn-primary btn-sm'>Telegram Channels</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="book">
                            <div className="cover">
                                <img src= {javascript} alt="" />
                            </div>
                            <div className="details">
                                <h4>Javascript Resources</h4>
                                <a href='https://www.youtube.com/watch?v=jS4aFq5-91M' target='_blank' className='btn btn-danger mb-3 btn-sm'>Videos</a><br />
                                <a href='https://www.dbooks.org/d/1593279507-1679829923-dd642e9ddad55118/' className='btn btn-warning mb-3 btn-sm'>Book</a>
                                <a href='https://chat.whatsapp.com/JVKi35LTYbQ31cnjeMd1N1' target='_blank' className='btn btn-success btn-sm mb-3'>Whatsapp Groups</a>
                                <a href='https://telegram.me/s/FrontEndDvops' target='_blank' className='btn btn-primary btn-sm'>Telegram Channels</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="book">
                            <div className="cover">
                                <img src="https://reactjsexample.com/content/images/2019/04/React.jpg" alt="" />
                            </div>
                            <div className="details">
                                <h4>ReactJS Resources</h4>
                                <a href='https://www.youtube.com/watch?v=bMknfKXIFA8' target='_blank' className='btn btn-danger mb-3 btn-sm'>Videos</a><br />
                                <a href='https://www.dbooks.org/d/5591647562-1679829962-0d57f6c1fb01b806/' className='btn btn-warning mb-3 btn-sm'>Book</a>
                                <a href='https://chat.whatsapp.com/JVKi35LTYbQ31cnjeMd1N1' target='_blank' className='btn btn-success btn-sm mb-3'>Whatsapp Groups</a>
                                <a href='https://telegram.me/s/FrontEndDvops' target='_blank' className='btn btn-primary btn-sm'>Telegram Channels</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#717BFB" fill-opacity="1" d="M0,288L1440,96L1440,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#717BFB" fill-opacity="1" d="M0,128L1440,0L1440,0L0,0Z"></path></svg>

            {/* category 2 */}

            <div className="container-fluid">
                <div className="row">
                   
                    <h3 className="text-center">App Development</h3>
                    <center> <div className="mb-5" style={{ width: '40px', height: '4px', backgroundColor: '#707BFB' }}></div> </center>
                    
                    <div className="col-md-3 mb-3">
                        <div className="book">
                            <div className="cover">
                                <img src="https://imgv2-2-f.scribdassets.com/img/document/396240119/original/add221a27e/1591088973?v=1" alt="" />
                            </div>
                            <div className="details">
                                <h4>Android Studio Resources</h4>
                                <a href='https://www.youtube.com/watch?v=kUMe1FH4CHE' target="_blank" className='btn btn-danger mb-3 btn-sm'>Videos</a><br />
                                <a href='https://www.dbooks.org/d/5614163748-1679829762-0b298ae8029fe3ee/' className='btn btn-warning mb-3 btn-sm'>Book</a>
                                <a href='https://chat.whatsapp.com/JVKi35LTYbQ31cnjeMd1N1' target='_blank' className='btn btn-success btn-sm mb-3'>Whatsapp Groups</a>
                                <a href='https://telegram.me/s/FrontEndDvops' target='_blank' className='btn btn-primary btn-sm'>Telegram Channels</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="book">
                            <div className="cover">
                                <img src={java} alt="" />
                            </div>
                            <div className="details">
                                <h4>Java Resources</h4>
                                <a href='https://www.youtube.com/watch?v=OXGznpKZ_sA' target='_blank' className='btn btn-danger mb-3 btn-sm'>Videos</a><br />
                                <a href='https://www.dbooks.org/d/5614163492-1679829855-b5c391a64447f8a4/' className='btn btn-warning mb-3 btn-sm'>Book</a>
                                <a href='https://chat.whatsapp.com/JVKi35LTYbQ31cnjeMd1N1' target='_blank' className='btn btn-success btn-sm mb-3'>Whatsapp Groups</a>
                                <a href='https://telegram.me/s/FrontEndDvops' target='_blank' className='btn btn-primary btn-sm'>Telegram Channels</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="book">
                            <div className="cover">
                                <img src="https://i.thenile.io/r1000/9781484244661.jpg?r=5cf5afa1d87c8" alt="" />
                            </div>
                            <div className="details">
                                <h4>Kotlin Resources</h4>
                                <a href='https://www.youtube.com/watch?v=jS4aFq5-91M' target='_blank' className='btn btn-danger mb-3 btn-sm'>Videos</a><br />
                                <a href='https://www.dbooks.org/d/1593279507-1679829923-dd642e9ddad55118/' className='btn btn-warning mb-3 btn-sm'>Book</a>
                                <a href='https://chat.whatsapp.com/JVKi35LTYbQ31cnjeMd1N1' target='_blank' className='btn btn-success btn-sm mb-3'>Whatsapp Groups</a>
                                <a href='https://telegram.me/s/FrontEndDvops' target='_blank' className='btn btn-primary btn-sm'>Telegram Channels</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="book">
                            <div className="cover">
                                <img src={flutter} alt="" />
                            </div>
                            <div className="details">
                                <h4>Flutter Resources</h4>
                                <a href='https://www.youtube.com/watch?v=bMknfKXIFA8' target='_blank' className='btn btn-danger mb-3 btn-sm'>Videos</a><br />
                                <a href='https://www.dbooks.org/d/5591647562-1679829962-0d57f6c1fb01b806/' className='btn btn-warning mb-3 btn-sm'>Book</a>
                                <a href='https://chat.whatsapp.com/JVKi35LTYbQ31cnjeMd1N1' target='_blank' className='btn btn-success btn-sm mb-3'>Whatsapp Groups</a>
                                <a href='https://telegram.me/s/FrontEndDvops' target='_blank' className='btn btn-primary btn-sm'>Telegram Channels</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Learn