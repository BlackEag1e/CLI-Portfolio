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

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hey, you made it here! Glad you're interested in my work.

I'm ${config.name}, an AWS Cloud & DevOps Engineer with hands-on experience designing
and deploying secure, scalable cloud infrastructure for enterprise clients.

Skilled in cloud architecture, Infrastructure as Code (Terraform), DevOps automation,
and cost optimization. I've collaborated with 20+ clients on requirement gathering,
architecture design, and migrations.

Strong expertise across AWS, Linux, Python, and containerized deployments.
If it's cloud, infrastructure, or automation — count me in!`;
};

export const contact = async (args: string[]): Promise<string> => {
  return `CONTACT

Email:    <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email}" target="_blank">${config.email}</a></u>
LinkedIn: <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.linkedin}" target="_blank">${config.social.linkedin.replace('https://www.', '')}</a></u>
GitHub:   <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.github}" target="_blank">${config.social.github.replace('https://', '')}</a></u>`;
};

export const certifications = async (args: string[]): Promise<string> => {
  return `- CCNA – Cisco Certified Network Associate | Cisco ID: CSCO14711356
- ISC2 Certified in Cybersecurity (CC)
- AWS Cloud Practitioner
- Python Essentials 1 & 2 – Cisco Networking Academy
- Introduction to Cybersecurity & Cybersecurity Essentials – Cisco`;
};

export const experience = async (args: string[]): Promise<string> => {
  return `EXPERIENCE

Cloud & DevOps Engineer – Ancrew Global Services Pvt. Ltd. (Feb 2026 – Present)
- Designed AWS cloud architectures and deployment strategies for 20+ client engagements.
- Conducted technical discussions on architecture, scalability, security, and migration strategies.
- Prepared BOQs, AWS cost estimations, architecture diagrams, and solution documents.
- Provisioned and managed AWS infrastructure using Terraform (IaC best practices).
- Executed deployments across dev and production with high availability and security compliance.
- Automated infrastructure and deployment tasks using Bash and Python.
- Monitored production workloads with CloudWatch and set up proactive alerting.

Network Engineer Intern – Bread Financial (Jul 2025 – Dec 2025)
- Deployed Flask applications using Docker on internal servers for SSL monitoring dashboards.
- Automated SSL certificate renewal workflows using Python on NetScaler ADC (70% less manual effort).
- Designed custom Grafana and ServiceNow dashboards for real-time infrastructure visibility.
- Executed 5+ daily change requests for SSL renewals and vendor maintenance (ITIL-aligned).
- Monitored infrastructure health and supported incident triage during 24/7 operations.`;
};

export const education = async (args: string[]): Promise<string> => {
  return `EDUCATION

Sri Eshwar College of Engineering
B.E. in Electronics and Communication Engineering
CGPA: 8.4 | 2021 – 2025`;
};

export const skills = async (args: string[]): Promise<string> => {
  return `Cloud: AWS (EC2, ECS, Lambda, VPC, Route53, CloudFront, ALB, IAM, S3, RDS,
       ECR, CloudWatch, KMS, Secrets Manager, SNS, SQS, EventBridge, SSM, STS,
       Cost Explorer, Amazon Bedrock)

IaC: Terraform, CloudFormation (Basics)
Containers: Docker, Kubernetes, Amazon ECS
Automation: Python, Bash
CI/CD: GitHub Actions, Jenkins, Argo CD, Maven
Monitoring: CloudWatch, CloudTrail, Grafana, Prometheus
Databases: MySQL, PostgreSQL, SQLite
OS: Linux, Windows
Version Control: Git, GitHub`;
};

export const projects = async (args: string[]): Promise<string> => {
  return `1. Enterprise Cloud Migration & AWS Infrastructure Deployment
Designed and implemented AWS infrastructure for enterprise clients — greenfield and
migration projects from on-premises and Azure to AWS with minimal downtime.
Provisioned VPCs, EC2, IAM, ECS, ECR, RDS, CloudFront, Route53 via Terraform.
Tech: AWS, Terraform, Docker, ECS, EC2, IAM, VPC, RDS, CloudFront, Route53

2. AWS Billing Portal (Internal Product)
Built an internal portal to centrally manage AWS billing across multiple client accounts.
Features: Email OTP auth, JWT, RBAC, STS AssumeRole, Cost Explorer API sync, cost trends,
service-wise billing, forecasts, credits tracking, and exports.
Tech: FastAPI, Python, React, SQLite, SQLAlchemy, AWS STS, Cost Explorer API, JWT

3. Scalable & Fault-Tolerant Web Application on AWS
Multi-AZ architecture with ALB and Auto Scaling Groups — 40% availability improvement.
VPC with public/private subnets, NAT gateways, EC2 behind ALB with horizontal scaling.
Tech: AWS (VPC, EC2, ALB, Auto Scaling), Terraform`;
};

export const achievements = async (args: string[]): Promise<string> => {
  return `HACKATHONS & ACHIEVEMENTS

- Dr. Kalam Young Achiever Award – World Youth Federation (2024)
- Winner – Epitome'24 Hackathon among 105 teams, GRIET Hyderabad (Rs. 20,000)
- Finalist – Smart India Hackathon, Government of India
- Finalist – Top 8 out of 800 teams, MIT Manipal Hackathon
- Top 5 – Final Round Idea Pitching, NIT Trichy`;
};

export const quote = async (args: string[]): Promise<string> => {
  return `Sometimes what you want is a wish, what you get is a blessing. Trust God's timing and wisdom.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
███████╗ ██╗ ████████╗██╗  ██╗ ██╗ ███████╗██╗  ██╗     ██████╗ ██╗      ██╗
██╔══██╗ ██║ ╚══██╔══╝██║  ██║ ██║ ██╔════╝██║  ██║    ██╔════╝ ██║      ██║
██████╔╝ ██║    ██║   ███████║ ██║ ███████╗███████║    ██║      ██║      ██║
██╔══██╗ ██║    ██║   ██╔══██║ ██║ ╚════██║██╔══██║    ██║      ██║      ██║
██║  ██║ ██║    ██║   ██║  ██║ ██║ ███████║██║  ██║    ╚██████╗ ███████╗ ██║
╚═╝  ╚═╝ ╚═╝    ╚═╝   ╚═╝  ╚═╝ ╚═╝ ╚══════╝╚═╝  ╚═╝     ╚═════╝ ╚══════╝ ╚═╝

AWS Cloud & DevOps Engineer | Terraform · Docker · ECS · Python
Type 'help' to explore skills, experience, projects, and more.
See a quick overview with 'sumfetch'.
Check out my work on Github: <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u>.
`;
};
