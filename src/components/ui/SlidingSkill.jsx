import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  FaVuejs, FaReact, FaNodeJs, FaNode, 
  FaPython, FaDatabase, FaFireAlt
} from 'react-icons/fa';
import { 
  SiNuxtdotjs, SiExpress, SiTailwindcss, 
  SiTypescript, SiJavascript, SiDjango, 
  SiFlask, SiPostgresql, SiMongodb
} from 'react-icons/si';
import { BiLogoFirebase } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";

export default function Component() {
  const frontendIcons = [
    { id: 1, icon: FaVuejs, name: 'Vue.js' },
    { id: 2, icon: FaReact, name: 'React' },
    { id: 3, icon: SiNuxtdotjs, name: 'Nuxt.js' },
    { id: 4, icon: FaNodeJs, name: 'Node.js' },
    { id: 5, icon: SiExpress, name: 'Express' },
    { id: 6, icon: SiTailwindcss, name: 'Tailwind CSS' },
    { id: 7, icon: SiTypescript, name: 'TypeScript' },
    { id: 8, icon: SiJavascript, name: 'JavaScript' },
  ];

  const backendIcons = [
    { id: 1, icon: FaPython, name: 'Python' },
    { id: 2, icon: SiDjango, name: 'Django' },
    { id: 3, icon: SiFlask, name: 'Flask' },
    { id: 4, icon: BiLogoFirebase, name: 'Firebase' },
    { id: 5, icon: SiPostgresql, name: 'PostgreSQL' },
    { id: 6, icon: SiMongodb, name: 'MongoDB' },
    { id: 7, icon: DiJqueryLogo, name: 'jquery' },
  ];
  
  
  const icon = [
    { id: 1, icon: FaVuejs, name: 'Vue.js' },
    { id: 2, icon: FaReact, name: 'React' },
    { id: 3, icon: SiNuxtdotjs, name: 'Nuxt.js' },
    { id: 4, icon: FaNodeJs, name: 'Node.js' },
    { id: 5, icon: SiExpress, name: 'Express' },
    { id: 6, icon: SiTailwindcss, name: 'Tailwind CSS' },
    { id: 7, icon: SiTypescript, name: 'TypeScript' },
    { id: 8, icon: SiJavascript, name: 'JavaScript' },
    { id: 9, icon: FaPython, name: 'Python' },
    { id: 10, icon: SiDjango, name: 'Django' },
    { id: 11, icon: SiFlask, name: 'Flask' },
    { id: 12, icon: BiLogoFirebase, name: 'Firebase' },
    { id: 13, icon: SiPostgresql, name: 'PostgreSQL' },
    { id: 14, icon: SiMongodb, name: 'MongoDB' },
    { id: 15, icon: DiJqueryLogo, name: 'jquery' },
  ];
  
  
  
  const IconWrapper = ({ Icon, name }) => (
    <div className="w-20 h-20 font-poppins bg-zinc-800 flex flex-col items-center justify-center rounded-lg p-2 transition-all duration-300">
      <Icon className="text-4xl text-white mb-2" />
      <span className="text-xs text-white text-center">{name}</span>
    </div>
  );

  return (
    <div className="w-full mx-auto py-8 text-white dark:text-white">
      <div className="block md:hidden lg:hidden">

        <div className="space-y-0">
          <div>
            <Marquee gradient={true} gradientColor={"#121515"} gradientWidth={40} className="rounded-t pt-4 flec items-center">
              <div className="flex space-x-4 py-1 px-2">
                {frontendIcons.map((item) => (
                  <IconWrapper key={item.id} Icon={item.icon} name={item.name} />
                ))}
              </div>
            </Marquee>
          </div>
          <div>
            <Marquee className="rounded-b pb-4 flec items-center" gradient={true} gradientColor={"#121515"} gradientWidth={60} direction="right">
              <div className="flex space-x-4 py-1 px-2">
                {backendIcons.map((item) => (
                  <IconWrapper key={item.id} Icon={item.icon} name={item.name} />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block">


      <div className="space-y-0">
        <div>
          <Marquee gradient={true} gradientColor={"#121515"} gradientWidth={60} className="rounded-t pt-4 flec items-center">
            <div className="flex space-x-4 py-1 px-2">
              {icon.map((item) => (
                <IconWrapper key={item.id} Icon={item.icon} name={item.name} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      </div>
      
    </div>
  );
}