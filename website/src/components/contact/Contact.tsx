/* eslint-disable @next/next/no-img-element */
import { AddressContent, ContactSection, ContactWrapper, ImageSection,LocationSection } from "./Contact.styled";

const ContactComponent = () => {
  return (
    <ContactWrapper>
      <AddressContent>
        <h5 className="conct">CONTACT US</h5>
        <h2 className="get-cont">Get in touch with us.</h2>
        <p className="paragraph">
          We help you to grow your business and offer some of the best services
          provided so that your business can grow in the future
        </p>
        <hr />
        <LocationSection>
          <h3>Find us at</h3>
          <div className="part-one">
          <img src="/images/MapPin.png" alt="MapPin-Img" className="map"/>
          <p>
            3rd Floor, 311 - Sanganoor main road. Ganapathy, Coimbatore - 641006
          </p>
          </div>
        </LocationSection>
        <ContactSection>
          <h3>Reach out to us at</h3>
          <div className="part-sec">
          <img src="/images/Envelope.png" alt="Envelope-Img" className="envelope"/>
          <p>contact@homelun.</p>
          <img src="/images/Phone.png" alt="Phone-Img" className="phone"/>
          <p>+1 234 567 890</p>
          </div>
        </ContactSection>
      </AddressContent>
      <ImageSection>
       <img src="/images/contact.png" alt="Conatct-image" className="contact-image"/>
      </ImageSection>
    </ContactWrapper>
  );
};

export default ContactComponent;
