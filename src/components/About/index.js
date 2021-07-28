import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
   return (
      <section className="my-5">
         <h1 id="about">Who am I?</h1>
         <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
         <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam dapibus in posuere cubilia finibus. Amagna phasellus primis mus finibus. Dignissim lectus 
            parturient tempor blandit sollicitudin parturient. Volutpat morbi duis auctor magnis per praesent proin. Fusce torquent eros placerat netus arcu. 
            Volutpat donec et consectetur sapien erat praesent nam.</p>
      </section>
   );
}

export default About;