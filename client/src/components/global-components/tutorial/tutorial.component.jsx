import { TutorialContainer, NextStopContainer, TuturialInfoContainer, ArrowContainre, Note } from './tutorial.style';
import useTutorial from '../../../hooks/tutorial.hook';
import { ReactComponent as Arrow } from '../../../assets/tutorial-arrow.svg';
import Button from '../button/button.component';

export default function Tutorial () {
  const { currentTutorialInfo, handleCurrentStep, disableTutorialMode } = useTutorial();
  let { title, description, dimensions, navigate, bottomBar } = currentTutorialInfo;
  let { top, left, right, bottom, width } = dimensions;
  const scrollTo = window.scrollY + bottom - (window.innerHeight / 2);
  let className = 'top';
  if (window.innerWidth > 768) {
    bottomBar = false;
  }
  if (bottomBar) {
    className = 'bottom'
  }
  if (title === 'AI response') {
    className = 'bottom bottom-static'
  }
  if (window.innerHeight < bottom + 400) {
    document.body.style.height = '2000px';
  }
  if (!navigate) {
    setTimeout(() => {
      window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }, 200);
  }
  const indentation = window.innerWidth > 480 ? 460 : 0;
  return (
    <TutorialContainer id='tutorial-guide' className={className} dimensions={{ top, left, bottom, indentation, navigate }}>
      <NextStopContainer>
        <div id='tutorial-skip' onClick={disableTutorialMode}>
          <Button type='blur tutorial' text='End Tutorial' />
        </div>
        <div id='tutorial-next' onClick={handleCurrentStep}>
          <Button type='next' text='Next' />
        </div>
      </NextStopContainer>
      <div>
        <ArrowContainre className={bottomBar ? 'bottom' : 'top'} dimensions={{ top, left, right, bottom, indentation, width, navigate }}>
          <Arrow />
        </ArrowContainre>
        <h4>{title}</h4>
        <TuturialInfoContainer dangerouslySetInnerHTML={{ __html: description }} />
        <Note>Press The Next Button In The Right For Moving To Next Step</Note>
      </div>
    </TutorialContainer>
  );
}
