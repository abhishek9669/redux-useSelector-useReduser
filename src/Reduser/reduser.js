import { A, B, C } from "../coman/comen";

let insialstate = {
    name: 'hello'
 }


let rootreduser = (oldsatte=insialstate,action)=>{
    let newsate = oldsatte;

    switch(action.type){
      case A:
        return newsate={
          ...oldsatte,
          name: 'abhishek'
        }
      
         break;

      case B:
       return newsate={
         ...oldsatte,
         name: 'abhishek 5415415415'
       }
      
         break;

      case C:
       return newsate={
         ...oldsatte,
         name: 'abhishek 55515'
       }
      
         break;
    }
    return newsate;
}

export default rootreduser;