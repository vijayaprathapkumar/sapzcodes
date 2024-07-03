/* eslint-disable @next/next/no-img-element */
import { PiWhatsappLogoThin } from "react-icons/pi";
import {
  AddressContent,
  ContactSection,
  ContactWrapper,
  ImageSection,
  LocationSection,
} from "./Contact.styled";

const ContactComponent = () => {
  return (
    <ContactWrapper className="layout-gap">
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
            <img src="/images/MapPin.png" alt="MapPin-Img" className="map" />
            <p>
            Sapzcodes Consultancy Private Limited,
            3rd Floor, 311, Sanganoor Main Road, 
            Ganapathy, Coimbatore, TamilNadu, 
            641006.
            </p>
          </div>
        </LocationSection>
        <ContactSection>
          <h3>Reach out to us at</h3>
          <div className="envelope-part">
            <a href="mailto:hr@sapzcodes.com">
              <img
                src="/images/Envelope.png"
                alt="Envelope-Img"
                className="envelope"
              />
              <p>hr@sapzcodes.com</p>
            </a>
          </div>
          <div className="part-sec">
            <a href="tel:+9500272842">
              <img src="/images/Phone.png" alt="Phone-Img" className="phone" />
              <p>+91 9500272842</p>
            </a>
            <a href="https://wa.me/9500272842" target='_blank'>
              <PiWhatsappLogoThin className="whatsapp-icon" />
              <p>+91 9500272842</p>
            </a>
          </div>
        </ContactSection>
      </AddressContent>
      <ImageSection>
        <img
          src="/images/contact.png"
          alt="Conatct-image"
          className="contact-image"
        />
      </ImageSection>
    </ContactWrapper>
  );
};

export default ContactComponent;
