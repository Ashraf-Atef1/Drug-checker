import { ReactComponent as GithubIcon } from '../../../assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/linkedin.svg';
import { ReactComponent as WebsiteIcon } from '../../../assets/website.svg';
import { ReactComponent as EmailIcon } from '../../../assets/email.svg';
import { MemberContactsContainer } from './member-contacts.style';

export default function MemberContacts ({ contacts }) {
  const { github, linkedin, website, email } = contacts;

  return (
    <MemberContactsContainer>
      {github && <li><a href={github}><GithubIcon /></a></li>}
      {linkedin && <li><a href={linkedin}><LinkedinIcon /></a></li>}
      {website && <li><a href={website}><WebsiteIcon /></a></li>}
      {email && <li><a href={`mailto:${email}`}><EmailIcon /></a></li>}
    </MemberContactsContainer>
  );
}
