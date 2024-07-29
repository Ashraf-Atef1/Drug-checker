import TeamMember from "./team-member/team-member.component";
import {
	OurMissionContainer,
	TeamMembersContainer,
	VideoPlayerContainer,
} from "./about.style";
import Container from "../global-components/container/container.component";

const teamMembers = [
	{
		name: "Ashraf Atef",
		role: "Software engineer",
		github: "https://github.com/Ashraf-Atef1",
		linkedin: "https://www.linkedin.com/in/ashraf-atef/",
		website: "https://www.ashrafatef.com",
		// email: "contact@ashrafatef.com",
		image: "https://i.ibb.co/GxyF6bY/ashraf-min.jpg",
		description:
			"An innovative software engineer with strong skills in frontend and backend technologies.",
	},
	{
		name: "Khaled Ahmed",
		role: "Backend developer",
		github: "https://github.com/KhaledAbdelgalil",
		// linkedin: 'www.linkedin.com/in/mohamedahmed96',
		image: "https://i.ibb.co/sgYh1Gy/khaled-min.jpg",
		description:
			"Backend developer with experience in Node.js, Express, and MongoDB.",
	},
	{
		name: "Mariam Ahmed",
		role: "Designer",
		github: "https://github.com/mariamabdelgalil",
		image: "https://i.ibb.co/f0bc0Zy/mariam-min.jpg",
		description: "Designer with experience in Figma, Adobe XD, and Photoshop.",
	},
];
export default function AboutSection() {
	return (
		<Container>
			<OurMissionContainer>
				<h3>Our mission</h3>
				<p>
					We are developing the first version of a website dedicated to Egypt,
					designed to check interactions between drugs using their Egyptian
					tradenames. Our mission is to assist pharmacists, doctors, and
					patients in ensuring medication safety and efficacy by providing an
					easy-to-use platform for verifying drug interactions.
				</p>
			</OurMissionContainer>
			<VideoPlayerContainer>
				<h3>Video presentation</h3>
				<iframe
					src="https://www.youtube.com/embed/tYf0z7nKmtQ?si=-5v48Fp3yiUQJUlD"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				/>
			</VideoPlayerContainer>
			<TeamMembersContainer>
				<h3>Team members</h3>
				<div>
					{teamMembers.map((teamMember, index) => (
						<TeamMember key={index} memberData={teamMember} />
					))}
				</div>
			</TeamMembersContainer>
		</Container>
	);
}
