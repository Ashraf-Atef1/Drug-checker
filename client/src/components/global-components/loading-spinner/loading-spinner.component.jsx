import { DNA } from 'react-loader-spinner';
import { LoadingSpinnerContainer } from './loading-spinner.style';
export default function LoadingSpinner () {
  return (
    <LoadingSpinnerContainer>
      <DNA
        visible
        ariaLabel='dna-loading'
        wrapperStyle={{}}
        wrapperClass='dna-wrapper'
      />
    </LoadingSpinnerContainer>
  );
}
