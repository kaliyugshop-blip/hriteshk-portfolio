export interface CaseStudy {
  id: string;
  toolName: string;
  badge: string;
  title: string;
  operation: string;
  purpose: string;
  imageSrc: string;
  keyFindings: string[];
  deliverable?: string;
  referenceDomain?: string;
  isPrimary?: boolean;
  technicalDetails: {
    targetTested?: string;
    endpointsCrawled?: string;
    threatLevel?: string;
    standards?: string[];
  };
  remediationSnippet: string;
  tags: string[];
}

export interface SecuritySkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    proficiency: 'Core' | 'Advanced' | 'Practitioner';
    detail: string;
  }[];
}

export interface TerminalCommand {
  cmd: string;
  label: string;
  category: 'siem' | 'sysmon' | 'network' | 'phishing' | 'recon' | 'payload';
  description: string;
  mitreRef?: string;
  output: string[];
  remediation: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
