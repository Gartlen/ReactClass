import { ReactComponent as CheckSVG } from './CheckBlack.svg';
import { ReactComponent as DeleteSVG } from './DeleteBlack.svg';
import './'

const iconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete":(color) =>  <DeleteSVG className='Icon-svg' fill={color}/>,
};

function TodoIcon ({type, color, onClick }){

return (
    <span className={`Icon-container Icon-container-${type}`}
    onClick={onClick}
    >
        {iconTypes[type](color)}
        
    </span>
);

}

export {TodoIcon};