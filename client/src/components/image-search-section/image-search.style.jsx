import { styled, css } from 'styled-components';

const baseParagraphStyles = css`
font-size: 16px;
font-weight: bold;
@media (max-width: 768px) {
    font-size: 12px;
}
`;
export const SectionBreak = styled.hr`
margin: 10px auto;
width: 70%;
font-weight: bold;
border: 1px solid ${props => props.theme.secondActiveColor};
border-radius: 5px;
`;
export const Paragraph = styled.p`
    ${baseParagraphStyles}
`;
export const ActiveParagraph = styled.p`
    ${baseParagraphStyles}
    color: ${props => props.theme.secondActiveColor};
`;
export const ImageUploaderSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        display: block;
    }
`;
export const UploadedImagesSection = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
grid-gap: 10px;
@media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
}
`;
