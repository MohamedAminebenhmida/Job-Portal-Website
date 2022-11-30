import React from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'
function PostCard() {
    
  return (
    <div>
        <link to="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link to="http://127.0.0.1:8000/css/bootstrap.min.css" rel="stylesheet" />
        <div className="tr-job-posted section-padding">
          <div className="container">
            <div className="job-tab text-center">
              <ul className="nav nav-tabs justify-content-center" role="tablist">
                <li role="presentation" className="active">
                  <Link className="active show" to="#hot-jobs" aria-controls="hot-jobs" role="tab" data-toggle="tab" aria-selected="true">Hot Jobs</Link>
                </li>
                <li role="presentation"><Link to="#recent-jobs" aria-controls="recent-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Recent Jobs</Link></li>
                <li role="presentation"><Link to="#popular-jobs" aria-controls="popular-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Popular Jobs</Link></li>
              </ul>
              <div className="tab-content text-left">
                <div role="tabpanel" className="tab-pane fade active show" id="hot-jobs">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <Link to="#" className="btn btn-primary">Full Time</Link>
                            <span className="tr-title">
                              <Link to="#">Project Manager</Link>
                              <span><Link to="#">Dig File</Link></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><Link to="/"><i className="far far-heart-o" aria-hidden="true" /></Link></li>
                              <li><Link to="/"><i className="far far-expand" aria-hidden="true" /></Link></li>
                              <li><Link to="/"><i className="far far-bookmark-o" aria-hidden="true" /></Link></li>
                              <li><Link to="/"><i className="far far-long-arrow-right" aria-hidden="true" /></Link></li>
                            </ul>
                          </div>										
                        </div>	
                        <div className="job-info">
									<div className="company-logo">
										<img src="https://via.placeholder.com/300x100/7B68EE/000000" alt="images" className="img-fluid"/>
									</div>	
                                    </div>
                                    <span className="tr-title">
										<Link to="#">Project Manager</Link>
										<span><Link to="#">Dig File</Link></span>
									</span>
									<ul className="tr-list job-meta">
										<li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
										<li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
										<li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
									</ul>
									<div className="time">
										<Link to="#"><span>Full Time</span></Link>
										<span className="pull-right">Posted 23 hours ago</span>
									</div>
                        </div>
                      </div>
                    </div>
                  </div>{/* /.row */}	
                </div>{/* /.tab-pane */}
              </div>				
            </div>{/* /.job-tab */}			
          </div>{/* /.container */}
        </div>
  )
}

export default PostCard