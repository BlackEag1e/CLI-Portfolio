// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
 for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
  const cmd = Object.keys(bin).sort()[i - 1];
  if (cmd === 'banner') continue; // skip printing the banner command
  c += '> ' + cmd + '\n';
  }


  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// // Redirection
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hey, you made it here! You must be interested in me then…
I'm ${config.name}, passionate about Networking, Cloud, and DevOps.
I design secure, scalable systems and automate processes to make life easier.
Hands-on with Python, network engineering, and cloud platforms.
If it’s infrastructure, automation, or DevOps—count me in!`;
};

// export const resume = async (args: string[]): Promise<string> => {
//   window.open(`${config.resume_url}`);
//   return 'Opening resume...';
// };

// // Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
// export const email = async (args: string[]): Promise<string> => {
//   window.open(`mailto:${config.email}`);
//   return `Opening mailto:${config.email}...`;
// };

// export const github = async (args: string[]): Promise<string> => {
//   window.open(`https://www.linkedin.com/in/rithish-k-968105268/`);

//   return 'Opening github...';
// };

export const contact = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`)
  window.open(`https://www.linkedin.com/in/rithish-k-968105268/`)
  window.open(`https://github.com/BlackEag1e`);

  return 'Opening contact...';
  };

// // Search
// export const google = async (args: string[]): Promise<string> => {
//   window.open(`https://google.com/search?q=${args.join(' ')}`);
//   return `Searching google for ${args.join(' ')}...`;
// };

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// Typical linux commands
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

// export const whoami = async (args: string[]): Promise<string> => {
//   return `${config.ps1_username}`;
// };

export const certifications = async (args: string[]): Promise<string> => {
  return `- CCNA - Cisco Certified Network Associate from Cisco | Cisco ID: CSCO14711356
- ISC2 Certified in Cybersecurity course completion from (ISC)2 
- Python Essentials 1,2 from cisco networking academy 
- Introduction to cybersecurity and cybersecurity essentials from Cisco `;
};
export const experience = async (args: string[]): Promise<string> => {
  return `EXPERIENCE
Network Engineer Intern – BREAD FINANCIAL (July 2025 - Present)
- Handled incidents in ServiceNow, including SSL renewals, IP allocations, and network issues.
- Automated SSL renewal tasks using Python on Netscaler ADC.
- Worked on Layer 2 networking tasks like VLANs and switch configurations.
- Assisted senior engineers with changes and Automation tasks.

NOC Intern - BRILLIO (Mar 2025 - May 2025)
- Worked as an L1 Network Operations Center (NOC) Engineer, monitoring network health and resolving tickets.
- Managed incidents using SolarWinds and ServiceNow, ensuring SLA compliance and real-time response.
- Escalated major issues to L2/L3 teams and contributed to post-incident documentation.
- Ensured high availability and performance of services through active monitoring and quick remediation.`;
};
export const skills = async (args: string[]): Promise<string> => {
  return `Networking: OSPF, EIGRP, VLAN, ACL, NAT, DHCP, STP, ASA Firewall
Tools: Wireshark, Nmap, Snort, Splunk, Wazuh, Zabbix, Snipe-IT
Programming: Python, SQL
Cloud: AWS (EC2, S3, VPC, IAM)
Cybersecurity: ISC2 CC, OSINT, AAA, SIEM, Network Security
DevOps: Linux, Docker, GitHub Actions, CI/CD, Automation`;
};

export const projects = async (args: string[]): Promise<string> => {
  return `1. OSINT Account Verification Tool
Automated tool to check if emails or phone numbers are linked to online accounts.
Tech Stack: Python, Selenium, OSINT APIs

2. Network Design and ASA Firewall Implementation
Designed and configured a multi-layer enterprise network with OSPF, DHCP, VLANs, NAT, and ASA Firewall ACLs.
Platform: Cisco Packet Tracer

3. Python Network Scanner
Script to discover and list active devices on a network.`;
};

export const quote = async (args: string[]): Promise<string> => {
  return `Sometimes what you want is a wish, what you get is a blessing. Trust God’s timing and wisdom.`;
};

// export const date = async (args: string[]): Promise<string> => {
//   return new Date().toString();
// };

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

// export const sudo = async (args?: string[]): Promise<string> => {
//   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
//   return `Permission denied: with little power comes... no responsibility? `;
// };

// Banner
export const banner = (args?: string[]): string => {
  return `
███████╗ ██╗ ████████╗██╗  ██╗ ██╗ ███████╗██╗  ██╗     ██████╗ ██╗      ██╗
██╔══██╗ ██║ ╚══██╔══╝██║  ██║ ██║ ██╔════╝██║  ██║    ██╔════╝ ██║      ██║
██████╔╝ ██║    ██║   ███████║ ██║ ███████╗███████║    ██║      ██║      ██║
██╔══██╗ ██║    ██║   ██╔══██║ ██║ ╚════██║██╔══██║    ██║      ██║      ██║
██║  ██║ ██║    ██║   ██║  ██║ ██║ ███████║██║  ██║    ╚██████╗ ███████╗ ██║
╚═╝  ╚═╝ ╚═╝    ╚═╝   ╚═╝  ╚═╝ ╚═╝ ╚══════╝╚═╝  ╚═╝     ╚═════╝ ╚══════╝ ╚═╝
Type 'help' to navigate through my skills, projects, and commands.
See a quick overview of me with 'sumfetch'.
Check out my work on Github by typing 'repo' or clicking <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u>.
`;
};
