import { contactInformation, socialMediaLinks } from "../constants";

const Footer = () => {

    const linkedInProfileUrl = 'https://www.linkedin.com/in/kris-ch-42446329b/';
    const githubProfileUrl = 'https://github.com/sirk007';

  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div id="Footer" className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-md font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              {contactInformation.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2">
              {socialMediaLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
