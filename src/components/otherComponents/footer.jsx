import logo from "../../assets/GDSC-LOGO.png";

const Footer = () => {
  return (
    // <div className="p-28">
    //   <footer id="contact" className="bg-transparent text-grey-500 py-16 p-20">
    //     <div className="container mx-auto flex justify-between">
    //       <div className="first-section flex gap-28 items-center space-x-6 whitespace-nowrap">
    //         {/* Only visible on mobile screens */}
    //         <div className="text-center show-on-mobile flex flex-col justify-start items-center whitespace-nowrap w-">
    //           <img src={logo} width={200} alt="" className="mx-auto my-4" />
    //           <p className="text-lg">MIT ADT UNIVERSITY</p>
    //           <p className="text-sm">Copyright © 2021 All Rights Reserved.</p>
    //         </div>

    //         {/* Visible on desktop screens */}
    //         <div className="associate mr-12">
    //           <h4 className="text-xl font-semibold">Partners</h4>
    //           <ul>
    //             <li><a href="#">Women Techmakers</a></li>
    //             <li><a href="#">Google Developer Experts</a></li>
    //             <li><a href="#">Google Developers Groups</a></li>
    //           </ul>
    //         </div>
    //         <div className="associate mr-12">
    //           <h4 className="text-xl font-semibold">Developers</h4>
    //           <ul>
    //             <li><a href="#">Flutter</a></li>
    //             <li><a href="#">Google Cloud Platform</a></li>
    //             <li><a href="#">Code of conduct</a></li>
    //           </ul>
    //         </div>
    //         <div className="associate mr-12">
    //           <h4 className="text-xl font-semibold">Contribute</h4>
    //           <ul>
    //             <li><a href="#">Telegram</a></li>
    //             <li><a href="#">Discord</a></li>
    //             <li><a href="#">Contact Us</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <div className="grid grid-cols-5  smM:grid-cols-2 mt-[6rem]">
      <div className="col-span-2  flex flex-col justify-center items-center">
        <img className="w-[12.5rem]" src={logo} alt="logo" />
        <p className="text-lg">MIT ADT UNIVERSITY</p>
        <span>Copyright © 2021 All Rights Reserved.</span>
      </div>
      <div className="space-y-4 smM:hidden">
          <h4 className="text-xl font-semibold">Partners</h4>
        <ul className="space-y-3">
          <li>
            <a href="https://developers.google.com/womentechmakers">Women Techmakers</a>
          </li>
          <li>
            <a href="https://developers.google.com/community/experts">Google Developer Experts</a>
          </li>
          <li>
            <a href="https://developers.google.com/community/gdg">Google Developers Groups</a>
          </li>
        </ul>
      </div>
      <div className="space-y-4 smM:hidden">
        <h4 className="text-xl font-semibold">Developers</h4>
        <ul className="space-y-3">
          <li>
            <a href="https://flutter.dev/community">Flutter</a>
          </li>
          <li>
            <a href="https://www.googlecloudcommunity.com/">Google Cloud Platform</a>
          </li>
          <li>
            <a href="https://developersonair.withgoogle.com/code-of-conduct">Code of conduct</a>
          </li>
        </ul>
      </div>
      <div className="space-y-4 smM:hidden">
        <h4 className="text-xl font-semibold">Contribute</h4>
        <ul className="space-y-3">
          <li>
            <a href="https://www.linkedin.com/showcase/googledevelopers/">Telegram</a>
          </li>
          <li>
            <a href="#">Discord</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;