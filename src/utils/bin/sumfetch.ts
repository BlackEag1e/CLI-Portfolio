import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   Portfolio: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else {
    const role = (config as { role?: string }).role ?? 'AWS Cloud & DevOps Engineer';
    return `
            Portfolio: summary display
           -----------
            ABOUT
            ${config.name}
            ${role}
            <u><a href="${config.resume_url}" target="_blank">resume</a></u>
           爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
           -----------
            CONTACT 
            <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>    
            <u><a href="${config.social.github}" target="_blank">${config.social.github.replace('https://', '')}</a></u>
            <u><a href="${config.social.linkedin}" target="_blank">${config.social.linkedin.replace('https://www.', '')}</a></u>
           -----------
            Ancrew Global Services · Cloud & DevOps Engineer
            B.E. ECE – Sri Eshwar College of Engineering (CGPA 8.4)
           -----------
    
`;
  }
};

export default sumfetch;
