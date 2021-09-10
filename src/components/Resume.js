import React, { Component } from 'react';
import SkillBar from 'react-skillbars';
const skills = [
  {type: "Spark", level: 90, "color": {
      "bar": "#2c3e50",
      "title": {
        "text": "#fff",
        "background": "#2c3e50"
      }
    }},
  {type: "Scala", level: 90, "color": {
      "bar": "#2c3e50",
      "title": {
        "text": "#fff",
        "background": "#2c3e50"
      }
    }},
  {type: "Hadoop", level: 85, "color": {
      "bar": "#2c3e50",
      "title": {
        "text": "#fff",
        "background": "#2c3e50"
      }
    }},
  {type: "Hive", level: 75, "color": {
      "bar": "#2c3e50",
      "title": {
        "text": "#fff",
        "background": "#2c3e50"
      }
    }},
  {type: "Impala", level: 80, "color": {
      "bar": "#2c3e50",
      "title": {
        "text": "#fff",
        "background": "#2c3e50"
      }
    }},
  {type: "Python", level: 90,"color": {
      "bar": "#2c3e50",
      "title": {
        "text": "#fff",
        "background": "#2c3e50"
      }
    }},
    {type: "ML", level: 50, "color": {
        "bar": "#2c3e50",
        "title": {
          "text": "#fff",
          "background": "#2c3e50"
        }
      }},
  {type: "ReactJs", level: 60, "color": {
      "bar": "#2c3e50",
      "title": {
        "text": "#fff",
        "background": "#2c3e50"
      }
    }},
    {type: "JavaScript", level: 70, "color": {
        "bar": "#2c3e50",
        "title": {
          "text": "#fff",
          "background": "#2c3e50"
        }
      }},
      {type: "SQL", level: 85, "color": {
          "bar": "#2c3e50",
          "title": {
            "text": "#fff",
            "background": "#2c3e50"
          }
        }}

];

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}

                          </p>
                          <p>
                          {item.Achievements2}
                          </p>
                          <p>
                          {item.Achievements3}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

            <SkillBar skills={skills}/>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}
