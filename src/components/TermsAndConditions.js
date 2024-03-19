import React, { useEffect } from "react";
import { Metadata } from "../layout/MetaData";
import { Helmet } from "react-helmet";
import Navbartest from "./Navbartest";
import Footertest from "./Footertest";
import Navbar from "./Navbar";

function TermsAndConditions() {
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" style={{ marginTop: "60px" }}>
      <Navbar />
      <Helmet>
        <title>
          Arnxt - Terms and Conditions | Augmented Reality | Metaverse{" "}
        </title>
        <meta
          name="description"
          content="Please read our terms and conditions carefully before using this website. "
        />
        <meta
          name="keywords"
          content="
          
          Augmented Reality, Augmented Reality in India, Augmented Reality Technology, Augmented reality product, Augmented reality app, Augmented reality apps, Augmented reality product for business, Augmented reality products for business, Augmented reality product for businesses, Augmented reality products for businesses, Augmented reality apps for android, Augmented reality app for android, Augmented reality apps for ios, Augmented reality app for ios, Augmented reality market place, Metaverse, metaverse technologies, ar technology, AR Technology, AR Technology in India, augmented realty app in India, Augmented Reality Technology App, Augmented Reality Technology App in India, augmented reality, metaverse technologies, metaverse technology, experiential commerce platform, Virtual Realty, Virtual Technology, Festive Metaverse Universe
          
          
          
          "
        />
      </Helmet>

      <div className="container text-start">
        {/* heading start */}
        <div className="">
          <h3 className="text-center">Terms and Conditions</h3>
        </div>
        {/* heading end */}
        {/* description start */}
        <div name="description" className="my-5 container-fluid">
          <b>
            Use of this site is subject to the following Terms and Conditions:
          </b>
          <ol className="textterms">
            <li>
              General Quleep, a company registered at Noida, owns and operates
              the Arnxt Platform, which allows customers (“you”) to: Publish 3D
              models of products on the ARnxt Platform, Showcase products in
              Augmented Reality (AR) using the ARnxt app or one of the AR
              formats available, and use any additional Arnxt Platform features
              (“Service”) that are available at any given time according to the
              prices and service plans that are listed at
              https://arnxt.com/pricing . ​ By using the Service,, you accept
              the terms and conditions set out in these ToS. Use of Service We
              provide you a non-exclusive right to use the Service for
              commercial purposes. The Service is described in the service
              descriptions available at https://arnxt.com/ website from time to
              time.We will make our best effort to keep the Service available on
              24/7/365 basis. However, we make no warranties and hereby disclaim
              any liability in respect of the availability or functioning of the
              Service. We may suspend access to the Service at any time for
              reasons relating to data protection, service maintenance or
              development, service misuse or similar valid reasons.Please keep
              your user credentials in good safe. You are responsible for any
              use of the Service through your user credentials.​Subscription
              period, service fees and payments. We offer both quarterly and
              annual subscriptions for the Service. You can manage your
              subscription through the Service or by contacting
              care@arnxt.com.The applicable service fee will be due and payable
              at the beginning of each subscription period. The price of the
              Service depends on the selected service plan which is available at
              https://arnxt.com/pricing . All prices shown exclude GST, which
              will be added to the invoiced amounts. If you wish to purchase
              additional services from ARNxt or if you exceed the limits related
              to a chosen service plan, we are entitled to charge you for these
              additional services (or an additional service tier) in accordance
              with the price list available at https://arnxt.com/pricing.
            </li>
            <li>
              ​Intellectual Property Rights ​ We grant you a limited,
              non-exclusive, non-sub-licensable and non-transferable licence to
              use the Service as it is provided to you, as set forth in these
              ToS. You will own the 3D content and files that you upload and
              publish on the Service (“Customer Content”) to the Service. You
              will also own the intellectual property rights to the 3D model
              created using our 3D Creation Service. By using the Service, you
              grant us a worldwide, non-exclusive, royalty-free right and
              licence to use the Customer Content and the 3D models for the
              purpose of providing the Service. You are responsible for any
              Customer Content submitted to the Service and that it complies
              with any applicable laws and does not violate any third party
              intellectual property rights. You also warrant that you are
              entitled to provide the Customer Content to us and we have the
              right to use it for the purpose of the service.
            </li>
            <li>
              Personal data We process personal data of our customers in
              accordance with the Privacy Policy available at
              https://arnxt.com/privacy-policy .We do not read, use or store any
              data from websites embedding the 3D Viewer without explicit
              authorization of the website owner. You and the website owner are
              liable for your websites and their collection and processing of
              personal data. Confidentiality We will keep all your confidential
              information confidential. Confidential information means any
              non-public information that is provided to us in connection with
              your use of the Service. ​We will use confidential information
              only for the purposes of providing the Service and confidential
              information shall not be disclosed to third parties unless and to
              the extent necessary for the purposes of delivering the Service.
              In all cases we shall ensure that such third parties are subject
              to appropriate confidentiality obligations in respect of your
              confidential information.
            </li>
            <li>
              Confidentiality We will keep all your confidential information
              confidential. Confidential information means any non-public
              information that is provided to us in connection with your use of
              the Service.
            </li>
            <li>
              Term and termination You have the right to use the Service for the
              applicable subscription period. However, we may terminate your
              user account and the right to use the Service with or without a
              notice, if we believe that your use of the Service violates these
              ToS. When the provision of Service ends, we will delete all User
              Content from our servers.
            </li>
            <li>
              ​Limitation of liability ​The Service is provided on an “as is”
              and “as available” basis and we disclaim any liability for its
              functioning or uninterrupted availability. We are not liable for
              any indirect or consequential damages. Our total maximum aggregate
              liability under these ToS is limited to an amount corresponding to
              the service fees paid by you for the Service during a subscription
              period in which the breach occurred.
            </li>
            <li>
              Governing law These ToS shall be governed by the laws of India
              without regard to its principles on conflict of laws. All disputes
              regarding these ToS or the Services shall, at first place, be
              solved in good faith negotiations between you and us. The language
              used in the arbitration proceeding shall be English.​
            </li>
            <li>
              Miscellaneous If any provision of these ToS is found invalid or
              unenforceable by a competent court, the remaining part of the ToS
              will remain in full force and effect. We may update and amend
              these ToS from time to time. We will inform you of any material
              changes but encourage you to review these ToS regularly. The
              latest version of these ToS is available at https://arnxt.com/
            </li>
          </ol>
        </div>
      </div>
      <Footertest />
    </div>
  );
}

export default TermsAndConditions;
