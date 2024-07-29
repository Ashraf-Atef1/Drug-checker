import { TeamMemberContainer, TeamMemberImageContainer, TeamMemberInfoContainer } from './team-member.style';
import MemberContacts from '../member-contacts/member-contacts.component';

export default function TeamMember ({ memberData }) {
  const { name, role, image, description, linkedin, github, website, email } = memberData;
  return (
    <TeamMemberContainer>
      <TeamMemberImageContainer>
        <img src={image} alt={name} />
        <h4>{name}</h4>
      </TeamMemberImageContainer>
      <TeamMemberInfoContainer>
        <h5>{role}</h5>
        <p>{description}</p>
        <MemberContacts contacts={{ linkedin, github, website, email }} />
      </TeamMemberInfoContainer>
    </TeamMemberContainer>
  );
}
