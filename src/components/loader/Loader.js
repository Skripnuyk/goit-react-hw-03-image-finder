import { WrapLoader } from './Loader.styled.js';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => { 
 return (
   <WrapLoader>
     <TailSpin />
   </WrapLoader>
 );
}

export default Loader;
