import React from 'react';
import SlidingSkill from "@ui/SlidingSkill.jsx"
const SkillPage = () => {
  
  
  return (

    <div className="w-full font-poppins h-auto flex flex-col items-center bg-zinc-900 text-white dark:text-white "> 
        <h1 className="font-poppinsbold flex flex-row text-3xl text-center py-3 space-x-4">
            <p>What's I Work With</p>
            <p className="font-bungee">?</p>
        </h1>

      <SlidingSkill/>
      
    </div>
  );
};

export default SkillPage;
