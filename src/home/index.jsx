import React from "react";
import "./home.scss";
import Footer from "../footerpg"

import slogo from "../ximg/logo2.svg";
import connect from "../ximg/connect.svg";
import location from "../ximg/location.svg";
import idea from "../ximg/idea.svg";
import light from "../ximg/light.svg"
import img1 from "../ximg/icon1.svg";
import img2 from "../ximg/icon2.svg";
import img3 from "../ximg/icon3.svg";
import img4 from "../ximg/icon4.svg";

function Home() {
    return (
        <div className="home">
            <div className="homebg">
                <div className="bigcentertext">
                    One platform to connect, collaborate, educate and build your startup.
                </div>
                <div className="smallgap">
                    <div className="midcentertext">
                        Designed by entrepreneurs for entrepreneurs
                    </div>
                    <div className="smallcentertext">
                        To connect you with CoFounders, adivsors, mentors, investors and innovators.
                    </div>
                </div>
                <button className="findco">Find me a co-founder</button>
                <div className="lower">
                    <img src={slogo} width="20px" className="logo2" />
                    Need support? Help center
                </div>
            </div>

            <div className="three">
                <div className="threecard">
                    <div className="head">Find a co-founder</div>
                    <div className="subhead">Find the perfect co-founder based on interests, skills, and location and start your Business</div>
                </div>
                <div className="threecard">
                    <div className="head">Find a investor</div>
                    <div className="subhead">Find the perfect investor based oninterests, skills, and location</div>
                </div>
                <div className="threecard">
                    <div className="head">Boost your startup</div>
                    <div className="subhead">Learn how to pitch and find investors for your Startup.</div>
                </div>
            </div>

            <div className="elevatorBox">
                <div className="elevatorleft">
                    <div className="headelevator">Elevator</div>
                    <div className="subelevator">Make a short video to advertise your idea And find the perfect co-founder & investor based on interests, skills, and location and start your Business</div>
                </div>
                <div className="elevatorright">
                    <div className="headelevator">Redy to drive in?</div>
                    <button className="buttonelevator">Sign up for free</button>
                </div>
            </div>

            <div className="cofounder">
                <button>CO-FOUNDER</button>
                <div className="cofounderhead">Our platform is here to make your co-founder search as easy and effective as possible.</div>
                <div className="cofoundersub">We've built our platform and search algorithm to make finding a match as easy as possible. Our intuitive messaging system provides quick and easy communication amongst other co-founders and our filters allow you to easily narrow down the type of co-founder you're after.</div>
                <div className="cofoundercardbox">

                    <div className="cofoundercard">

                        <div className="cocardtop">
                            <div className="designerbtn">Designer</div>
                            <div className="connect">
                                <img src={connect}></img><div className="connectbtn">Connect</div>
                            </div>
                        </div>

                        <div className="cofounderbottom">
                            <div className="cofounderdetails">
                                <div className="cofounderdp"></div>
                                <div className="cofoundername">Ben Walter <div className="underline"></div></div>
                            </div>
                            <div className="locationandidea">
                                <div className="location">
                                    <img src={location} />
                                    UK, London
                                </div>
                                <div className="idea">
                                    <img src={idea} />
                                    Has an idea for a startup
                                </div>
                            </div>
                            <div className="cofounderidea">
                                <div className="cofounderideahead">Ben's idea:</div>
                                <div className="cofounderideasub">Finished MVP for a new social media app for the post-covid world. Looking for a financewhizz and CF...</div>
                            </div>
                            <div className="cofounderideabutton">View Profile</div>
                        </div>
                    </div>
                    
                    <div className="cofoundercard">

                        <div className="cocardtop">
                            <div className="designerbtn">Designer</div>
                            <div className="connect">
                                <img src={connect}></img><div className="connectbtn">Connect</div>
                            </div>
                        </div>

                        <div className="cofounderbottom">
                            <div className="cofounderdetails">
                                <div className="cofounderdp"></div>
                                <div className="cofoundername">Ben Walter <div className="underline"></div></div>
                            </div>
                            <div className="locationandidea">
                                <div className="location">
                                    <img src={location} />
                                    UK, London
                                </div>
                                <div className="idea">
                                    <img src={idea} />
                                    Has an idea for a startup
                                </div>
                            </div>
                            <div className="cofounderidea">
                                <div className="cofounderideahead">Ben's idea:</div>
                                <div className="cofounderideasub">Finished MVP for a new social media app for the post-covid world. Looking for a financewhizz and CF...</div>
                            </div>
                            <div className="cofounderideabutton">View Profile</div>
                        </div>
                    </div>

                    <div className="cofoundercard">

                        <div className="cocardtop">
                            <div className="designerbtn">Designer</div>
                            <div className="connect">
                                <img src={connect}></img><div className="connectbtn">Connect</div>
                            </div>
                        </div>

                        <div className="cofounderbottom">
                            <div className="cofounderdetails">
                                <div className="cofounderdp"></div>
                                <div className="cofoundername">Ben Walter <div className="underline"></div></div>
                            </div>
                            <div className="locationandidea">
                                <div className="location">
                                    <img src={location} />
                                    UK, London
                                </div>
                                <div className="idea">
                                    <img src={idea} />
                                    Has an idea for a startup
                                </div>
                            </div>
                            <div className="cofounderidea">
                                <div className="cofounderideahead">Ben's idea:</div>
                                <div className="cofounderideasub">Finished MVP for a new social media app for the post-covid world. Looking for a financewhizz and CF...</div>
                            </div>
                            <div className="cofounderideabutton">View Profile</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="connectpg">
                <button>Connect</button>
                <div className="connecthead">Find like-minded people</div>
                <div className="connectsub">From advisors, investors, mentors, entrepreneurs, CoFounders provides you with multiple solutions to find the perfect fit for your startup.</div>
                
                <div className="connectbox">
                <div className="connectleft">
                    <div className="connectleftbox">
                        <div className="left">
                            <img src={light} />
                        </div>
                        <div className="right">
                            <div className="righthead">Diverse crowd</div>
                            <div className="rightsub">From mentors, investors, entrepreneurs, locations and skillsets. Find the perfect team member, co-founder, or investor that fit your startup needs.</div>
                        </div>
                    </div>
                    <div className="connectleftbox">
                        <div className="left">
                            <img src={light} />
                        </div>
                        <div className="right">
                            <div className="righthead">Diverse crowd</div>
                            <div className="rightsub">From mentors, investors, entrepreneurs, locations and skillsets. Find the perfect team member, co-founder, or investor that fit your startup needs.</div>
                        </div>
                    </div>
                    <div className="connectleftbox">
                        <div className="left">
                            <img src={light} />
                        </div>
                        <div className="rightnotborder">
                            <div className="righthead">Diverse crowd</div>
                            <div className="rightsub">From mentors, investors, entrepreneurs, locations and skillsets. Find the perfect team member, co-founder, or investor that fit your startup needs.</div>
                        </div>
                    </div>
                </div>

                <div className="connectright"></div>
                </div>
                
            </div>

            <div className="background5"></div>

            <div className="collaborate">
                <div className="collaborateleft">
                    <button>Collaborate</button>
                    <div className="collaboratehead">Why partner with a co-founder?</div>
                    <div className="collaboratesub">Get access to hundreds of thousands of potential co-founders, teammates, and advisors on the world's largest startup platform.</div>

                </div>
                <div className="collaborateright">
                    <div className="collaboraterightcard">
                        <img src={img1} />
                        <div className="collaboraterightcardhead">Mitigate risk for investors</div>
                        <div className="collaboraterightcardsub">Having a company and investment rely on a single founder flags numerous potential issues for investors.</div>
                    </div>
                    <div className="collaboraterightcard">
                        <img src={img2} />
                        <div className="collaboraterightcardhead">Mitigate risk for investors</div>
                        <div className="collaboraterightcardsub">Having a company and investment rely on a single founder flags numerous potential issues for investors.</div>
                    </div>
                    <div className="collaboraterightcard">
                        <img src={img3} />
                        <div className="collaboraterightcardhead">Mitigate risk for investors</div>
                        <div className="collaboraterightcardsub">Having a company and investment rely on a single founder flags numerous potential issues for investors.</div>
                    </div>
                    <div className="collaboraterightcard">
                        <img src={img4} />
                        <div className="collaboraterightcardhead">Mitigate risk for investors</div>
                        <div className="collaboraterightcardsub">Having a company and investment rely on a single founder flags numerous potential issues for investors.</div>
                    </div>
                </div>
            </div>

            <div className="background7">
                <div className="left"></div>
                <div className="right">
                    <button>LEARNING</button>
                    <div className="bg7head">Turbocharge your Startup</div>
                    <div className="bg7sub">
                        <div className="pointhead">Curated programs and courses to help you expand your startup knowledge from zero to one.</div>
                        <div className="points">Foundational Knowledge</div>
                        <div className="points">Own Startups</div>
                        <div className="points">Learning center with over 100 hours of courses to help you build your startup</div>
                        <div className="points">Audible mentoring from the worlds best business minds</div>
                    </div>
                </div>
            </div>

            <div className="lastpage">
                <div className="lastleft">
                    <div className="upper">Ready to dive in?</div>
                    <div className="lower">Join the community</div>
                </div>
                <button>Sign up for free</button>
            </div>

            <Footer></Footer>
            
        </div>
    );
    
}

export default Home;