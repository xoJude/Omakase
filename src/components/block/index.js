import { Left } from "./block-left";
import { Right } from "./block-right";
 
const Block  = ({ position }) => {    
    
    if(position === "right"){
        return (Right);
    } else {
        return (Left);
    }
};
 
Block.Left = Left;
Block.Right = Right;
 
export default Block;
