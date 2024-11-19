import { FunctionComponent } from "react";
import "./Content.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={`content2 ${className}`}>
      <div className="about-content">
        <div className="about-header">
          <h3 className="about-us13">About us</h3>
        </div>
        <div className="about-us14">
          <b className="explore-petworld-">
            Explore PetWorld - Your Destination to Buy and Sell Pets Online in
            Vietnam
          </b>
          <div className="about-body">
            <div className="at-petworld-our-container">
              <p className="at-petworld-our">
                At PetWorld, our goal is to create a secure and trustworthy
                platform for people looking to buy, sell, adopt, or rehome pets.
                As a dedicated website to sell pets online in Vietnam, we offer
                a safe space for pet sellers to list their furry friends for
                sale and for buyers to browse a wide range of pets such as dogs
                for sale, kittens for sale, puppies for sale, staffy for sale,
                pups for sale, budgies for sale, and many more.
              </p>
              <p className="we-take-the">
                We take the safety and welfare of animals seriously, which is
                why we have established guidelines and safety advice in place
                for both buyers and sellers. Whether you're buying or selling a
                pet on our website, you can rest assured that you're doing so in
                a secure environment.
              </p>
              <p className="our-site-is">
                Our site is easy to navigate, making it simple for buyers to
                find the perfect pet for their lifestyle and for sellers to list
                their pets for sale. Our goal is to make the process of buying
                and selling pets online as smooth and hassle-free as possible,
                while also ensuring that the welfare of the pets remains a top
                priority.
              </p>
              <p className="if-youre-looking">
                If you're looking to buy or sell a pet online, PetWorld is the
                site for you. Visit our site today to browse our listings or to
                list your own pets for sale.
              </p>
            </div>
            <div className="pawprint-row">
              <div className="pawprint-1-parent">
                <img
                  className="pawprint-1-icon13"
                  alt=""
                  src="/pawprint-1-11@2x.png"
                />
                <img
                  className="pawprint-2-icon3"
                  loading="lazy"
                  alt=""
                  src="/pawprint-1-11@2x.png"
                />
                <img
                  className="pawprint-3-icon"
                  loading="lazy"
                  alt=""
                  src="/pawprint-1-11@2x.png"
                />
                <img
                  className="pawprint-4-icon"
                  loading="lazy"
                  alt=""
                  src="/pawprint-1-11@2x.png"
                />
                <img
                  className="pawprint-5-icon"
                  loading="lazy"
                  alt=""
                  src="/pawprint-1-11@2x.png"
                />
                <img
                  className="pawprint-6-icon"
                  loading="lazy"
                  alt=""
                  src="/pawprint-1-11@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
