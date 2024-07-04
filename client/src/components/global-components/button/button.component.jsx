import { MainButton } from './button.style';
import { ReactComponent as BackIcon } from '../../../assets/back.svg';
import { ReactComponent as NextIcon } from '../../../assets/next.svg';

const icons = {
  back: <BackIcon />,
  next: <NextIcon value='next' />
};
export default function Button ({ text, onClick, type, id }) {
  return (
    <MainButton id={id} className={type || ''} onClick={onClick} value={text}>{icons[type]}{text}</MainButton>
  );
}
