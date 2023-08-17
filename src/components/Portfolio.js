import React, { Component } from 'react';
export default class Porfolio extends Component {
  handleLiveButtonClick = (link) => {
    window.open(link, '_blank');
  };

  handleSourceButtonClick = (link) => {
    window.open(link, '_blank');
  };
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    {/* <a href="#modal-01"> */}
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <div className='btn'>
                          <button onClick={() => this.handleLiveButtonClick(item.seelive)} className="small-button">
        See Live
      </button>
      <button onClick={() => this.handleSourceButtonClick(item.seesource)} className="small-button">
        See Source
      </button>
      </div>
                        </div>
                      </div>
                    {/* </a> */}
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}